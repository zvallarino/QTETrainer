
import './App.css';
import Start from './Start';
import Leaderboard from './Leaderboard';
import React,{ useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'
import HowTo from './HowTo';
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';

function App() {

const [leaderboard, setLeaderBoard] = useState([])

useEffect(() =>
fetch("http://localhost:4000/leaderboard")
.then((response) => response.json())
.then((allData) => setLeaderBoard(allData)), [])  

  return (
    <div className="App">
      <Router>
      <Route path ="/HowTo">
        <HowTo />
      </Route>
      <Route exact path ="/Start">
      <Start/>
      </Route>
      <Route path ="/Leaderboard">
      <Leaderboard leaderboard = {leaderboard}/>
      </Route>
      <Route path ="/">
  
      <NavLink  to="/HowTo">
          <p>HOW TO</p>
      </NavLink>
  
      <NavLink  to="/Start">
        <p>
          START 
          </p>
      </NavLink> 
      <NavLink  to="/leaderboard">
          <p>
          LEADERBOARD
          </p>
      </NavLink>  
      </Route>
      </Router>

      {/* <Leaderboard leaderboard = {leaderboard}/> */}
    </div>
  );
}

export default App;
