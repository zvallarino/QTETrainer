import Generator from "./Generator.js"
import React, { useState, useEffect } from "react"
import FinalScreen from "./FinalScreen.js"
import styled from 'styled-components';  
// import LosingScreen from "./LosingScreen.js"

function EndlessMode( {RouteSelector, setKillGame} ) {

  function randomFirstInputE(){
    let randomInput = RouteSelector
      let firstInput = randomInput[Math.floor(Math.random() * randomInput.length)]
      return firstInput
  }

  const [userInput,setUserInput] = useState('')
  const [gamesInput, setGamesInput] = useState ('')
  const [mainNumber, setMainNumber] = useState(randomFirstInputE())
  const [timeRemaining, setTimeRemaining] = useState(20)
  const [score,setScore] = useState(0)
  const [streakcounter, setStreakCounter] = useState(0)
  const [finalScore,setFinalScore] = useState(0)
  const [mistakes,setMistakes] = useState(0)
  const [loopCounter, setLoopCounter] = useState(0)
  const [progressbarE,setProgressBarE] = useState(0)
  const [onFire,setOnFire] = useState(false)
  const [progressbar,setProgressBar] = useState(0)

  let alphabetz = "abcdefghijklmnopqrstuvwxyz"

function gameFunction(cats) {
  if (mainNumber.toUpperCase() === cats.toUpperCase())
  {let alphabetY = RouteSelector
  let randomLetter = alphabetY[Math.floor(Math.random() * alphabetY.length)]
    console.log('correct')
    console.log(randomLetter)
    setMainNumber(randomLetter)
    setScore(score=>score + 100)
    setStreakCounter(streakcounter=>streakcounter+1)
  } else {
    console.log('incorrect')
    setMistakes(mistakes=>mistakes +1)
    setStreakCounter(0)
  } }

  function StreakCounterSayingsE(e){
    if (streakcounter >= 5){
      setScore(score => score + 10)
      console.log('Heating Up')
    } else if ( streakcounter >= 10){
      setScore(score => score + 25)
    }
  }
  
  function SetterOfProgressBarE(e){
    if (streakcounter === 0){
      setProgressBarE(0)
      setOnFire(false)
    } else if (streakcounter > 0 && streakcounter <10){
      setProgressBarE((cats)=>cats + 10)
      setOnFire(false)
    } else {
      setProgressBarE(100)
      setOnFire(true)
    }
  }

  function handleChange(e){
    setUserInput(e.target.value.slice(-1))
    gameFunction(e.target.value.slice(-1))
    StreakCounterSayingsE(e)
    SetterOfProgressBarE()
  }
  
  // function onSetTimeRemaining(){
  //   setTimeRemaining((timeRemaining)=>timeRemaining -1)
  // }

  // function OnsetInterval(){
  //   setInterval(()=>onSetTimeRemaining(),1000)
  // }

  // useEffect(()=>{OnsetInterval()},[]);

  // if(timeRemaining === 0){
  //   if (loopCounter === 0){
  //     if (score >= 8) {
  //       alert ("Level 2") 
  //       console.log("hello")
  //       setLoopCounter(loopCounter => loopCounter + 1)
  //       setFinalScore(finalScore + score)
  //       setScore(0)
  //       setTimeRemaining(30)
  //     } else {
  //       setKillGame(false)
  //       setTimeRemaining(20)
  //     }
  //     } else if (loopCounter === 1) {
  //     if (score >= 20) {
  //         alert ("Level 3")
  //         setLoopCounter(loopCounter => loopCounter + 1)
  //         setFinalScore(finalScore + score)
  //         setScore(0)
  //         setTimeRemaining(30)
  //       } else {
  //         setKillGame(false)
  //         setTimeRemaining(20)
  //       }
  //     } else if (loopCounter === 2) {
  //       if (score >= 40) {
  //       alert ("Level 4")
  //       setLoopCounter(loopCounter => loopCounter + 1)
  //       setFinalScore(finalScore + score)
  //       setScore(0)
  //       setTimeRemaining(5)
  //       } else {
  //         setKillGame(false)
  //         setTimeRemaining(20)}

  //       } else if (loopCounter === 3) {
  //       if (score >= 60) {
  //         alert ("Level 5")
  //       setLoopCounter(loopCounter => loopCounter + 1)
  //       setFinalScore(finalScore + score)
  //       setScore(0)
  //       setTimeRemaining(40)
  //     } else {
  //       setKillGame(false)
  //       setTimeRemaining(20)} 
  //     }
  //     else {
  //     alert (`You won! Your score is ${finalScore}`)
  //     }
  // }
    
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
    <MainBox className = "Box">
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
    <BoxOnRight className = "Box">
      <Circle className = {onFire?"onFirePlease":""}>
        {onFire?"FIRE":""}
      </Circle>
      <ProgressBar />
    </BoxOnRight>
    </WholeThing>
);
}

export default EndlessMode;


const WholeThing = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;

h4{
  font-size: 30px;
  font-weight:bold;
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
border: 20px solid black;
width:120px;
height:120px; 
border-radius: 50%;
text-weight:bold;
font-size: 30px;
color:black;
text-align:center;
justify-content:center;
padding: 10px;
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