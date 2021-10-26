import Generator from "./Generator.js"
import React, { useState, useEffect } from "react"
import DropDown from "./DropDown.js"

function GameLogic() {

  const [userInput,setUserInput] = useState('')
  const [gamesInput, setGamesInput] = useState ('')
  const [gamesInput2, setGamesInput2] = useState ('')
  const [gamesInput3, setGamesInput3] = useState ('')
  const [gamesInput4, setGamesInput4] = useState ('')
  const [mainNumber, setMainNumber] = useState('z')
  const [selectedRoute, setSelectedRoute] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(20)
  const [score,setScore] = useState(0)
  const [mistakes,setMistakes] = useState(0)

function gameFunction() {
  if (mainNumber === userInput)
  {
    let alphabetY = "abcdefghijklmnopqrstuvwxyz"
    let randomLetter = alphabetY[Math.floor(Math.random() * alphabetY.length)]
    console.log('correct')
    console.log(randomLetter)
    setMainNumber(randomLetter)
    setScore(score=>score +1)
  }}

gameFunction() 

let alphabetz = "abcdefghijklmnopqrstuvwxyz"

// function RouteSelectorHelper(){
// if(selectedRoute === "Alphabetic"){
//   console.log(selectedRoute)
//   return "abcdefghijklmnopqrstuvwxyz"
// } else if (selectedRoute === 'Numeric'){
//   console.log(selectedRoute)
//   return "0123456789"
// } else {
//   console.log(selectedRoute)
//   return "`-=[];',./123456789abcdefghijklmnopqrstuvwxyz"}}


  function handleChange(e){
    setUserInput(e.target.value.slice(-1))
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
setInterval(()=>RandomLetterGenerator1(), 5000)
}

useEffect(()=>timingFunction(),[])

function secondTimingFunction(){
  setInterval(()=>RandomLetterGenerator2(), 2000)
}

useEffect(()=>secondTimingFunction(),[])

function thirdTimingFunction(){
  setInterval(()=>RandomLetterGenerator3(), 2000)
}

useEffect(()=>thirdTimingFunction(),[])

function fourthTimingFunction(){
  setInterval(()=>RandomLetterGenerator4(), 2000)
}

useEffect(()=>fourthTimingFunction(),[])

  
  
  return (
    <div>
      {`This is ${gamesInput}`}
      <p></p>
      {`This is ${gamesInput2}`}
      <p></p>
      {`This is ${gamesInput3}`}
      <p></p>
      {`This is ${gamesInput4}`}
      <p></p>
      {`This is the Main Number: ${mainNumber}`}
      <p></p>
      {`This is the Score: ${score}`}
      <p></p>
      {`This is the Mistakes: ${mistakes}`}

      <h4>{timeRemaining} Seconds Remaining</h4>
      <Generator gamesInput = {gamesInput} setGamesInput = {setGamesInput} />
      <DropDown selectedRoute = {selectedRoute} setSelectedRoute = {setSelectedRoute} />
      <label> Input
      <input type="text" name="name" onChange = {handleChange} onKeyDown = {(e)=>console.log("hello")} value ={userInput} />
      </label>
      </div>
  );
}

export default GameLogic;