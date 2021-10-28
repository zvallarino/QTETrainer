import Generator from "./Generator.js"
import React, { useState, useEffect } from "react"
import FinalScreen from "./FinalScreen.js"
import { ProgressBar } from 'react-bootstrap'
import styled from 'styled-components';  
// import LosingScreen from "./LosingScreen.js"

function GameLogic( {RouteSelector, setKillGame, setLosingScreenDecider, loopCounter, setLoopCounter, finalScore, setFinalScore } ) {
  function randomFirstInput(){
    let randomInput = RouteSelector
      let firstInput = randomInput[Math.floor(Math.random() * randomInput.length)]
      return firstInput
  }

  const [userInput,setUserInput] = useState('')
  const [gamesInput, setGamesInput] = useState ('')
  const [mainNumber, setMainNumber] = useState(randomFirstInput())
  const [timeRemaining, setTimeRemaining] = useState(20)
  const [score,setScore] = useState(0)
  const [streakcounter, setStreakCounter] = useState(0)
  // const [finalScore,setFinalScore] = useState(0)
  const [mistakes,setMistakes] = useState(0)
  const [progressbar,setProgressBar] = useState(0)

  let alphabetz = "abcdefghijklmnopqrstuvwxyz"

 

function gameFunction(cats) {
  if (mainNumber.toUpperCase() === cats.toUpperCase())
  {let alphabetY = RouteSelector
  let randomLetter = alphabetY[Math.floor(Math.random() * alphabetY.length)]
    console.log('correct')
    console.log(randomLetter)
    setMainNumber(randomLetter)
    setScore(score=>score +100)
    setStreakCounter(streakcounter=>streakcounter+1)
  } else {
    console.log('incorrect')
    setMistakes(mistakes=>mistakes +1)
    setStreakCounter(0)
  } }

function StreakCounterSayings(e){
  if (streakcounter >= 5){
    setScore(score => score + 10)
    console.log('Heating Up')
  } else if ( streakcounter >= 10){
    setScore(score => score + 25)
  }
}

function SetterOfProgressBar(e){
  if (streakcounter === 0){
    setProgressBar(0)
  } else if (streakcounter > 0 && streakcounter <10){
    setProgressBar((cats)=>cats + 10)
  } else {
    setProgressBar(100)
  }
}
// StreakCounterSayings()

  function handleChange(e){
    setUserInput(e.target.value.slice(-1))
    gameFunction(e.target.value.slice(-1))
    StreakCounterSayings(e)
    SetterOfProgressBar(e)
  }
  
  function onSetTimeRemaining(){
    setTimeRemaining((timeRemaining)=>timeRemaining -1)
  }

  function OnsetInterval(){
    setInterval(()=>onSetTimeRemaining(),1000)
  }

  useEffect(()=>{OnsetInterval()},[]);

  if(timeRemaining === 0){
    if (loopCounter === 0){
      if (score >= 1) {
        alert ("Level 2") 
        console.log("hello")
        setLoopCounter(loopCounter => loopCounter + 1)
        setFinalScore(finalScore + score)
        setScore(0)
        setStreakCounter(0)
        setProgressBar(0)
        setTimeRemaining(10)
      } else {
        setKillGame(false)
        setLosingScreenDecider(false)
        setTimeRemaining(20)
      }
      } else if (loopCounter === 1) {
      if (score >= 2) {
          alert ("Level 3")
          setLoopCounter(loopCounter => loopCounter + 1)
          setFinalScore(finalScore + score)
          setScore(0)
          setStreakCounter(0)
          setProgressBar(0)
          setTimeRemaining(10)
        } else {
          setKillGame(false)
          setLosingScreenDecider(false)
          setTimeRemaining(20)
        }
      } else if (loopCounter === 2) {
        if (score >= 3) {
        alert ("Level 4")
        setLoopCounter(loopCounter => loopCounter + 1)
        setFinalScore(finalScore + score)
        setScore(0)
        setStreakCounter(0)
        setProgressBar(0)
        setTimeRemaining(5)
        } else {
          setKillGame(false)
          setLosingScreenDecider(true)
          setTimeRemaining(20)}
        } else if (loopCounter === 3) {
        if (score >= 4) {
          alert ("Level 5")
        setLoopCounter(loopCounter => loopCounter + 1)
        setFinalScore(finalScore + score)
        setScore(0)
        setStreakCounter(0)
        setProgressBar(0)
        setTimeRemaining(10)
      } else {
        setKillGame(false)
        setLosingScreenDecider(true)
        setTimeRemaining(20)} 
      }
      else if (loopCounter === 4) {
        if (score >= 4) {
          setKillGame(false)
          setLosingScreenDecider(true)
      } else {
        setKillGame(false)
        setLosingScreenDecider(true)
        setTimeRemaining(20)} 
      }
      else {
        setKillGame(false)
        setLosingScreenDecider(true)
      }
  }
    
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
      <MainButton>
      {mainNumber.toUpperCase()}
      </MainButton>
      <p></p>
      {`This is the Score: ${score}`}
      <p></p>
      {`This is the Mistakes: ${mistakes}`}
      <p></p>
      {`This is the Streak Counter: ${streakcounter}`}
      <p></p>
      {`This is the progress Counter: ${progressbar}`}
      <p></p>
      {`This is the Final Score: ${finalScore}`}
      <p></p>
      {`This is the Loop Counter: ${loopCounter}`}
      <p></p>
      <h4>{timeRemaining} Seconds Remaining</h4>
      <label> Input
      <input type="text" name="name" onChange = {handleChange} value ={userInput} />
      </label>
      </div>
  );
}

export default GameLogic;


const MainButton = styled.div`
font-size:200px;
background-color:white;
border: 20px solid black;
border-radius:50%;
text-align:center;
`
  // const [gamesInput2, setGamesInput2] = useState ('')
  // const [gamesInput3, setGamesInput3] = useState ('')
  // const [gamesInput4, setGamesInput4] = useState ('')

 // function RandomLetterGenerator2() {

  //   let randomLetterB = alphabetz[Math.floor(Math.random() * alphabetz.length)]
  //   setGamesInput2(randomLetterB);
  // }

  // function RandomLetterGenerator3() {
  //   let randomLetterB = alphabetz[Math.floor(Math.random() * alphabetz.length)]
  //   setGamesInput3(randomLetterB);
  // }  

  // function RandomLetterGenerator4() {
  //   let randomLetterB = alphabetz[Math.floor(Math.random() * alphabetz.length)]
  //   setGamesInput4(randomLetterB);
  // } 


// function secondTimingFunction(){
//   setInterval(()=>RandomLetterGenerator2(), 2000)
// }

// useEffect(()=>secondTimingFunction(),[])

// function thirdTimingFunction(){
//   setInterval(()=>RandomLetterGenerator3(), 1000)
// }

// useEffect(()=>thirdTimingFunction(),[])

// function fourthTimingFunction(){
//   setInterval(()=>RandomLetterGenerator4(), 500)
// }

// useEffect(()=>fourthTimingFunction(),[])

  
