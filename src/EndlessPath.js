import React,{ useState } from 'react'
import GameLogicInter from './GameLogicInter'
import EndlessInter from './EndlessInter'
import styled from 'styled-components'; 

function EndlessPath() {

  const [AlphabeticPressE,SetAlphabeticPressE] = useState(false)
  const [NumericPressE, setNumericPressE] = useState(false)
  const [AllPressE, setAllPressE] = useState(false)
  const [PressE,setPressE] = useState(false)
  const [RouteSelectorE, setSelectedRouteE] = useState('0123456789')
  const [disppear4,setDisappear4] = useState(false)

  function setterOfAlphabeticPressE (e){
    SetAlphabeticPressE(cats=>!cats)
    setterOfRoute1E(e)
    setDisappear4((bang)=>!bang)
    setPressE(whaleSharks=>!whaleSharks)
  }

  function setterOfNumericPressE (e){
    setNumericPressE(cats=>!cats)
    setterOfRoute2E(e)
    setDisappear4((bang)=>!bang)
    setPressE(whaleSharks=>!whaleSharks)
  }

  function setterOfAllPressE (e){
    setAllPressE(cats=>!cats)
    setterOfRoute3E(e)
    setDisappear4((bang)=>!bang)
    setPressE(whaleSharks=>!whaleSharks)
  }

  function setterOfRoute1E(e){
    setSelectedRouteE('abcdefghijklmnopqrstuvwxyz')
  }

  function setterOfRoute2E(e){
    setSelectedRouteE('0123456789')
  }

  function setterOfRoute3E(e){
    setSelectedRouteE("`-=[];',./123456789abcdefghijklmnopqrstuvwxyz")
  }

  return (
    <EndlessStyling>
      <ButtonSpacing className = 'buttonSpacing'>
    <button  className = {disppear4? "candy":""} onClick ={setterOfAlphabeticPressE} >Alpha</button>
    </ButtonSpacing>
    <ButtonSpacing className = 'buttonSpacing'>
    <button className = {disppear4? "candy":""}  onClick ={setterOfNumericPressE} >Numeric</button>
    { PressE?  <EndlessInter RouteSelector = {RouteSelectorE} />:null}
    </ButtonSpacing>
    <ButtonSpacing className = 'buttonSpacing'>
    <button  className = {disppear4? "candy":""} onClick ={setterOfAllPressE} >Leet</button>
    </ButtonSpacing>
    </EndlessStyling>
  );
}

export default EndlessPath;

const EndlessStyling = styled.div`
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
margin-left:175px;
margin-right:175px;
`

