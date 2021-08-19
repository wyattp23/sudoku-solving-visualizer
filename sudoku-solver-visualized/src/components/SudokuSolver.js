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
  const [solved, setSolved] = useState(false);

  async function animateSolution(board) {
    var animations = solve(deepCopyBoard(board));
    setButtonsDisabled(true);
  
    if (animations) {
      for (const anim of animations) {
        var animSpeed = document.getElementById("animSpeed").value;
        await animateCell(anim, animSpeed);
      }
    }

    setButtonsDisabled(false);
    setSolved(true);
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

  const setNewBoard = () => {
    let newBoardIdx = (currentBoardIdx + 1) % unsolvedBoards.length;
    setBoardValues(convertBoardArrayToObjects(unsolvedBoards[newBoardIdx]));
    setCurrentBoardIdx(newBoardIdx);
    setSolved(false);
  }

  const resetBoard = () => {
    setBoardValues(convertBoardArrayToObjects(unsolvedBoards[currentBoardIdx]));
    setSolved(false);
  }

  return (
    <div>
      <Board board={boardValues} />
      <div id="buttons">
        <button 
          disabled={buttonsDisabled || solved} 
          onClick={() => animateSolution(unsolvedBoards[currentBoardIdx])}
        >solve</button>

        <button 
          disabled={buttonsDisabled} 
          onClick={() => resetBoard()}
        >reset</button>

        <button
          disabled={buttonsDisabled}
          onClick={() => setNewBoard()}
      >new board</button>
      </div>
      <Slider />
    </div>
  );
};



export default SudokuSolver;
