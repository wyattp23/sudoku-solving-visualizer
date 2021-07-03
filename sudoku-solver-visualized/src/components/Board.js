import Row from './Row.js'

const Board = (props) => {
    return (
        <div id="board">
            <Row values={props.values[0]} />
            <Row values={props.values[1]} />
            <Row values={props.values[2]} />
            <Row values={props.values[3]} />
            <Row values={props.values[4]} />
            <Row values={props.values[5]} />
            <Row values={props.values[6]} />
            <Row values={props.values[7]} />
            <Row values={props.values[8]} />
        </div>
    );
}

export default Board