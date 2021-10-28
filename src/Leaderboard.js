import React, {useEffect} from 'react'
import PlayerRanking from './PlayerRanking';

function Leaderboard({leaderboard}) {
  let ArrayOfCats = leaderboard.filter((player) => player.category === "cat")
  let ArrayOfDogs = leaderboard.filter((player) => player.category === "dog")
  let ArrayOfBirds = leaderboard.filter((player) => player.category === "bird")

  let sortedCats = ArrayOfCats.sort(function(a, b){return b.highscore-a.highscore});

  let sortedDogs = ArrayOfDogs.sort(function(a, b){return b.highscore-a.highscore});

  let sortedBirds = ArrayOfBirds.sort(function(a, b){return b.highscore-a.highscore});

  console.log(sortedCats)
  

  let catsLeaderBoard = sortedCats.map((player) => <PlayerRanking key = {player.id} player = {player} />)
  let DogsLeaderBoard  = sortedDogs.map((player) => <PlayerRanking key = {player.id} player = {player} />)
  let BirdsLeaderBoard = sortedBirds.map((player) => <PlayerRanking key = {player.id} player = {player} />)


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