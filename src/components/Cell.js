export const Cell = (props) => {
  return (
    <td className={`cell ${props.status}`} id={props.id}>
      {props.number ? props.number : ""}
    </td>
  );
};