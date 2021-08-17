export const solve = (board, animations=[]) => {
  var [row, col] = findEmptyCell(board);
  var maxCellValue = 9;

  if (row == -1 && col == -1) {
    return animations; //Board is complete.
  }

  for (let num = 1; num <= maxCellValue; num++) {
    if (numPlacementIsLegal(board, row, col, num)) {
      board[row][col] = num;
      animations.push({
        cell: `cell[${row}][${col}]`,
        row: row,
        col: col,
        number: num,
        status: "active",
      });
      if (solve(board, animations)) return animations;

      // Remove the value if it does not lead to a solved board
      board[row][col] = 0;
      animations.push({
        cell: `cell[${row}][${col}]`,
        row: row,
        col: col,
        number: 0,
        status: "visited",
      });
    }
  }

  return false;
};

const findEmptyCell = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == 0) {
        return [i, j];
      }
    }
  }

  return [-1, -1]; //No empty cells found, board is complete.
};

const numPlacementIsLegal = (board, row, col, num) => {
  var blockSize = 3;
  var blockRowIndex = row - (row % blockSize);
  var blockColIndex = col - (col % blockSize);

  //Check if number is already in the block
  for (let i = blockRowIndex; i < blockRowIndex + blockSize; i++) {
    for (let j = blockColIndex; j < blockColIndex + blockSize; j++) {
      if (board[i][j] === num) return false;
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === num || board[row][i] === num) return false;
  }

  return true;
};
