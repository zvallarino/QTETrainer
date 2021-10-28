import React, { useState } from "react";
import ArcadeMode from "./ArcadeMode";
import EndlessPath from "./EndlessPath";


function MainMenu() {

  const [ Arcade, setArcadeMode ] = useState(false)
  const [ Endless, setEndless ] = useState(false)
  const [disappearing, setDisappearing] = useState(false)

  function SetterOfArcadeMode(e){
    setArcadeMode((cats)=>!cats)
    setDisappearing((dogs)=>!dogs)

  }

  function SetterOfEndless(e){
    setEndless((cats)=>!cats)
    setDisappearing((dogs)=>!dogs)
  }

  function PageReload(e){
    window.location.reload();
    return false;
  }

  return (
    <div>
      <button onClick = {SetterOfArcadeMode} className = {disappearing? "candy":""}>Arcade</button>
      {Arcade? <ArcadeMode /> : null}
      <button onClick = {SetterOfEndless} className = {disappearing? "candy":""}>Endless</button>
      {Endless? <EndlessPath />: null}
      <button className = {disappearing? "candy":""}>How to</button>
      <button className = {disappearing? "candy":""}>Credits</button>
      <button onClick ={PageReload} className = {disappearing? "candy":""}>Main Menu</button>
    </div>
  );
}

export default MainMenu;
