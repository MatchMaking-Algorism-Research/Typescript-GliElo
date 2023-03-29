import { update_ELORating ,match} from "../src/lib/ELO";
import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe("1500 vs 1600 ELO test", () => {
  it("", () => {
    const player1 = {
      name: "Jim",
      rating: 1500,
    };

    const player2 = {
      name: "Kim",
      rating: 1600,
    };

    const match_test:match = {
      init_rating: player1["rating"],
      opponent_rating: player2["rating"],
      match_result: 1,
      k: 20,
    };

    player1["rating"] = update_ELORating(match_test);
    expect(player1["rating"]).to.equal(1516);
  });
});
