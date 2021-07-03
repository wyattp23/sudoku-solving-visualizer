import Cell from './Cell.js'

const Board = (props) => {
    return (
        <div id="board">
            {props.values.map((values) => (
                <div className="row">
                    {values.map((value) => (
                        <Cell value={value} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board