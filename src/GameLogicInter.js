import React, { useState } from "react";
import GameLogic from './GameLogic';
import LosingScreen from "./LosingScreen";
import LosingScreenInter from "./LosingScreenInter";




function GameLogicInter({ RouteSelector, categoryForLeaderBoard}) {

  const [killGame, setKillGame] = useState(true)
  const [losingScreenDecider, setLosingScreenDecider ] = useState(true)
  const [loopCounter, setLoopCounter] = useState(0)
  const [finalScore,setFinalScore] = useState(0)

  return (
    <>
    {killGame? <GameLogic loopCounter = {loopCounter} setLoopCounter = {setLoopCounter} setLosingScreenDecider = {setLosingScreenDecider} RouteSelector = {RouteSelector} setKillGame = {setKillGame}  finalScore = {finalScore} setFinalScore = {setFinalScore}/>: <LosingScreenInter setKillGame = {setKillGame} losingScreenDecider = {losingScreenDecider} categoryForLeaderBoard = {categoryForLeaderBoard} finalScore = {finalScore}/>}
    </>
  );
}

export default GameLogicInter;