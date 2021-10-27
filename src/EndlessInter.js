import React, { useState } from "react";
import GameLogic from './GameLogic';
import LosingScreen from "./LosingScreen";
import EndlessMode from "./EndlessMode";




function EndlessInter({ RouteSelector }) {


  return (
    <>
    <EndlessMode RouteSelector = {RouteSelector}/>
    </>
  );
}

export default EndlessInter;