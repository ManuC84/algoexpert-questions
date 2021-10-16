import { expect } from 'chai';
import {
  isValidSubsequence1,
  isValidSubsequence2,
} from './validSubsequence.js';

describe('Is valid subsequence question', function () {
  describe('Test Case #1', function () {
    it('Solves problem using pointers', function () {
      const array = [5, 1, 22, 25, 6, -1, 8, 10];
      const sequence = [1, 6, -1, 10];
      expect(isValidSubsequence1(array, sequence)).to.deep.equal(true);
    });
  });
  describe('Test Case #2', function () {
    it('Solves problem using for loop', function () {
      const array = [5, 1, 22, 25, 6, -1, 8, 10];
      const sequence = [1, 6, -1, 10];
      expect(isValidSubsequence2(array, sequence)).to.deep.equal(true);
    });
  });
});
