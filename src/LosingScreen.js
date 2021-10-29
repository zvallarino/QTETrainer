import React, { useState, useEffect } from "react"
import ArcadeMode from "./ArcadeMode";
import styled from 'styled-components';



function LosingScreen({setKillGame}) {

  const [timeDecreasing, setTimeDecreasing] = useState(10)
  const [tryAgain, setTryAgain] = useState(false)
  const [disappearing5, setDisappear5] = useState(false)


  function onSetTimeRemainingLosing(){
    setTimeDecreasing((timeRemaining)=>timeRemaining -1)
  }


  function setteroftryAgain(e){
    setTryAgain(cats=>!cats)
    setDisappear5((dogs)=>!dogs)
    setKillGame(true)
  }

  useEffect(() => {
    let timerID = setInterval(()=>{onSetTimeRemainingLosing()},1000);
    return  ()=>{
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
      <YouSuck className = {disappearing5? "candy":""}>YOU SUCK</YouSuck>
      <SpaceBetweenFinalScreen></SpaceBetweenFinalScreen>
      <button onClick = {setteroftryAgain} className = {disappearing5? "candy":""}>TRY AGAIN</button>
    </p>
    <SpaceBetweenFinalScreen></SpaceBetweenFinalScreen>
    <TimingFont>
    {disappearing5? null : timeDecreasing}
    </TimingFont>
    </div>
  );
}

export default LosingScreen;

const YouSuck = styled.div`
font-family: 'Games', sans-serif;
font-size:50px;
font-weight:bold;
color: #FF6766;
text-shadow: 8px 8px black;
`

const SpaceBetweenFinalScreen = styled.div`
height:80px;
`

const TimingFont =  styled.div`
font-family: 'Games', sans-serif;
font-size:50px;
font-weight:bold;
color: black;
`
