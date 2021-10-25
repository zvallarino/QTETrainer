import Generator from "./Generator.js"
import React, { useState } from "react"

function GameLogic() {

  const [userInput,setUserInput] = useState('')

  const [lastInput,setLastInput] = useState('')

function handleChange(e){
  setUserInput(e.target.value)
  let listOfCharacters = [...userInput];
  console.log(typeof(listOfCharacters));
  console.log(typeof(userInput));
  console.log(userInput.slice(-1));

}

  return (
    <div>
      <Generator />
      <label>
        Name:
      <input type="text" name="name" onChange = {handleChange} />
      </label>
      </div>
  );
}

export default GameLogic;