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
      <ButtonB className ="buttonB">
      <button onClick = {SetterOfArcadeMode} className = {disappearing? "candy":""}>Arcade</button>
      {Arcade? <ArcadeMode /> : null}
      </ButtonB>
      <ButtonB className ="buttonB">
      <button onClick = {SetterOfEndless} className = {disappearing? "candy":""}>Endless</button>
      {Endless? <EndlessPath />: null}
      </ButtonB>
      <ButtonB className ="buttonB">
      <button onClick = {SetterOfSettings} className = {disappearing? "candy":""}>Settings </button>
      {settings? <Settings />: null}
      </ButtonB>
      <ButtonB className ="buttonB">
      <NavLink to = "/HowTo" > 
      <button className = {disappearing? "candy":""}>How to</button>
      </NavLink>
      </ButtonB>
    </MainMenuZ>
  );
}

export default MainMenu;

const MainMenuZ = styled.div`
display:flex;
height:97%; 
flex-direction:column;
justify-content: center;
align-items: center;

button{
  margin:10px 4px; 
  width:80px;
  height:40px;
  color:#fff;
  font-family:sans-serif;
  text-transform:uppercase;
  text-align: center;
  text-decoration:none;
  background-color:#FF6766;
}
`

const ButtonB = styled.div`
`
