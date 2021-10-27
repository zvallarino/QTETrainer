import React, {useEffect} from 'react'
import PlayerRanking from './PlayerRanking';

function Leaderboard({leaderboard}) {





  let playerList = leaderboard.map((player) => <PlayerRanking key = {player.id} player = {player} />)


  return (  
    <div>
    
    {playerList}
    </div>
  );
}

export default Leaderboard;