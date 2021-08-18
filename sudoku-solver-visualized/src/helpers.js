export const deepCopyBoard = (board) => {
    let boardCopy = [];

    board.forEach((row) => {
        let rowCopy = [];

        row.forEach((cell) => {
            rowCopy.push(cell)
        });

        boardCopy.push(rowCopy);
    });

    return boardCopy;
}

export const convertBoardArrayToObjects = (arr) => {
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