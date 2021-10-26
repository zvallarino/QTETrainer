import React, {useEffect} from 'react'
import PlayerRanking from './PlayerRanking';

function Leaderboard({leaderboard}) {
  let playerList = leaderboard.map((player) => <PlayerRanking player = {player} />)

  
  // useEffect(() =>
  // fetch("http://localhost:3000/leaderboard")
  // .then((response) => response.json())
  // .then((allData) => allData.map((player) => <PlayerRanking player = {player} />)), []
  // )  
  

  return (  
    <div>
    Hello
    {playerList}
    </div>
  );
}

export default Leaderboard;