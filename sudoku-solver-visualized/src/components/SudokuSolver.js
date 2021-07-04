import Board from './Board.js'
import { solve } from './../algorithms/solve.js'
import { useState } from 'react'

const SudokuSolver = () => {
    const [boardValues, setBoardValues] = useState(defaultBoardValues);

    return (
        <div>
            <button onClick={() => animateSolution(boardValues)}>solve</button>
            <Board values={boardValues}/>
        </div>

    );
}

const defaultBoardValues = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0], 
    [5, 2, 0, 0, 0, 0, 0, 0, 0], 
    [0, 8, 7, 0, 0, 0, 0, 3, 1], 
    [0, 0, 3, 0, 1, 0, 0, 8, 0], 
    [9, 0, 0, 8, 6, 3, 0, 0, 5], 
    [0, 5, 0, 0, 9, 0, 6, 0, 0], 
    [1, 3, 0, 0, 0, 0, 2, 5, 0], 
    [0, 0, 0, 0, 0, 0, 0, 7, 4], 
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
]

const animateSolution = (board) => {
    var animations = solve(board, []);
    console.log("ANIMATIONS: ", animations);

    if (animations) {
        animations.forEach((anim, i) => {
            setTimeout(() => {
                document.getElementById(anim.cell).className = `cell ${anim.class}`;
                document.getElementById(anim.cell).innerText = anim.number == 0 ? "" : anim.number;
            }, 50 * i)
    
            // cell.class = anim.class;
            // cell.num = anim.number;
            return;
        })
    }

    console.log("ANIMATIONS == FALSE");
}

export default SudokuSolver