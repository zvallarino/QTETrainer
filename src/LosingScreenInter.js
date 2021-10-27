import LosingScreen from "./LosingScreen"
import FinalScreen from "./FinalScreen"

function LosingScreenInter({losingScreenDecider}){

    return(
        <>
        {losingScreenDecider? <FinalScreen /> : <LosingScreen />}
        </>
    )

}

export default LosingScreenInter