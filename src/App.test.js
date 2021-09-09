import { solve } from "./algorithms/solve.js";
import { unsolvedBoards, solutions } from "./unsolvedBoards.js";

test("returns correct solution to unsolved board", () => {
  for (let i = 0; i < solutions.length; i++) {
    let [, board] = solve(unsolvedBoards[i]);
    let solution = solutions[i];
    expect(board).toEqual(solution);
  }
});
