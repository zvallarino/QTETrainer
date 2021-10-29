import LosingScreen from "./LosingScreen"
import FinalScreen from "./FinalScreen"

function LosingScreenInter({losingScreenDecider, setKillGame, categoryForLeaderBoard, finalScore, victoryOrClose}){

    return(
        <>
        {losingScreenDecider? <FinalScreen categoryForLeaderBoard = {categoryForLeaderBoard} setKillGame={setKillGame} finalScore = {finalScore} victoryOrClose ={victoryOrClose} /> : <LosingScreen setKillGame = {setKillGame}  />}
        </>
    )

}

export default LosingScreenInter