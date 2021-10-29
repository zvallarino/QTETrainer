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
    <Starter className = "Starter">
      <div>
     <NavLink to = "/MainMenu"> <button >START</button>
     {/* {StartButtonPress? <MainMenu />:null} */}
     </NavLink> 
      </div>
     </Starter> 
  )
}

export default Start;

const Starter = styled.div`
  height:97.5%;
  width:100%;
  display:flex; 
  align-items:center;  
  justify-content: center;
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

// const StarterStyled = styled.div`
// display:flex;
// justify-content: center;
// align-items: center;



// `