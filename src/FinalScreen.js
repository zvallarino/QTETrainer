import { Form } from "semantic-ui-react";
import { useState, useEffect } from "react";
import ArcadeMode from "./ArcadeMode";
import styled from 'styled-components';  

function FinalScreen( { finalScore, categoryForLeaderBoard, victoryOrClose, setKillGame, loopCounter} ){

  const [timeDecreasing, setTimeDecreasing] = useState(10)
  const [tryAgain, setTryAgain] = useState(false)
  const [disappearing5, setDisappear5] = useState(false)

 

  function onSetTimeRemainingLosing(){
    setTimeDecreasing((timeRemaining)=>timeRemaining -1)
  }


  function setteroftryAgain(e){
    setTryAgain(cats=>!cats)
    setDisappear5((dogs)=>!dogs)
    setKillGame(true)
  }

  useEffect(() => {
    const timerID = setInterval(()=>{onSetTimeRemainingLosing()},1000);
    return function cleanup(){
      clearInterval(timerID)
    }
  }, []);



    const [newScore, setNewScore] = useState({
        name: ""
        
      })

      function handleChange(e){
        setNewScore({
          ...newScore,
          [e.target.name]:e.target.value
        })
        console.log(newScore)
      }

      function submittingNewScore(e){
        e.preventDefault()
        fetch('http://localhost:4000/leaderboard',{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({
          name: newScore.name,
          highscore: finalScore, 
          category: categoryForLeaderBoard
          })
    
        })
        .then(response => response.json())
        .then((pokemon) => console.log(pokemon))
      }
    
      if (timeDecreasing === 0){
        window.location.reload();
        return false;
      }
    
    

    return (
        <>
        <TextofSaying className = {disappearing5? "candy":""}>
          {loopCounter > 3 ? "Victory":"Nice Run"}
          </TextofSaying>
          <SpaceBetweenFinalScreen></SpaceBetweenFinalScreen>
        <OutterBox>
        <InnerBox1>
        {`CATEGORY: ${categoryForLeaderBoard.toUpperCase()}`}
        </InnerBox1>
        <InnerBox2>
        {`FINAL SCORE: ${finalScore}`}
        </InnerBox2>
        </OutterBox>
        <SpaceBetweenFinalScreen></SpaceBetweenFinalScreen>
        <Form onSubmit={submittingNewScore}>
          
        <Form.Group widths="equal">
          <Box3>
          <Form.Input fluid label="INPUT NAME" placeholder="Name" name="name" onChange = {handleChange}/>
          </Box3>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
        </Form>
        <p>
      <button onClick = {setteroftryAgain} className = {disappearing5? "candy":""}>TRY AGAIN</button>
      </p>
      <FontOfTiming>
        {disappearing5? null : timeDecreasing}
        </FontOfTiming>
        </>
    )
}


export default FinalScreen

const OutterBox = styled.div`
display:flex;
flex-direction:column;
`

const InnerBox1 = styled.div`

  font-size: 40px;
  font-weight:bold;
  
`

const TextofSaying = styled.div`

   font-family: 'Games', sans-serif;
  font-size:50px;
  font-weight:bold;
  color: #FF6766;
  text-shadow: 8px 8px black;

`

const SpaceBetweenFinalScreen = styled.div`
height:40px;
`


const InnerBox2 = styled.div`

font-size: 40px;
font-weight:bold;
margin-top:10px;

`

const Box3 = styled.div`

font-size: 20px;
font-weight:bold;

`

const FontOfTiming = styled.div`
font-family: 'Games', sans-serif;
font-size:30px;
font-weight:bold;
color: black;

`