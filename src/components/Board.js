import { Cell } from "./Cell.js";

export const Board = (props) => {
  return (
    <table id="board">
      <tbody>
        {props.board.map((row, i) => (
          <tr className="row" key={i}>
            {row.map((cell, j) => (
              <Cell
                key={j}
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
