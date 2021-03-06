import { twoNumberSum1, twoNumberSum2 } from './twoNumberSum.js';
import { expect } from 'chai';

describe('Two number sum question', function () {
  describe('Test Case #1', function () {
    it('Solves problem using pointers', function () {
      const output = twoNumberSum1([3, 5, -4, 8, 11, 1, -1, 6], 10);
      expect(output.length === 2).to.deep.equal(true);
      expect(output.includes(11)).to.deep.equal(true);
      expect(output.includes(-1)).to.deep.equal(true);
    });
  });
  describe('Test Case #2', function () {
    it('Solves problem using hash table', function () {
      const output = twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10);
      expect(output.length === 2).to.deep.equal(true);
      expect(output.includes(11)).to.deep.equal(true);
      expect(output.includes(-1)).to.deep.equal(true);
    });
  });
});
