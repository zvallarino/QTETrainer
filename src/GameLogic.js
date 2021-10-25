import Generator from "./Generator.js"
import React, { useState, useEffect} from "react"

function GameLogic() {

  const [userInput,setUserInput] = useState('')
  const [lastInput,setLastInput] = useState('')
  const [gamesInput, setGamesInput] = useState ('')

  function setterOfGamesInput (e) {
    console.log("goodbye")
  }




function handleChange(e){
console.log("Bye")
}

function gameFunction() {
  if (lastInput === gamesInput)
  {console.log("correct")}
   else {console.log("incorrect")}}

  
  return (
    <div>
      <Generator gamesInput = {gamesInput} setGamesInput = {setGamesInput} />
      <label>
        Name:
      <input type="text" name="name" onChange = {handleChange} />
      </label>
      </div>
  );
}

export default GameLogic;