import React, {useEffect} from 'react'
import PlayerRanking from './PlayerRanking';

function Leaderboard({leaderboard}) {
  let ArrayOfCats = leaderboard.filter((player) => player.category === "cat")
  let ArrayOfDogs = leaderboard.filter((player) => player.category === "dog")
  let ArrayOfBirds = leaderboard.filter((player) => player.category === "bird")



  let catsLeaderBoard = ArrayOfCats.map((player) => <PlayerRanking key = {player.id} player = {player} />)
  let DogsLeaderBoard  = ArrayOfDogs.map((player) => <PlayerRanking key = {player.id} player = {player} />)
  let BirdsLeaderBoard = ArrayOfBirds.map((player) => <PlayerRanking key = {player.id} player = {player} />)


  return (  
    <div>
    {catsLeaderBoard}
    <p></p>
    {DogsLeaderBoard}
    <p></p>
    {BirdsLeaderBoard}
    </div>
  );
}

export default Leaderboard;