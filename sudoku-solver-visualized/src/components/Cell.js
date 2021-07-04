const Cell = (props) => {
    return (
        <div className="cell" id={props.id}>
            {props.value ? props.value : ""}
        </div>           
    );
}

export default Cell