import { Cell } from "./Cell.js";

export const Board = (props) => {
  return (
    <table id="board">
      <tbody>
        {props.board.map((row, i) => (
          <tr className="row">
            {row.map((cell, j) => (
              <Cell 
                key={cell.id} 
                number={cell.number}
                status={cell.status}
                id={`cell[${i}][${j}]`}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
