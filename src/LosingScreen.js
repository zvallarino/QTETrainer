import React, { useState, useEffect } from "react"
import ArcadeMode from "./ArcadeMode"

function LosingScreen() {

  const [timeDecreasing, setTimeDecreasing] = useState(10)
  const [tryAgain, setTryAgain] = useState(false)
  const [disappearing5, setDisappear5] = useState(false)

  function onSetTimeRemainingLosing(){
    setTimeDecreasing((timeRemaining)=>timeRemaining -1)
  }


  function setteroftryAgain(e){
    setTryAgain(cats=>!cats)
    setDisappear5((dogs)=>!dogs)
  }

  useEffect(() => {
    const timerID = setInterval(()=>{onSetTimeRemainingLosing()},1000);
    return function cleanup(){
      clearInterval(timerID)
    }
  }, []);


  if (timeDecreasing === 0){
    window.location.reload();
    return false;
  }

  return (
    <div>
    <p>
      <h1 className = {disappearing5? "candy":""}>YOU SUCK!</h1>
      <button onClick = {setteroftryAgain} className = {disappearing5? "candy":""}>TRY AGAIN</button>
    </p>
    {tryAgain? <ArcadeMode />: null}
    <p>
    {disappearing5? null : timeDecreasing}
    </p>
    </div>
  );
}

export default LosingScreen;
