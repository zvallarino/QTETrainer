import logo from './logo.svg';
import './App.css';
import GameLogic from './GameLogic';
import DropDown from './DropDown';
import Leaderboard from './Leaderboard';
import FinalScreen from './FinalScreen';
import React,{ useState, useEffect } from "react";

function App() {

const [selectedRoute, setSelectedRoute] = useState('abcdefghijklmnopqrstuvwxyz')
const [leaderboard, setLeaderBoard] = useState([])

useEffect(() =>
fetch("http://localhost:4000/leaderboard")
.then((response) => response.json())
.then((allData) => setLeaderBoard(allData)), [])  

  return (
    <div className="App">
      <GameLogic selectedRoute = {selectedRoute}/>
      <DropDown selectedRoute = {selectedRoute} setSelectedRoute = {setSelectedRoute} />
      <Leaderboard leaderboard = {leaderboard}/>
      <FinalScreen />
    </div>
  );
}

export default App;
