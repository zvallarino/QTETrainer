import React, { useState } from "react";
import ArcadeMode from "./ArcadeMode";
import EndlessPath from "./EndlessPath";

function MainMenu() {

  const [ Arcade, setArcadeMode ] = useState(false)
  const [ Endless, setEndless ] = useState(false)

  function SetterOfArcadeMode(e){
    setArcadeMode((cats)=>!cats)
  }

  function SetterOfEndless(e){
    setEndless((cats)=>!cats)
  }

  function PageReload(e){
    window.location.reload();
    return false;
  }

  return (
    <div>
      <button onClick = {SetterOfArcadeMode}>Arcade</button>
      {Arcade? <ArcadeMode /> : null}
      <button onClick = {SetterOfEndless}>Endless</button>
      {Endless? <EndlessPath />: null}
      <button>How to</button>
      <button>Credits</button>
      <button onClick ={PageReload}>Main Menu</button>
    </div>
  );
}

export default MainMenu;
