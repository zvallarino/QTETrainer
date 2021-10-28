import React, { useState } from "react";
import ArcadeMode from "./ArcadeMode";
import EndlessPath from "./EndlessPath";
import Settings from "./Settings"
import styled from 'styled-components'; 


function MainMenu() {

  const [ Arcade, setArcadeMode ] = useState(false)
  const [ Endless, setEndless ] = useState(false)
  const [disappearing, setDisappearing] = useState(false)
  const [settings, setSettings] = useState (false)

  function SetterOfArcadeMode(e){
    setArcadeMode((cats)=>!cats)
    setDisappearing((dogs)=>!dogs)

  }

  function SetterOfEndless(e){
    setEndless((cats)=>!cats)
    setDisappearing((dogs)=>!dogs)
  }

  function SetterOfSettings(e){
    setSettings((cats)=>!cats)
    setDisappearing((dogs)=>!dogs)
  }


  function PageReload(e){
    window.location.reload();
    return false;
  }

  return (
    <MainMenuZ className ="MainMenuZ">
      <button onClick = {SetterOfArcadeMode} className = {disappearing? "candy":""}>Arcade</button>
      {Arcade? <ArcadeMode /> : null}
      <button onClick = {SetterOfEndless} className = {disappearing? "candy":""}>Endless</button>
      {Endless? <EndlessPath />: null}
      <button className = {disappearing? "candy":""}>How to</button>
      <button onClick = {SetterOfSettings} className = {disappearing? "candy":""}>Settings </button>
      {settings? <Settings />: null}
      <button onClick ={PageReload} className = {disappearing? "candy":""}>Main Menu</button>
    </MainMenuZ>
  );
}

export default MainMenu;

const MainMenuZ = styled.div`
display:flex; 
flex-direction:column;
`
