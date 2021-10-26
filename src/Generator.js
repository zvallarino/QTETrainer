import NumberGenerator from "./NumberGenerator"
import RLG from "./RLG"
import RCG from "./RCG";
import React from "react"


function Generator({gamesInput, setGamesInput}) {
  return (
    <div>
        <RLG gamesInput = {gamesInput} setGamesInput = {setGamesInput} />
    </div>
  );
}

export default Generator;