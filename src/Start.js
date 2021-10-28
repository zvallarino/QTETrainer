import MainMenu from "./MainMenu";
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';

function Start() {
  
  const [StartButtonPress, setStartButton ] = useState(false)
  const [disappear, setDisappear] = useState(false)

  function setterOfStartButton(e){
    setStartButton(button=>!button)
    setDisappear(cats=>!cats)
  }

  return (
    <div>
     <button className = {disappear? "candy":""} onClick ={setterOfStartButton}>START</button>
     {StartButtonPress? <MainMenu />:null}
     </div>
  )
}

export default Start;
