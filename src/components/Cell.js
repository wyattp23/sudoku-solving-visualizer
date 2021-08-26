export const Cell = (props) => {
  return (
    <div className={`cell ${props.status} ${getCellClass(props.id)}`} id={props.id}>
      {props.number ? props.number : ""}
    </div>
  );
};

const getCellClass = (id) => {
  var [row, col] = id.match(/\d/g);
  var classes = [];

  if (row == "0" || row == "3" || row == "6") classes.push("cell-top-border");
  if (col == "0" || col == "3" || col == "6") classes.push("cell-left-border");
  if (row == "8") classes.push("cell-bottom-border");
  if (col == "8") classes.push("cell-right-border");

  return classes.join(" ");
};