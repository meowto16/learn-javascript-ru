function query() {
  const builder = Symbol('Query Builder')

  return {
    [builder]: {
      select: null,
      from: null,
      where: [],
      orderBy: [],
      groupBy: null,
      having: [],
    },
    select(rowCallback) {
      if (this[builder].select) {
        throw new Error('Duplicate SELECT')
      }

      this[builder].select = rowCallback

      return this
    },
    from(collection) {
      if (this[builder].from) {
        throw new Error('Duplicate FROM')
      }

      this[builder].from = collection

      return this
    },
    where(...rowCallbacks) {
      this[builder].where.push(rowCallbacks)

      return this
    },
    groupBy(...rowCallbacks) {
      if (this[builder].groupBy) {
        throw new Error('Duplicate GROUP BY')
      }

      this[builder].groupBy = rowCallbacks

      return this
    },
    orderBy(rowCallback) {
      return this
    },
    execute() {
      const state = this[builder]

      let collection = state.from || []
      let groupedTree = {}
      let grouped = []

      if (state.where.length) {
        collection = collection.filter(row => {
          return state.where.every(callbacks => {
            return callbacks.some(callback => callback.call(this, row))
          })
        })
      }

      if (state.select) {
        collection = collection.map(state.select)
      }

      if (state.groupBy?.length) {
        const getKey = state.groupBy[0]

        for (const item of collection) {
          const keys = state.groupBy.map(getKey => getKey(item))

          let treeItem = groupedTree

          for (let i = 0; i < keys.length; i++) {
            const isLast = i === keys.length - 1
            const key = keys[i]

            treeItem[key] = treeItem[key] || (isLast ? [] : {})
            treeItem = treeItem[key]

            if (isLast) {
              treeItem.push(item)
            }
          }
        }
      }


      return grouped.length ? grouped : collection
    },
  }
}
