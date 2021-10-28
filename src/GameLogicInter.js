import React, { useState } from "react";
import GameLogic from './GameLogic';
import LosingScreen from "./LosingScreen";
import LosingScreenInter from "./LosingScreenInter";




function GameLogicInter({ RouteSelector }) {

  const [killGame, setKillGame] = useState(true)
  const [losingScreenDecider, setLosingScreenDecider ] = useState(true)
  const [loopCounter, setLoopCounter] = useState(0)

  return (
    <>
    {killGame? <GameLogic loopCounter = {loopCounter} setLoopCounter = {setLoopCounter} setLosingScreenDecider = {setLosingScreenDecider} RouteSelector = {RouteSelector} setKillGame = {setKillGame} />: <LosingScreenInter setKillGame = {setKillGame} losingScreenDecider = {losingScreenDecider} />}
    </>
  );
}

export default GameLogicInter;