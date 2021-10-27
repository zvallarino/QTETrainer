import MainMenu from "./MainMenu";
import React, { useState } from 'react';

function Start() {
  
  const [startButtonPress, setStartButton ] = useState(false)

  function setterOfStartButton(e){
    setStartButton(button=>!button)
  }

  function PageReload(e){
    window.location.reload();
    return false;
  }
  return (
    <div>
          <button onClick ={setterOfStartButton}>
          Start
          </button>
          {startButtonPress? <MainMenu />: null}
          <button onClick ={PageReload}>
          Main Menu
          </button>
    </div>
  );
}

export default Start;
