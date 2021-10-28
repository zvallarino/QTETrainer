import LosingScreen from "./LosingScreen"
import FinalScreen from "./FinalScreen"

function LosingScreenInter({losingScreenDecider, setKillGame, categoryForLeaderBoard, finalScore}){

    return(
        <>
        {losingScreenDecider? <FinalScreen categoryForLeaderBoard = {categoryForLeaderBoard} finalScore = {finalScore} /> : <LosingScreen setKillGame = {setKillGame}  />}
        </>
    )

}

export default LosingScreenInter