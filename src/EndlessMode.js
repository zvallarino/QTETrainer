import Generator from "./Generator.js"
import React, { useState, useEffect } from "react"
import FinalScreen from "./FinalScreen.js"
// import LosingScreen from "./LosingScreen.js"

function EndlessMode( {RouteSelector, setKillGame} ) {

  function randomFirstInputE(){
    let randomInput = RouteSelector
      let firstInput = randomInput[Math.floor(Math.random() * randomInput.length)]
      return firstInput
  }

  const [userInput,setUserInput] = useState('')
  const [gamesInput, setGamesInput] = useState ('')
  const [mainNumber, setMainNumber] = useState(randomFirstInputE())
  const [timeRemaining, setTimeRemaining] = useState(20)
  const [score,setScore] = useState(0)
  const [streakcounter, setStreakCounter] = useState(0)
  const [finalScore,setFinalScore] = useState(0)
  const [mistakes,setMistakes] = useState(0)
  const [loopCounter, setLoopCounter] = useState(0)
  const [progressbarE,setProgressBarE] = useState(0)

  let alphabetz = "abcdefghijklmnopqrstuvwxyz"

function gameFunction(cats) {
  if (mainNumber.toUpperCase() === cats.toUpperCase())
  {let alphabetY = RouteSelector
  let randomLetter = alphabetY[Math.floor(Math.random() * alphabetY.length)]
    console.log('correct')
    console.log(randomLetter)
    setMainNumber(randomLetter)
    setScore(score=>score + 100)
    setStreakCounter(streakcounter=>streakcounter+1)
  } else {
    console.log('incorrect')
    setMistakes(mistakes=>mistakes +1)
    setStreakCounter(0)
  } }

  function StreakCounterSayingsE(e){
    if (streakcounter >= 5){
      setScore(score => score + 10)
      console.log('Heating Up')
    } else if ( streakcounter >= 10){
      setScore(score => score + 25)
    }
  }
  
  function SetterOfProgressBarE(e){
    if (streakcounter === 0){
      setProgressBarE(0)
    } else if (streakcounter > 0 && streakcounter <10){
      setProgressBarE((cats)=>cats + 10)
    } else {
      setProgressBarE(100)
    }
  }

  function handleChange(e){
    setUserInput(e.target.value.slice(-1))
    gameFunction(e.target.value.slice(-1))
    StreakCounterSayingsE(e)
    SetterOfProgressBarE()
  }
  
  // function onSetTimeRemaining(){
  //   setTimeRemaining((timeRemaining)=>timeRemaining -1)
  // }

  // function OnsetInterval(){
  //   setInterval(()=>onSetTimeRemaining(),1000)
  // }

  // useEffect(()=>{OnsetInterval()},[]);

  // if(timeRemaining === 0){
  //   if (loopCounter === 0){
  //     if (score >= 8) {
  //       alert ("Level 2") 
  //       console.log("hello")
  //       setLoopCounter(loopCounter => loopCounter + 1)
  //       setFinalScore(finalScore + score)
  //       setScore(0)
  //       setTimeRemaining(30)
  //     } else {
  //       setKillGame(false)
  //       setTimeRemaining(20)
  //     }
  //     } else if (loopCounter === 1) {
  //     if (score >= 20) {
  //         alert ("Level 3")
  //         setLoopCounter(loopCounter => loopCounter + 1)
  //         setFinalScore(finalScore + score)
  //         setScore(0)
  //         setTimeRemaining(30)
  //       } else {
  //         setKillGame(false)
  //         setTimeRemaining(20)
  //       }
  //     } else if (loopCounter === 2) {
  //       if (score >= 40) {
  //       alert ("Level 4")
  //       setLoopCounter(loopCounter => loopCounter + 1)
  //       setFinalScore(finalScore + score)
  //       setScore(0)
  //       setTimeRemaining(5)
  //       } else {
  //         setKillGame(false)
  //         setTimeRemaining(20)}

  //       } else if (loopCounter === 3) {
  //       if (score >= 60) {
  //         alert ("Level 5")
  //       setLoopCounter(loopCounter => loopCounter + 1)
  //       setFinalScore(finalScore + score)
  //       setScore(0)
  //       setTimeRemaining(40)
  //     } else {
  //       setKillGame(false)
  //       setTimeRemaining(20)} 
  //     }
  //     else {
  //     alert (`You won! Your score is ${finalScore}`)
  //     }
  // }
    
  function RandomLetterGenerator1() {
    let randomLetterzero = RouteSelector[Math.floor(Math.random() * RouteSelector.length)]
    setGamesInput(randomLetterzero)
    setMainNumber(randomLetterzero)
    ;
  }

function timingFunction(){
setInterval(()=>RandomLetterGenerator1(), 5000)
}

useEffect(()=>timingFunction(),[])


  
  return (
    <div onKeyDown = {(e)=>console.log(e.target.value)} tabIndex = '0'>
      {`This is the first Input: ${gamesInput}`}
      <p></p>
      {`This is the Main Input: ${mainNumber.toUpperCase()}`}
      <p></p>
      {`This is the Score: ${score}`}
      <p></p>
      {`This is the Mistakes: ${mistakes}`}
      <p></p>
      {`This is the Streak Counter: ${streakcounter}`}
      <p></p>
      {`This is the Final Score: ${finalScore}`}
      <p></p>
      {`This is the Progress Counter: ${progressbarE}`}
      <p></p>
      {`This is the Loop Counter: ${loopCounter}`}
      {/* <h4><img src ="https://www.freepnglogos.com/uploads/infinity-symbol-png/infinity-symbol-clipart-download-best-infinity-14.png" alt ="transpar"></img></h4> */}
      <label> Input
      <input type="text" name="name" onChange = {handleChange} value ={userInput} />
      </label>
      </div>
  );
}

export default EndlessMode;
