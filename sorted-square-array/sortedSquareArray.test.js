import { expect } from 'chai';
import {
  sortedSquaredArray1,
  sortedSquaredArray2,
  sortedSquaredArray3,
} from './sortedSquareArray.js';

describe('Sorted square array', function () {
  describe('Test Case #1', function () {
    it('Solves problem using brute force', function () {
      const input = [1, 2, 3, 5, 6, 8, 9];
      const expected = [1, 4, 9, 25, 36, 64, 81];
      const actual = sortedSquaredArray1(input);
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('Test Case #2', function () {
    it('Solves problem using for loop', function () {
      const input = [1, 2, 3, 5, 6, 8, 9];
      const expected = [1, 4, 9, 25, 36, 64, 81];
      const actual = sortedSquaredArray2(input);
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('Test Case #3', function () {
    it('Solves problem using while loop', function () {
      const input = [1, 2, 3, 5, 6, 8, 9];
      const expected = [1, 4, 9, 25, 36, 64, 81];
      const actual = sortedSquaredArray3(input);
      expect(actual).to.deep.equal(expected);
    });
  });
});
