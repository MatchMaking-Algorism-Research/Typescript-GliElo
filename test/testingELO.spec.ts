import { update_ELORating } from "../dist/ELO";

var expect = require("chai").expect;

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

    player1["rating"] = update_ELORating(
      player1["rating"],
      player2["rating"],
      1,
      20
    );
    expect(player1["rating"]).to.equal(1516);
  });
});
