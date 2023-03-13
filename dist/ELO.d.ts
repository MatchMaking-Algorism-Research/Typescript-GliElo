export interface match {
  init_rating: number;
  opponent_rating: number;
  match_result: number;
  k: number;
}
declare function update_ELORating(match: match): number;
declare const _default: {
  update_ELORating: typeof update_ELORating;
};
export default _default;
