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
      let grouped = []

      if (state.where.length) {
        collection = collection.filter(row => {
          return state.where.every(callbacks => {
            return callbacks.some(callback => callback.call(this, row))
          })
        })
      }

      if (state.groupBy?.length) {
        const groupBy = (acc, row, defineKeyCallback) => {
          const key = defineKeyCallback.call(this, row)
          if (!acc[key]) acc[key] = []

          acc[key].push(row)

          return acc
        }

        grouped = collection.reduce((acc, row) => groupBy(acc, row, state.groupBy[0]), {})

        if (state.select) {
          collection = collection.map(state.select)
        }

        return collection
      },
    }
  }