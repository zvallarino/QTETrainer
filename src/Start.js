import MainMenu from "./MainMenu";
import React, { useState } from 'react';

function Start() {
  
  const [startButtonPress, setStartButton ] = useState(false)

  function setterOfStartButton(e){
    setStartButton(button=>!button)
  }

  return (
      <MainMenu />
  )
}

export default Start;
