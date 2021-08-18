import { Board } from "./Board.js";
import { Slider } from "./Slider.js";
import { solve } from "../algorithms/solve.js";
import { useState } from "react";
import {unsolvedBoards} from "../unsolvedBoards";
import { deepCopyBoard, convertBoardArrayToObjects } from "../helpers.js";

const SudokuSolver = () => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [currentBoardIdx, setCurrentBoardIdx] = useState(0);
  const [boardValues, setBoardValues] = useState(convertBoardArrayToObjects(unsolvedBoards[currentBoardIdx]));

  async function animateSolution(board) {
    var animations = solve(deepCopyBoard(board));
    console.log(`const arr ${unsolvedBoards[currentBoardIdx]}`);

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
    return new Promise((resolve) => {
      setTimeout(() => {
        let newBoard = deepCopyBoard(boardValues);
        newBoard[anim.row][anim.col].number = anim.number;
        newBoard[anim.row][anim.col].status = anim.status;
        setBoardValues(newBoard);
        resolve();
      }, animSpeed ** 2);
    });
  };

  return (
    <div>
      <button 
        disabled={buttonsDisabled} 
        onClick={() => animateSolution(unsolvedBoards[currentBoardIdx])}
      >SOLVE</button>

      <button 
        disabled={buttonsDisabled} 
        onClick={() => setBoardValues(convertBoardArrayToObjects(unsolvedBoards[currentBoardIdx]))}
      >RESET</button>

      <Slider />
      <Board board={boardValues} />
    </div>
  );
};



export default SudokuSolver;
