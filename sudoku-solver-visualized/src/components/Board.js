import { useDebugValue } from "react";
import Cell from "./Cell.js";

export const Board = (props) => {
  return (
    <div id="board">
      {props.values.map((values, i) => (
        <div className="row">
          {values.map((value, j) => (
            <Cell key={value.id} value={value} id={`cell[${i}][${j}]`} />
          ))}
        </div>
      ))}
    </div>
  );
};
