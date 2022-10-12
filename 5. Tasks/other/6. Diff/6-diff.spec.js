const diff = require('./6-diff');

describe('diff', () => {
  describe('added', () => {
    it('with valid params', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3, 4, 5];
      const { added } = diff(arr1, arr2);

      expect(added).toStrictEqual([4, 5]);
    });

    it('with empty first array', () => {
      const arr1 = [];
      const arr2 = [1, 2, 3];
      const { added } = diff(arr1, arr2);

      expect(added).toStrictEqual([1, 2, 3]);
    });

    it('with empty second array', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [];
      const { added } = diff(arr1, arr2);

      expect(added).toStrictEqual([]);
    });

    it('with unsorted arrays', () => {
      const arr1 = [3, 1, 2, 4];
      const arr2 = [6, 8, 3, 1, 4, 2];
      const { added } = diff(arr1, arr2);

      expect(added).toStrictEqual([6, 8]);
    });

    it('with string arrays', () => {
      const arr1 = ['ab', 'bc', 'cd'];
      const arr2 = ['ab', 'bc', 'cd', 'de'];
      const { added } = diff(arr1, arr2);

      expect(added).toStrictEqual(['de']);
    });

    it('with unsorted string arrays', () => {
      const arr1 = ['ab', 'bc', 'cd'];
      const arr2 = ['bc', 'ab', 'cd', 'de', 'ef'];
      const { added } = diff(arr1, arr2);

      expect(added).toStrictEqual(['de', 'ef']);
    });
  });

  describe('same', () => {
    it('with valid params', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3, 4, 5];
      const { same } = diff(arr1, arr2);

      expect(same).toStrictEqual([1, 2, 3]);
    });

    it('with empty first array', () => {
      const arr1 = [];
      const arr2 = [1, 2, 3];
      const { same } = diff(arr1, arr2);

      expect(same).toStrictEqual([]);
    });

    it('with empty second array', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [];
      const { same } = diff(arr1, arr2);

      expect(same).toStrictEqual([]);
    });

    it('with unsorted arrays', () => {
      const arr1 = [3, 1, 2, 4];
      const arr2 = [6, 8, 3, 1, 4, 2];
      const { same } = diff(arr1, arr2);

      expect(same).toStrictEqual([1, 2, 3, 4]);
    });

    it('with string arrays', () => {
      const arr1 = ['ab', 'bc', 'cd'];
      const arr2 = ['ab', 'bc', 'cd', 'de', 'ef'];
      const { same } = diff(arr1, arr2);

      expect(same).toStrictEqual(['ab', 'bc', 'cd']);
    });

    it('with unsorted string arrays', () => {
      const arr1 = ['ab', 'bc', 'cd'];
      const arr2 = ['bc', 'ab', 'cd', 'de', 'ef'];
      const { same } = diff(arr1, arr2);

      expect(same).toStrictEqual(['ab', 'bc', 'cd']);
    });
  });

  describe('removed', () => {
    it('with valid params', () => {
      const arr1 = [1, 2, 3, 4, 5];
      const arr2 = [1, 2, 3];
      const { removed } = diff(arr1, arr2);

      expect(removed).toStrictEqual([4, 5]);
    });

    it('with empty first array', () => {
      const arr1 = [];
      const arr2 = [1, 2, 3];
      const { removed } = diff(arr1, arr2);

      expect(removed).toStrictEqual([]);
    });

    it('with empty second array', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [];
      const { removed } = diff(arr1, arr2);

      expect(removed).toStrictEqual([1, 2, 3]);
    });

    it('with unsorted arrays', () => {
      const arr1 = [3, 1, 2, 4];
      const arr2 = [3, 2];
      const { removed } = diff(arr1, arr2);

      expect(removed).toStrictEqual([1, 4]);
    });

    it('with string arrays', () => {
      const arr1 = ['ab', 'bc', 'cd'];
      const arr2 = ['ab', 'bc'];
      const { removed } = diff(arr1, arr2);

      expect(removed).toStrictEqual(['cd']);
    });

    it('with unsorted string arrays', () => {
      const arr1 = ['ab', 'bc', 'cd', 'de', 'ef'];
      const arr2 = ['ef', 'cd', 'de'];
      const { removed } = diff(arr1, arr2);

      expect(removed).toStrictEqual(['ab', 'bc']);
    });
  });
});
