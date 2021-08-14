import { Board } from "./Board.js";
import { Slider } from "./Slider.js";
import { solve } from "../algorithms/solve.js";
import { useState } from "react";

const defaultBoardValues = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

const SudokuSolver = () => {
  const [boardValues, setBoardValues] = useState(defaultBoardValues);

  async function animateSolution(board) {
    var animations = solve(board);
  
    if (animations) {
      for (const anim of animations) {
        var animSpeed = document.getElementById("animSpeed").value;
        await animateCell(anim, animSpeed);
      }
    }
  }
  
  const animateCell = (anim, animSpeed) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById(anim.cell).style.backgroundColor = anim.color;
        document.getElementById(anim.cell).innerText =
          anim.number == 0 ? "" : anim.number;
        resolve();
      }, animSpeed ** 2);
    });
  };  

  return (
    <div>
      <button onClick={() => animateSolution(boardValues)}>solve</button>
      <button >reset</button>
      <Slider />
      <Board values={boardValues} />
    </div>
  );
};

export default SudokuSolver;
