import React, { useState,useEffect } from "react"
import ArcadeMode from "./ArcadeMode"

function LosingScreen() {

  const [timeDecreasing, setTimeDecreasing] = useState(10)
  const [tryAgain, setTryAgain] = useState(false)

  function onSetTimeRemainingLosing(){
    setTimeDecreasing((timeRemaining)=>timeRemaining -1)
  }

  function OnsetIntervalLosing(){
    setInterval(()=>onSetTimeRemainingLosing(),1000)
  }

  function setteroftryAgain(e){
    setTryAgain(cats=>!cats)
  }

  if (timeDecreasing === 0){
    window.location.reload();
    return false;
  }


  return (
    <>
    <p>
      <button onClick = {setteroftryAgain}>TRY AGAIN</button>
    </p>
    {tryAgain? <ArcadeMode />: null}
    <p>
    {timeDecreasing}
    </p>
    </>
  );
}

export default LosingScreen;
