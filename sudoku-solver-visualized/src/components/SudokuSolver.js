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

const convertBoardArrayToObjects = (arr) => {
  let newBoard = [];

  arr.forEach((row) =>  {
    let newRow = [];

    row.forEach((cell) => {
      // statuses: 
      // "static" - initial state for all cells,
      //            cells with an initial value will always be static
      // "active" - the cell that the algorithm is currently 
      //            selecting a value for
      // "visited" - a cell that was active previously
      newRow.push({number: cell, status: "static"});
    });

    newBoard.push(newRow);
  });

  return newBoard;
}

const SudokuSolver = () => {
  const [boardValues, setBoardValues] = useState(convertBoardArrayToObjects(defaultBoardValues));
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  async function animateSolution(board) {
    var animations = solve(defaultBoardValues); // CHANGE THIS TO NOT USE DEFAULT
    setButtonsDisabled(true);
  
    if (animations) {
      for (const anim of animations) {
        var animSpeed = document.getElementById("animSpeed").value;
        await animateCell(anim, animSpeed);
      }
    }

    setButtonsDisabled(false);
  }
  
  const animateCell = (anim, animSpeed) => {
    console.log({anim})
    return new Promise((resolve) => {
      setTimeout(() => {
        let newBoard = [...boardValues];
        newBoard[anim.row][anim.col].number = anim.number;
        newBoard[anim.row][anim.col].status = anim.status;
        setBoardValues(newBoard);
        resolve();
      }, animSpeed ** 2);
    });
  };

  return (
    <div>
      <button disabled={buttonsDisabled} onClick={() => animateSolution(boardValues)}>solve</button>
      <button disabled={buttonsDisabled}>reset</button>
      <Slider />
      <Board board={boardValues} />
    </div>
  );
};

export default SudokuSolver;
