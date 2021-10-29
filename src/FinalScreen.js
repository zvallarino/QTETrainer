import { Form } from "semantic-ui-react";
import { useState, useEffect } from "react";
import ArcadeMode from "./ArcadeMode";
import styled from 'styled-components';  

function FinalScreen( { finalScore, categoryForLeaderBoard, victoryOrClose, setKillGame} ){

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
        <OutterBox>
        <InnerBox1>
        {`CATEGORY: ${categoryForLeaderBoard}`}
        </InnerBox1>
        <InnerBox2>
        {`FINAL SCORE: ${finalScore}`}
        </InnerBox2>
        </OutterBox>
        <Form onSubmit={submittingNewScore}>
          
        <Form.Group widths="equal">
          <Box3>
          <Form.Input fluid label="INPUT NAME" placeholder="Name" name="name" onChange = {handleChange}/>
          </Box3>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
        </Form>
        <p>
      <h1 className = {disappearing5? "candy":""}>{victoryOrClose? "Nice Run":"Victory"}</h1>
      <button onClick = {setteroftryAgain} className = {disappearing5? "candy":""}>TRY AGAIN</button>
      </p>
      <p>
        {disappearing5? null : timeDecreasing}
        </p>
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


const InnerBox2 = styled.div`

font-size: 40px;
font-weight:bold;

`

const Box3 = styled.div`

font-size: 20px;
font-weight:bold;

`