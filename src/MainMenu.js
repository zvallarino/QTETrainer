import React, { useState } from "react";
import ArcadeMode from "./ArcadeMode";
import EndlessPath from "./EndlessPath";
import Settings from "./Settings"
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
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
      <button onClick = {SetterOfSettings} className = {disappearing? "candy":""}>Settings </button>
      {settings? <Settings />: null}
      <NavLink to = "/HowTo" > 
      <button className = {disappearing? "candy":""}>How to</button>
      </NavLink>
      <button onClick ={PageReload} className = {disappearing? "candy":""}>Main Menu</button>
    </MainMenuZ>
  );
}

export default MainMenu;

const MainMenuZ = styled.div`
display:flex; 
flex-direction:column;
`
