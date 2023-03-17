/* 
    init_rating : initial rating score
    opponent_rating : opponent rating score
    match_result : literaly match result
        1 is Win, 0.5 is Draw, 0 is Lose
    k : K-factor
    */

export interface match {
  init_rating: number;
  opponent_rating: number;
  match_result: number;
  k: number;
}

function update_ELORating(match: match) {
  const expected =
    1 / (1 + 10 ** ((match.opponent_rating - match.init_rating) / 400));
  const result_rating =
    match.init_rating + match.k * (match.match_result - expected);
  return result_rating;
}

export default { update_ELORating };
