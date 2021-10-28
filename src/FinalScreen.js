import { Form } from "semantic-ui-react";
import { useState, useEffect } from "react";
import ArcadeMode from "./ArcadeMode";

function FinalScreen( { finalScore, categoryForLeaderBoard} ){

  const [timeDecreasing, setTimeDecreasing] = useState(10)
  const [tryAgain, setTryAgain] = useState(false)
  const [disappearing5, setDisappear5] = useState(false)

 

  function onSetTimeRemainingLosing(){
    setTimeDecreasing((timeRemaining)=>timeRemaining -1)
  }


  function setteroftryAgain(e){
    setTryAgain(cats=>!cats)
    setDisappear5((dogs)=>!dogs)
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
        {`This is your ${categoryForLeaderBoard}`}
        {`This is your ${finalScore}`}
        <Form onSubmit={submittingNewScore}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange = {handleChange}/>
         
          
          
          
          
        </Form.Group>
        <Form.Button>Submit</Form.Button>
        </Form>
        <p>
      <h1 className = {disappearing5? "candy":""}>YOU SUCK!</h1>
      <button onClick = {setteroftryAgain} className = {disappearing5? "candy":""}>TRY AGAIN</button>
      </p>
        {tryAgain? <ArcadeMode />: null}
      <p>
        {disappearing5? null : timeDecreasing}
        </p>
        </>
    )
}


export default FinalScreen