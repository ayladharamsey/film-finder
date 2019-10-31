import { favorites } from './setFaves';

describe('favorites', () => {
    it('should return the initial state', () => {
      const expected = [];

      const result = favorites(undefined, {});

      expect(result).toEqual(expected);
    });


});
