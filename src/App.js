
import './App.css';
import Start from './Start';
import LosingScreen from './LosingScreen';
import Leaderboard from './Leaderboard';
import FinalScreen from './FinalScreen';
import React,{ useState, useEffect } from "react";

function App() {


const [leaderboard, setLeaderBoard] = useState([])

useEffect(() =>
fetch("http://localhost:4000/leaderboard")
.then((response) => response.json())
.then((allData) => setLeaderBoard(allData)), [])  

  return (
    <div className="App">
      <Start/>
      <Leaderboard leaderboard = {leaderboard}/>
      <LosingScreen />
    </div>
  );
}

export default App;
