const Cell = (props) => {
    return (
        <div className="cell">
            <p className="cell-value">
                {props.value ? props.value : ""}
            </p>
        </div>           
    );
}

export default Cell