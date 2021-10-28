import LosingScreen from "./LosingScreen"
import FinalScreen from "./FinalScreen"

function LosingScreenInter({losingScreenDecider, setKillGame}){

    return(
        <>
        {losingScreenDecider? <FinalScreen /> : <LosingScreen setKillGame = {setKillGame} />}
        </>
    )

}

export default LosingScreenInter