import MainMenu from "./MainMenu";
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import styled from 'styled-components'; 
import { brown } from "color-name";

function Start() {
  
  const [StartButtonPress, setStartButton ] = useState(false)
  const [disappear, setDisappear] = useState(false)

  function setterOfStartButton(e){
    setStartButton(button=>!button)
    setDisappear(cats=>!cats)
  }

  return (
    <StartContainer>
    <div>
     <button className = {disappear? "candy":""} onClick ={setterOfStartButton}>START</button>
     {StartButtonPress? <MainMenu />:null}
     </div>
     </StartContainer> 
  )
}

export default Start;

const StartContainer = styled.div`
  background-color: brown; 
`