import React, { useState } from 'react'
import GameLogic from './GameLogic';
import GameLogicInter from './GameLogicInter';
import styled from 'styled-components'; 

function ArcadeMode() {

  const [AlphabeticPress,SetAlphabeticPress] = useState(false)
  const [NumericPress, setNumericPress] = useState(false)
  const [AllPress, setAllPress] = useState(false)
  const [Press,setThePress] = useState(false)
  const [RouteSelector, setSelectedRoute] = useState('0123456789')
  const [displayOn, setDisplayOn] = useState ("none")
  const [disappear3,setDisappear3] = useState(false)
  const [categoryForLeaderBoard, setCategoryForLeaderBoard] = useState ('')

  function setterOfAlphabeticPress (e){
    SetAlphabeticPress(cats=>!cats)
    setterOfRoute1(e)
    setDisappear3((fox)=>!fox)
    setThePress((whales)=>!whales)
  }

  function setterOfNumericPress (e){
    setNumericPress(cats=>!cats)
    setterOfRoute2(e)
    setDisappear3((fox)=>!fox)
    setThePress((whales)=>!whales)
  }

  function setterOfAllPress (e){
    setAllPress(cats=>!cats)
    setterOfRoute3(e)
    setDisappear3((fox)=>!fox)
    setThePress((whales)=>!whales)
  }

  function setterOfRoute1(e){
    setSelectedRoute('abcdefghijklmnopqrstuvwxyz')
    setCategoryForLeaderBoard('Alphabetic')
  }

  function setterOfRoute2(e){
    setSelectedRoute('0123456789')
    setCategoryForLeaderBoard('Numeric')
  }

  function setterOfRoute3(e){
    setSelectedRoute("`-=[];',./123456789abcdefghijklmnopqrstuvwxyz")
    setCategoryForLeaderBoard('All')
  }

  return (
    <ArcadeModeStyling className = 'ArcadeModeStyling'>
    <ButtonSpacing className = 'buttonSpacing'>
    <button  className = {disappear3? "candy":""} onClick ={setterOfAlphabeticPress}>Alpha</button>
    </ButtonSpacing>
    <ButtonSpacing className = 'buttonSpacing'>
    <button  className = {disappear3? "candy":""} onClick ={setterOfNumericPress}>Numeric</button>
    { Press?  <GameLogicInter categoryForLeaderBoard = {categoryForLeaderBoard} RouteSelector = {RouteSelector} />:null}
    </ButtonSpacing>
    <ButtonSpacing className = 'buttonSpacing'>
    <button  className = {disappear3? "candy":""} onClick ={setterOfAllPress}>Leet</button>
    </ButtonSpacing>
    </ArcadeModeStyling>
  );
}

export default ArcadeMode;

const ArcadeModeStyling = styled.div`
display:flex; 
flex-direction:row;
button{
margin:10px 4px; 
width: 200px;
color:#fff;
font-family:sans-serif;
text-transform:uppercase;
text-align:center;
text-decoration:none;
background-color:#FF6766;
}

`

const ButtonSpacing = styled.div`
margin-left:200px;
margin-right:200px;
`