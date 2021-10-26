import Generator from "./Generator.js"
import React, { useState, useEffect } from "react"

function GameLogic() {

  const [userInput,setUserInput] = useState('')
  const [lastInput,setLastInput] = useState('')
  const [gamesInput, setGamesInput] = useState ('')
  const [gamesInput2, setGamesInput2] = useState ('')
  const [gamesInput3, setGamesInput3] = useState ('')
  const [gamesInput4, setGamesInput4] = useState ('')
  const [timeRemaining, setTimeRemaining] = useState(10)

function gameFunction() {
  if (userInput === gamesInput)
  {console.log("correct")}
  else {console.log("incorrect")}}

  


gameFunction()


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
    setTimeRemaining(10);
    } 




  function RandomLetterGenerator1() {
    let alphabetz = "abcdefghijklmnopqrstuvwxyz"
    let randomLetterz = alphabetz[Math.floor(Math.random() * alphabetz.length)]
    setGamesInput(randomLetterz);
  }

  function RandomLetterGenerator2() {
    let alphabetB = "abcdefghijklmnopqrstuvwxyz"
    let randomLetterB = alphabetB[Math.floor(Math.random() * alphabetB.length)]
    setGamesInput2(randomLetterB);
  }

  function RandomLetterGenerator3() {
    let alphabetB = "abcdefghijklmnopqrstuvwxyz"
    let randomLetterB = alphabetB[Math.floor(Math.random() * alphabetB.length)]
    setGamesInput3(randomLetterB);
  }  

  function RandomLetterGenerator4() {
    let alphabetB = "abcdefghijklmnopqrstuvwxyz"
    let randomLetterB = alphabetB[Math.floor(Math.random() * alphabetB.length)]
    setGamesInput4(randomLetterB);
  }
  

  

function timingFunction(){
setInterval(()=>RandomLetterGenerator1(), 2000)
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






console.log(`This is the User Input: ${userInput}`)
console.log(`This is the Game Input: ${gamesInput}`)
console.log(`This is the Game Input 2: ${gamesInput2}`)

  
  
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
      <h4>{timeRemaining} Seconds Remaining</h4>
      <Generator gamesInput = {gamesInput} setGamesInput = {setGamesInput} />
      <label> Input
      <input type="text" name="name" onChange = {handleChange} value ={userInput} />
      </label>
      </div>
  );
}

export default GameLogic;