import { boardDifficulties } from "../unsolvedBoards";
import star from "../star.svg"

export const DifficultyMeter = (props) => {
    return (
        <div id="difficultyMeter">
            {/* <p id="difficulty">{boardDifficulties[props.currentBoardIdx]}</p> */}
            {[...Array(props.currentBoardIdx + 1)].map((e, i) => <img key={i} src={star} alt="star" className="star"/>)}
        </div>
    )
}