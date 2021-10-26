import React from 'react'

function PlayerRanking(player) {
 console.log (player.player.name)
  return (
    <div>
     
     {player.player.name}
     {player.player.highscore}

    </div>
  );
}

export default PlayerRanking;