
import './App.css';
import Start from './Start';
import Leaderboard from './Leaderboard';
import React,{ useState, useEffect } from "react";
import HowTo from './HowTo';
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom';

function LandingPage() {

  return (
    <div>
      {/* <Router>
      <Route path ="/">
        <LandingPage />
      </Route>
      </Router> */}
      <button>How To</button>
      <button>Start</button>
      <button>LeaderBoard</button>
    </div>
  );
}

export default LandingPage;
