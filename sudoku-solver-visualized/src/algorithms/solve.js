const solve = (board) => {
    var [row, col] = findEmptyCell(board);
    var maxCellValue = 9;

    if (row  == -1 && col == -1) {
        return board; //Board is complete.
    }

    for (let num = 1; num <= maxCellValue; num++) {
        if (numPlacementIsLegal(board, row, col, num)) {
            board[row][col] = num;
            if (solve(board)) return board;

            // Remove the value if it does not lead to a solved board
            board[row][col] = 0;
        }
    }

    return false;
}

const findEmptyCell = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == 0) {
                return [i, j];
            }
        }
    }

    return [-1, -1]; //No empty cells found, board is complete.
}

const numPlacementIsLegal = (board, row, col, num) => {
    var blockRowIndex = row - (row % blockSize);
    var blockColIndex = col - (col % blockSize);
    var blockSize = 3;

    //Check if number is already in the block
    for (let i = blockRowIndex; i < blockRowIndex + blockSize; i++) {
        for (let j = blockColIndex; j < blockColIndex + blockSize; j++) {
            if (board[i][j] == num) return false;
        }
    }

    for (let i = 0; i < board.length; i++) {
        if (board[i][col] == num || board[row][i] == num) return false;
    }

    return true;
}