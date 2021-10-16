import { expect } from 'chai';
import { tournamentWinner } from './tournamentWinner.js';

describe('Tournament winner', function () {
  describe('Test Case #1', function () {
    it('Solves problem in O(n) time', function () {
      const competitions = [
        ['HTML', 'C#'],
        ['C#', 'Python'],
        ['Python', 'HTML'],
      ];
      const results = [0, 0, 1];
      const expected = 'Python';
      const actual = tournamentWinner(competitions, results);
      expect(actual).to.deep.equal(expected);
    });
  });
});
