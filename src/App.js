
import './App.css';
import Start from './Start';
import Leaderboard from './Leaderboard';
import React,{ useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'
import HowTo from './HowTo';
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import styled from 'styled-components';  
import MainMenu from './MainMenu';

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
      <Route exact path ="/MainMenu">
      <MainMenu/>
      </Route>
      <Route path ="/Leaderboard">
      <Leaderboard leaderboard = {leaderboard}/>
      </Route>
      <Route path ="/">
      <NavBar>
      <NavLink  to="/HowTo">
      HOW TO
      </NavLink>
      <NavLink  to="/Start">
          START 
      </NavLink> 
      <NavLink  to="/leaderboard">
          LEADERBOARD
      </NavLink>
      </NavBar>
      </Route>
      </Router>
    </div>
  );
}

export default App;

const NavBar = styled.div`
display:flex;
justify-content: center;
align-items: center;
text-align:center;

background-color:white;
border-top: solid black;
border-left: solid black;
border-right: solid black;
`

// const StartStyle = styled.div `
// background-color:  #f2d9d9;
// font-family: 'Games', sans-serif;
// font-size: 60px;
//   // position: fixed;
//   // top: 50%; 
//   // left: 50%;
//   // margin-top: -50px;
//   // margin-left: -100px; 
//   // display: block;
//   // height: 200px;
//   // width: 300px;
//   border-radius: 50%;
//   border: 3px solid red;

// `

// const HowToLinkStyle = styled.div`
//   background-color: #f2d9d9;
//   font-family: 'Games', sans-serif;
//   font-size: 30px; 
//   // position: absolute;
//   // bottom:0; 
//   // left:0; 
//   // display: block;
//   // height: 80px;
//   // width: 180px;
//   border-radius: 50%;
//   border: 3px solid red;
// `
// const LeaderBoardStyle = styled.div`
//   background-color: #f2d9d9;
//   font-family: 'Games', sans-serif;
//   font-size: 25px;
//   // position: absolute;
//   // bottom:0; 
//   // right:0; 
//   // display: block;
//   // height: 80px;
//   // width: 180px;
//   border-radius: 50%;
//   border: 3px solid red;
// `

// const NavBar = styled.div`
// display:flex; 
// justify-content: space-around;
// align-items: end;
// align-self: flex-end;
// `

// const FullScreen = styled.div`
// height:100%;
// width:100%
// background-color: blue;
// `

