export function tournamentWinner(competitions, results) {
  let scores = { '': 0 };
  let bestTeam = '';
  for (const [idx, competition] of competitions.entries()) {
    const homeTeam = competition[0];
    const awayTeam = competition[1];
    const homeWin = results[idx] === 1;
    const awayWin = results[idx] === 0;
    if (homeWin) {
      if (!scores.hasOwnProperty(homeTeam)) {
        scores[homeTeam] = 3;
      } else {
        scores[homeTeam] = scores[homeTeam] + 3;
      }

      if (scores[homeTeam] > scores[bestTeam]) bestTeam = homeTeam;
    } else if (awayWin) {
      if (!scores.hasOwnProperty(awayTeam)) {
        scores[awayTeam] = 3;
      } else {
        scores[awayTeam] = scores[awayTeam] + 3;
      }
      if (scores[awayTeam] > scores[bestTeam]) bestTeam = awayTeam;
    }
  }

  return bestTeam;
}
