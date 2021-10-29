import React from 'react'

function PlayerRanking(player) {
  return (
    <div>
    {player.player.name} -
    {player.player.highscore}
    </div>
  );
}

export default PlayerRanking;