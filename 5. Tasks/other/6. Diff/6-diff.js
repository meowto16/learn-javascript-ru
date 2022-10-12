/**
 * Возвращает разницу между массивами
 * Результат отсортирован.
 *
 * В массивах должны быть уникальные значения, не могут повторяться.
 * Не имеет разницы отсортирован ли массив, влияют только значения внутри
 * @param arr1
 * @param arr2
 */
const diff = (arr1, arr2)=> {
  const added = [];
  const removed = [];
  const same = [];

  const mapByValue = (arr) => arr.reduce((acc, cur) => {
    const key = String(cur);
    acc[key] = cur;

    return acc;
  }, {});

  const map1 = mapByValue(arr1);
  const map2 = mapByValue(arr2);

  const combined = { ...map1, ...map2 };
  const keys = Object.keys(combined);

  for (const key of keys) {
    const exists = {
      in: {
        first: Boolean(map1[key]),
        second: Boolean(map2[key]),
      },
    };

    if (exists.in.first && exists.in.second) {
      same.push(combined[key]);
    }

    if (exists.in.first && !exists.in.second) {
      removed.push(combined[key]);
    }

    if (!exists.in.first && exists.in.second) {
      added.push(combined[key]);
    }
  }

  return {
    added,
    removed,
    same,
  };
};

module.exports = diff