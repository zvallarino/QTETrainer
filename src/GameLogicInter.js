import React, { useState } from "react";
import GameLogic from './GameLogic';
import LosingScreen from "./LosingScreen";




function GameLogicInter({ RouteSelector }) {

  const [killGame, setKillGame] = useState(true)

  return (
    <>
    {killGame? <GameLogic RouteSelector = {RouteSelector} setKillGame = {setKillGame} />: <LosingScreen />}
    </>
  );
}

export default GameLogicInter;