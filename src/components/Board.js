import { Cell } from "./Cell.js";

// export const Board = (props) => {
//   return (
//     <div id="board">
//       {props.board.map((row, i) => (
//         <div className="row">
//           {row.map((cell, j) => (
//             <Cell 
//               key={cell.id} 
//               number={cell.number}
//               status={cell.status}
//               id={`cell[${i}][${j}]`}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

export const Board = (props) => {
  return (
    <table id="board">
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
    </table>
  );
};
