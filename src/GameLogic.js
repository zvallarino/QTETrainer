import Generator from "./Generator.js"
import React, { useState, useEffect } from "react"
import DropDown from "./DropDown.js"

function GameLogic({selectedRoute}) {

  const [userInput,setUserInput] = useState('')
  const [gamesInput, setGamesInput] = useState ('')
  const [gamesInput2, setGamesInput2] = useState ('')
  const [gamesInput3, setGamesInput3] = useState ('')
  const [gamesInput4, setGamesInput4] = useState ('')
  const [mainNumber, setMainNumber] = useState('z')
  const [timeRemaining, setTimeRemaining] = useState(20)
  const [score,setScore] = useState(0)
  const [streakcounter, setStreakCounter] = useState(0)
  const [finalScore,setFinalScore] = useState(0)
  const [mistakes,setMistakes] = useState(0)

  let alphabetz = "abcdefghijklmnopqrstuvwxyz"

function gameFunction(cats) {
  if (mainNumber.toUpperCase() === cats.toUpperCase())
  {let alphabetY = "abcdefghijklmnopqrstuvwxyz"
  let randomLetter = alphabetY[Math.floor(Math.random() * alphabetY.length)]
    console.log('correct')
    console.log(randomLetter)
    setMainNumber(randomLetter)
    setScore(score=>score +1)
    setStreakCounter(streakcounter=>streakcounter+1)
  } else {
    console.log('incorrect')
    setMistakes(mistakes=>mistakes +1)
    setStreakCounter(0)
  } }

function StreakCounterSayings(){
  if (streakcounter === 5){
    console.log('Doing Great')
  } else if ( streakcounter === 10){
    console.log('On Fire')
  }
}

  function handleChange(e){
    setUserInput(e.target.value.slice(-1))
    gameFunction(e.target.value.slice(-1))
  }
  
  function onSetTimeRemaining(){
    setTimeRemaining((timeRemaining)=>timeRemaining -1)
  }

  function OnsetInterval(){
    setInterval(()=>onSetTimeRemaining(),1000)
  }

  useEffect(()=>{OnsetInterval()},[]);

  if(timeRemaining === 0){
    setTimeRemaining(20);
    } 

  function RandomLetterGenerator1() {
    let randomLetterz = alphabetz[Math.floor(Math.random() * alphabetz.length)]
    setGamesInput(randomLetterz)
    setMainNumber(randomLetterz)
    ;
  }

  function RandomLetterGenerator2() {

    let randomLetterB = alphabetz[Math.floor(Math.random() * alphabetz.length)]
    setGamesInput2(randomLetterB);
  }

  function RandomLetterGenerator3() {
    let randomLetterB = alphabetz[Math.floor(Math.random() * alphabetz.length)]
    setGamesInput3(randomLetterB);
  }  

  function RandomLetterGenerator4() {
    let randomLetterB = alphabetz[Math.floor(Math.random() * alphabetz.length)]
    setGamesInput4(randomLetterB);
  } 

function timingFunction(){
setInterval(()=>RandomLetterGenerator1(), 8000)
}

useEffect(()=>timingFunction(),[])

function secondTimingFunction(){
  setInterval(()=>RandomLetterGenerator2(), 2000)
}

useEffect(()=>secondTimingFunction(),[])

function thirdTimingFunction(){
  setInterval(()=>RandomLetterGenerator3(), 1000)
}

useEffect(()=>thirdTimingFunction(),[])

function fourthTimingFunction(){
  setInterval(()=>RandomLetterGenerator4(), 500)
}

useEffect(()=>fourthTimingFunction(),[])

  
  
  return (
    <div onKeyDown = {(e)=>console.log(e.target.value)} tabIndex = '0'>
      {`This is ${gamesInput}`}
      <p></p>
      {`This is ${gamesInput2}`}
      <p></p>
      {`This is ${gamesInput3}`}
      <p></p>
      {`This is ${gamesInput4}`}
      <p></p>
      {`This is the Main Input: ${mainNumber.toUpperCase()}`}
      <p></p>
      {`This is the Score: ${score}`}
      <p></p>
      {`This is the Mistakes: ${mistakes}`}
      <p></p>
      {`This is the Streak Counter: ${streakcounter}`}

      <h4>{timeRemaining} Seconds Remaining</h4>
      <Generator gamesInput = {gamesInput} setGamesInput = {setGamesInput} />
      <label> Input
      <input type="text" name="name" onChange = {handleChange} value ={userInput} />
      </label>
      </div>
  );
}

export default GameLogic;