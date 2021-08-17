import { Board } from "./Board.js";
import { Slider } from "./Slider.js";
import { solve } from "../algorithms/solve.js";
import { useState } from "react";
import {unsolvedBoards} from "../unsolvedBoards";

const defaultBoardValues = unsolvedBoards[1];

const SudokuSolver = () => {
  const [boardValues, setBoardValues] = useState(convertBoardArrayToObjects(defaultBoardValues));
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [currentBoardIdx, setCurrentBoardIdx] = useState(1);

  async function animateSolution(board) {
    var animations = solve(board);
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
      <button disabled={buttonsDisabled} onClick={() => animateSolution(unsolvedBoards[currentBoardIdx])}>solve</button>
      <button disabled={buttonsDisabled}>reset</button>
      <Slider />
      <Board board={boardValues} />
    </div>
  );
};

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

export default SudokuSolver;
