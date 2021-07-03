import Cell from './Cell'

const Row = (props) => {
    return (
        <div className="row">
            <Cell value={props.values[0]} />
            <Cell value={props.values[1]} />
            <Cell value={props.values[2]} />
            <Cell value={props.values[3]} />
            <Cell value={props.values[4]} />
            <Cell value={props.values[5]} />
            <Cell value={props.values[6]} />
            <Cell value={props.values[7]} />
            <Cell value={props.values[8]} />
        </div>
    );
}

export default Row