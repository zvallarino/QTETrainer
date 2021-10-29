import Generator from "./Generator.js"
import React, { useState, useEffect } from "react"
import FinalScreen from "./FinalScreen.js"
import { ProgressBar } from 'react-bootstrap'
import styled from 'styled-components';  
// import LosingScreen from "./LosingScreen.js"

function GameLogic( {RouteSelector, setKillGame, setLosingScreenDecider, loopCounter, setLoopCounter, finalScore, setFinalScore, setVictoryOrClose } ) {
  function randomFirstInput(){
    let randomInput = RouteSelector
      let firstInput = randomInput[Math.floor(Math.random() * randomInput.length)]
      return firstInput
  }

  const [userInput,setUserInput] = useState('')
  const [gamesInput, setGamesInput] = useState ('')
  const [mainNumber, setMainNumber] = useState(randomFirstInput())
  const [timeRemaining, setTimeRemaining] = useState(20)
  const [score,setScore] = useState(0)
  const [streakcounter, setStreakCounter] = useState(0)
  // const [finalScore,setFinalScore] = useState(0)
  const [mistakes,setMistakes] = useState(0)
  const [progressbar,setProgressBar] = useState(0)
  const [onFire,setOnFire] = useState(false)



let ProgressBarCounter = 0;
function gameFunction(cats) {
  if (mainNumber.toUpperCase() === cats.toUpperCase())
  {let alphabetY = RouteSelector
  let randomLetter = alphabetY[Math.floor(Math.random() * alphabetY.length)]
    console.log('correct')
    console.log(randomLetter)
    setMainNumber(randomLetter)
    setScore(score=>score +100)
    setStreakCounter(streakcounter=>streakcounter+1)
  } else {
    console.log('incorrect')
    setMistakes(mistakes=>mistakes +1)
    setStreakCounter(0)
  } }


function StreakCounterSayings(e){
  if (streakcounter >= 5){
    setScore(score => score + 10)
    setProgressBar(streakcounter * 10)
    console.log('Heating Up')
  } else if ( streakcounter >= 10){
    setScore(score => score + 25)
    setProgressBar(100)
  }
}

function SetterOfProgressBar(e){
  if (streakcounter === 0){
    setProgressBar(0)
    setOnFire(false)
  } else if (streakcounter > 0 && streakcounter <10){
    setProgressBar((cats)=>cats + 10)
    setOnFire(false)
  } else {
    setProgressBar(100)
    setOnFire(true)
  }
}
// StreakCounterSayings()

  function handleChange(e){
    setUserInput(e.target.value.slice(-1))
    gameFunction(e.target.value.slice(-1))
    StreakCounterSayings(e)
    SetterOfProgressBar(e)
  }
  
  function onSetTimeRemaining(){
    setTimeRemaining((timeRemaining)=>timeRemaining -1)
  }

  function OnsetInterval(){
    setInterval(()=>onSetTimeRemaining(),1000)
  }

  useEffect(()=>{OnsetInterval()},[]);

  if(timeRemaining === 0){
    if (loopCounter === 0){
      if (score >= 1) {
        alert ("Level 2") 
        setLoopCounter(loopCounter => loopCounter + 1)
        setFinalScore(finalScore + score)
        setScore(0)
        setStreakCounter(0)
        setProgressBar(0)
        setTimeRemaining(10)
      } else {
        setKillGame(false)
        setLosingScreenDecider(false)
        setTimeRemaining(20)
      }
      } else if (loopCounter === 1) {
      if (score >= 2) {
          alert ("Level 3")
          setLoopCounter(loopCounter => loopCounter + 1)
          setFinalScore(finalScore + score)
          setScore(0)
          setStreakCounter(0)
          setProgressBar(0)
          setTimeRemaining(10)
        } else {
          setKillGame(false)
          setLosingScreenDecider(false)
          setTimeRemaining(20)
        }
      } else if (loopCounter === 2) {
        if (score >= 3) {
        alert ("Level 4")
        setLoopCounter(loopCounter => loopCounter + 1)
        setFinalScore(finalScore + score)
        setScore(0)
        setStreakCounter(0)
        setProgressBar(0)
        setTimeRemaining(5)
        } else {
          setKillGame(false)
          setLosingScreenDecider(true)
          setTimeRemaining(20)}
        } else if (loopCounter === 3) {
        if (score >= 4) {
          alert ("Level 5")
        setLoopCounter(loopCounter => loopCounter + 1)
        setFinalScore(finalScore + score)
        setScore(0)
        setStreakCounter(0)
        setProgressBar(0)
        setTimeRemaining(10)
      } else {
        setKillGame(false)
        setLosingScreenDecider(true)
        setTimeRemaining(20)} 
      }
      else if (loopCounter === 4) {
        if (score >= 4) {
          setKillGame(false)
          setLosingScreenDecider(true)
      } else {
        setKillGame(false)
        setLosingScreenDecider(true)
  
        setTimeRemaining(20)} 
      }
      else {
        setVictoryOrClose(true)
        console.log()
        setKillGame(false)
        setLosingScreenDecider(true)
      }
  }
    
  function RandomLetterGenerator1() {
    let randomLetterzero = RouteSelector[Math.floor(Math.random() * RouteSelector.length)]
    setGamesInput(randomLetterzero)
    setMainNumber(randomLetterzero)
    ;
  }

function timingFunction(){
setInterval(()=>RandomLetterGenerator1(), 5000)
}

useEffect(()=>timingFunction(),[])

const ProgressBar = (props) => {
  return (
    <div>
      <Bar>
        <Fill percentage={props} />
      </Bar>
    </div>
  );
}

const Bar = styled.div`
  position: relative;
  height: 500px;
  width: 20px;
  background: white;
  border-radius: 30px;
  border: 20px solid black;
  margin: 1rem auto;
`


const Fill = styled.div`
  background: red;
  width: 20px;
  border-radius: inherit;
  transition: height 0.2s ease-in;
  height:${`${progressbar}%`};
  `


  
  return (
    <WholeThing className = "WholeThing">
      <BoxOnLeft className = "Box">
        <Box1>
          <InnerBox1>
          {`Score:${score}`}
          </InnerBox1>
          <InnerBox2>
          {`Miss: ${mistakes}`}
          </InnerBox2>
        </Box1>
        <Box2> 
        </Box2>
      </BoxOnLeft>
      <SpaceBewteenThings>
      <MainBox className = "Box Dragon">
      <MainButton>
      {mainNumber.toUpperCase()}
      </MainButton>
      <h4>{timeRemaining} Seconds Remaining</h4>
      <p></p>
      <InputBoxZ>
      <label> 
      <input type="text" name="name" onChange = {handleChange} value ={userInput} />
      </label>
      </ InputBoxZ>
      </MainBox>
      </SpaceBewteenThings>
      <BoxOnRight className = "Box Fox">
        <Circle className = {onFire?"onFirePlease":""}>
          {onFire?"FIRE":""}
        </Circle>
        <ProgressBar />
      </BoxOnRight>
      </WholeThing>
  );
}



export default GameLogic;

const WholeThing = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;

h4{
  font-family: 'Games', sans-serif;
  font-size:30px;
  font-weight:bold;
  color: #FF6766;
  text-shadow: 8px 8px black;
}
`
const MainBox =styled.div`
display:flex;
flex-direction:column;
`

const MainButton = styled.div`
flex-direction:column;
font-size:200px;
background-color:white;
border: 20px solid black;
width:250px;
height:250px;
border-radius:50%;
text-align:center;
`

const BoxOnLeft = styled.div`
display:flex;
flex-direction:column;
width:175px; 

`

const Circle = styled.div`
font-family: 'Games', sans-serif;
border: 20px solid black;
width:120px;
height:120px; 
border-radius: 50%;
font-weight:bold;
font-size: 60px;
color:black;
justify-content: center;
align-content: center;
flex-direction: column;
padding-top: 35px;
padding-left: 20px;
padding-right: 20px;
background-color:white;
`

const BoxOnRight = styled.div`
display:flex;
flex-direction:column;
`

const InputBoxZ =styled.div`
height:40px;
font-size:20pt;

`


const InnerBox1 = styled.div`
font-size: 25px;
font-weight: bold; 
background-color:white;
border: 10px solid black;
border-radius: 30px;
margin-top: 100px;
margin-bottom: 10px;
`

const InnerBox2 = styled.div`
font-size: 25px;
font-weight: bold;
background-color:white;
border: 10px solid black;
border-radius: 30px;

`

const Box1 = styled.div`
flex-direction:column;
height:400px;
`

const Box2 = styled.div`
height:50%
border: 10px solid blue;
`


const SpaceBewteenThings = styled.div`
margin-left:400px;
margin-right:400px;
`



  // const [gamesInput2, setGamesInput2] = useState ('')
  // const [gamesInput3, setGamesInput3] = useState ('')
  // const [gamesInput4, setGamesInput4] = useState ('')

 // function RandomLetterGenerator2() {

  //   let randomLetterB = alphabetz[Math.floor(Math.random() * alphabetz.length)]
  //   setGamesInput2(randomLetterB);
  // }

  // function RandomLetterGenerator3() {
  //   let randomLetterB = alphabetz[Math.floor(Math.random() * alphabetz.length)]
  //   setGamesInput3(randomLetterB);
  // }  

  // function RandomLetterGenerator4() {
  //   let randomLetterB = alphabetz[Math.floor(Math.random() * alphabetz.length)]
  //   setGamesInput4(randomLetterB);
  // } 


// function secondTimingFunction(){
//   setInterval(()=>RandomLetterGenerator2(), 2000)
// }

// useEffect(()=>secondTimingFunction(),[])

// function thirdTimingFunction(){
//   setInterval(()=>RandomLetterGenerator3(), 1000)
// }

// useEffect(()=>thirdTimingFunction(),[])

// function fourthTimingFunction(){
//   setInterval(()=>RandomLetterGenerator4(), 500)
// }

// useEffect(()=>fourthTimingFunction(),[])

  
