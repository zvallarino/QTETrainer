import React,{ useState } from 'react'
import GameLogicInter from './GameLogicInter'
import EndlessInter from './EndlessInter'

function EndlessPath() {

  const [AlphabeticPressE,SetAlphabeticPressE] = useState(false)
  const [NumericPressE, setNumericPressE] = useState(false)
  const [AllPressE, setAllPressE] = useState(false)
  const [RouteSelectorE, setSelectedRouteE] = useState('0123456789')

  function setterOfAlphabeticPressE (e){
    SetAlphabeticPressE(cats=>!cats)
    setterOfRoute1E(e)
  }

  function setterOfNumericPressE (e){
    setNumericPressE(cats=>!cats)
    setterOfRoute2E(e)
  }

  function setterOfAllPressE (e){
    setAllPressE(cats=>!cats)
    setterOfRoute3E(e)
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
    <>
    <button onClick ={setterOfAlphabeticPressE} >Alphabetic</button>
    {AlphabeticPressE? <EndlessInter RouteSelector = {RouteSelectorE} />:null }
    <button  onClick ={setterOfNumericPressE} >Numeric</button>
    { NumericPressE?  <EndlessInter RouteSelector = {RouteSelectorE} />:null}
    <button  onClick ={setterOfAllPressE} >Leet</button>
    { AllPressE?  <EndlessInter RouteSelector = {RouteSelectorE} />:null}
    </>
  );
}

export default EndlessPath;
