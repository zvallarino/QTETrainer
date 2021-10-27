import React, { useState } from 'react'
import GameLogic from './GameLogic';
import GameLogicInter from './GameLogicInter';

function ArcadeMode() {

  const [AlphabeticPress,SetAlphabeticPress] = useState(false)
  const [NumericPress, setNumericPress] = useState(false)
  const [AllPress, setAllPress] = useState(false)
  const [RouteSelector, setSelectedRoute] = useState('0123456789')
  const [displayOn, setDisplayOn] = useState ("none")

  function setterOfAlphabeticPress (e){
    SetAlphabeticPress(cats=>!cats)
    setterOfRoute1(e)
    // e.target.remove()
    e.target.style.display = displayOn
  }

  function setterOfNumericPress (e){
    setNumericPress(cats=>!cats)
    setterOfRoute2(e)
  }

  function setterOfAllPress (e){
    setAllPress(cats=>!cats)
    setterOfRoute3(e)
  }

  function setterOfRoute1(e){
    setSelectedRoute('abcdefghijklmnopqrstuvwxyz')
  }

  function setterOfRoute2(e){
    setSelectedRoute('0123456789')
  }

  function setterOfRoute3(e){
    setSelectedRoute("`-=[];',./123456789abcdefghijklmnopqrstuvwxyz")
  }

  return (
    <>
    <button className = {displayOn} onClick ={setterOfAlphabeticPress}>Alphabetic</button>

    {AlphabeticPress? <GameLogicInter RouteSelector = {RouteSelector} />:null }
    <button onClick ={setterOfNumericPress}>Numeric</button>
    { NumericPress?  <GameLogicInter RouteSelector = {RouteSelector} />:null}
    <button onClick ={setterOfAllPress}>Leet</button>
    { AllPress?  <GameLogicInter RouteSelector = {RouteSelector} />:null}
    </>
  );
}

export default ArcadeMode;
