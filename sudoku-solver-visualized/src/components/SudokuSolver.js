import Board from './Board.js'
import { useState } from 'react'

const SudokuSolver = () => {
    const [boardValues, setBoardValues] = useState(defaultBoardValues);

    return (
        <div>
            <button onClick={() => setBoardValues(incrementBoard(boardValues))}>add</button>
            <Board values={boardValues}/>
        </div>

    );
}

const incrementBoard = (boardValues) => {
    return (
        boardValues.map((values) => (
            values.map((value => (
                value + 1
            )))
        ))
    )
}

const defaultBoardValues = [
    [1, 0, 3, 0, 5, 0, 7, 0, 9],
    [11, 22, 33, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
]

export default SudokuSolver