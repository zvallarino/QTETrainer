import NumberGenerator from "./NumberGenerator"
import RLG from "./RLG"
import RCG from "./RCG";
import React, { useEffect } from "react"


function Generator({gamesInput, setGamesInput}) {

function setterConsoleLog(e) {
  console.log("hello ")
}

function pleaseWork () {
  setInterval(setterConsoleLog, 5000)
  
}

function setterOfGamesInput () {
  // let alphabet = "abcdefghijklmnopqrstuvwxyz"
  // let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
  // console.log(randomLetter)
  return <RLG />
}
useEffect(() => pleaseWork(), [])

  // function grabRandomLetter () {
    
    // }
    
  

  
  return (
    <div>
      {/* {grabRandomLetter}  */}
      {setterOfGamesInput()}
    {/* <NumberGenerator /> */}
    <RLG gamesInput = {gamesInput} setGamesInput = {setGamesInput} />
    {/* <RCG /> */}
    </div>
  );
}

export default Generator;