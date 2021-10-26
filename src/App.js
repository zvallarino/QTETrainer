import logo from './logo.svg';
import './App.css';
import GameLogic from './GameLogic';
import DropDown from './DropDown';
import React,{ useState } from "react";

function App() {

const [selectedRoute, setSelectedRoute] = useState('abcdefghijklmnopqrstuvwxyz')

  return (
    <div className="App">
      <GameLogic selectedRoute = {selectedRoute}/>
      <DropDown selectedRoute = {selectedRoute} setSelectedRoute = {setSelectedRoute} />
      
    </div>
  );
}

export default App;
