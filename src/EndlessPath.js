import React,{ useState } from 'react'
import GameLogicInter from './GameLogicInter'
import EndlessInter from './EndlessInter'
import styled from 'styled-components'; 

function EndlessPath() {

  const [AlphabeticPressE,SetAlphabeticPressE] = useState(false)
  const [NumericPressE, setNumericPressE] = useState(false)
  const [AllPressE, setAllPressE] = useState(false)
  const [RouteSelectorE, setSelectedRouteE] = useState('0123456789')
  const [disppear4,setDisappear4] = useState(false)

  function setterOfAlphabeticPressE (e){
    SetAlphabeticPressE(cats=>!cats)
    setterOfRoute1E(e)
    setDisappear4((bang)=>!bang)
  }

  function setterOfNumericPressE (e){
    setNumericPressE(cats=>!cats)
    setterOfRoute2E(e)
    setDisappear4((bang)=>!bang)
  }

  function setterOfAllPressE (e){
    setAllPressE(cats=>!cats)
    setterOfRoute3E(e)
    setDisappear4((bang)=>!bang)
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
    <button  className = {disppear4? "candy":""} onClick ={setterOfAlphabeticPressE} >Alphabetic</button>
    {AlphabeticPressE? <EndlessInter RouteSelector = {RouteSelectorE} />:null }
    <button className = {disppear4? "candy":""}  onClick ={setterOfNumericPressE} >Numeric</button>
    { NumericPressE?  <EndlessInter RouteSelector = {RouteSelectorE} />:null}
    <button  className = {disppear4? "candy":""} onClick ={setterOfAllPressE} >Leet</button>
    { AllPressE?  <EndlessInter RouteSelector = {RouteSelectorE} />:null}
    </EndlessStyling>
  );
}

export default EndlessPath;

const EndlessStyling = styled.div`
display:flex; 
flex-direction:row;
justify-content:space-between;
`

