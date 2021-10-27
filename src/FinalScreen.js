import { Form } from "semantic-ui-react";
import { useState } from "react";

function FinalScreen( { finalScore } ){

    const [newScore, setNewScore] = useState({
        name: "",
        highscore: 0,
        cateogry: ""
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
          highscore: newScore.highscore,
          category: newScore.category
          })
    
        })
        .then(response => response.json())
        .then((pokemon) => console.log(pokemon))
      }
    

    return (
        <>
        <Form onSubmit={submittingNewScore}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange = {handleChange}/>
          <Form.Input fluid label="High Score" placeholder="highscore" name="highscore" value= {finalScore} />
          <Form.Input
            fluid
            label="Category"
            placeholder="Category"
            name="category"
            onChange = {handleChange}
          />
          
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
        </>
    )
}


export default FinalScreen