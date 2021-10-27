import React, { useState, useEffect } from "react"
import ArcadeMode from "./ArcadeMode"

function LosingScreen() {

  const [timeDecreasing, setTimeDecreasing] = useState(10)
  const [tryAgain, setTryAgain] = useState(false)

  function onSetTimeRemainingLosing(){
    setTimeDecreasing((timeRemaining)=>timeRemaining -1)
  }


  function setteroftryAgain(e){
    setTryAgain(cats=>!cats)
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
