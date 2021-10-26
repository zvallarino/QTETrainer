import Generator from "./Generator.js"
import React, { useState, useEffect } from "react"

function GameLogic() {

  const [userInput,setUserInput] = useState('')
  const [lastInput,setLastInput] = useState('')
  const [gamesInput, setGamesInput] = useState ('')
  const [gamesInput2, setGamesInput2] = useState ('')

function gameFunction() {
  if (userInput === gamesInput)
  {console.log("correct")}
  else {console.log("incorrect")}}


gameFunction()


  function handleChange(e){
    setUserInput(e.target.value.slice(-1))
  }


  function RandomLetterGenerator() {
    let alphabetz = "abcdefghijklmnopqrstuvwxyz"
    let randomLetterz = alphabetz[Math.floor(Math.random() * alphabetz.length)]
    setGamesInput(randomLetterz);
  }

  function RandomLetterGeneratorz() {
    let alphabetB = "abcdefghijklmnopqrstuvwxyz"
    let randomLetterB = alphabetB[Math.floor(Math.random() * alphabetB.length)]
    setGamesInput2(randomLetterB);
  }

  

function timingFunction(){
setInterval(()=>RandomLetterGenerator(), 2000)
}
useEffect(()=>timingFunction(),[])

function secondTimingFunction(){
  setInterval(()=>RandomLetterGeneratorz(), 3000)
}

useEffect(()=>secondTimingFunction(),[])



console.log(`This is the User Input: ${userInput}`)
console.log(`This is the Game Input: ${gamesInput}`)
console.log(`This is the Game Input 2: ${gamesInput2}`)

  
  
  return (
    <div>
      {`This is ${gamesInput}`}
      <p></p>
      {`This is ${gamesInput2}`}
      <Generator gamesInput = {gamesInput} setGamesInput = {setGamesInput} />
      <label> Input
      <input type="text" name="name" onChange = {handleChange} value ={userInput} />
      </label>
      </div>
  );
}

export default GameLogic;