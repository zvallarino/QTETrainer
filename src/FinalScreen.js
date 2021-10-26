function FinalScreen(){
    let newObject = {
        name: "", 
        highscore: 0
    }

    // fetch ("http://localhost:3000/leaderboard", {
    //     method: 'POST', 
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(newObject)
    // })

    return (
        <>
        <label> Name
        <input type="text" name="name"  />
        </label>
        <p>
        Final Score: {20}
        </p>
          
        <form> 
        </form>
        
        </>
    )
}


export default FinalScreen