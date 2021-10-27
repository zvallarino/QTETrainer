import React, { useState } from "react";
import GameLogic from './GameLogic';
import LosingScreen from "./LosingScreen";
import LosingScreenInter from "./LosingScreenInter";




function GameLogicInter({ RouteSelector }) {

  const [killGame, setKillGame] = useState(true)
  const [losingScreenDecider, setLosingScreenDecider ] = useState(true)

  return (
    <>
    {killGame? <GameLogic setLosingScreenDecider = {setLosingScreenDecider} RouteSelector = {RouteSelector} setKillGame = {setKillGame} />: <LosingScreenInter losingScreenDecider = {losingScreenDecider} />}
    </>
  );
}

export default GameLogicInter;