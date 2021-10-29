import React, {useEffect} from 'react'
import PlayerRanking from './PlayerRanking';
import styled from 'styled-components';  

function Leaderboard({leaderboard}) {
  let ArrayOfCats = leaderboard.filter((player) => player.category === "Alphabetic")
  let ArrayOfDogs = leaderboard.filter((player) => player.category === "Numeric")
  let ArrayOfBirds = leaderboard.filter((player) => player.category === "All")

  let sortedCats = ArrayOfCats.sort(function(a, b){return b.highscore-a.highscore});

  let sortedDogs = ArrayOfDogs.sort(function(a, b){return b.highscore-a.highscore});

  let sortedBirds = ArrayOfBirds.sort(function(a, b){return b.highscore-a.highscore});

  console.log(sortedCats)
  

  let catsLeaderBoard = sortedCats.map((player) => <PlayerRanking key = {player.id} player = {player} />)
  let DogsLeaderBoard  = sortedDogs.map((player) => <PlayerRanking key = {player.id} player = {player} />)
  let BirdsLeaderBoard = sortedBirds.map((player) => <PlayerRanking key = {player.id} player = {player} />)


  return (  
    <>
    <LeaderBoardStyle>
   <h1>
     LeaderBoard
   </h1>
   </LeaderBoardStyle>
  <Alltitles>
   <Titles>
   Alphabetic
   </Titles>
   <Titles>
   Numeric
     </Titles>
     <Titles>
   All
    </Titles>
    </Alltitles>

   <AllContainers>

   <CatsContainer>
   {catsLeaderBoard}
   </CatsContainer>
   <p></p>
  
   <DogsContainer>
   {DogsLeaderBoard}
   </DogsContainer>
   <p></p>
   <BirdsContainer>
   {BirdsLeaderBoard}
   </BirdsContainer>
  <p></p>
   </AllContainers>
   </>
 );
}

const LeaderBoardStyle = styled.div `
font-family: 'Games', sans-serif;
text-align: center;
color:   #FF6766;
font-size: 40px;
text-shadow: 8px 8px black;
`
const Alltitles = styled.div`
display:flex;
flex-direction:row;

`

const Titles = styled.div`
height:20px;
width:30%;
flex:1;
font-family: 'Games', sans-serif;
font-weight:bold;
color: #FF6766;
font-size: 40px;
text-shadow: 8px 8px black;
margin-right:90px;

`
const CatsContainer = styled.div `
 background-color:  #CCF2FF;
font-family: 'Games', sans-serif;
float: left;
margin-left: 100px;
margin-top: 80px;
margin-right: 300px;
font-size: 25px;
height: 750px;
width: 300px;
border: 8px black;
border-radius: 25px;
padding: 20px;
box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
 transform: scale(1);
 animation: pulse 2s infinite;
@keyframes pulse {
 0% {
   transform: scale(0.95);
   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
 }
 70% {
   transform: scale(1);
   box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
 }
 100% {
   transform: scale(0.95);
   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
`
const DogsContainer = styled.div`
background-color:   #CCF2FF;
font-family: 'Games', sans-serif;
font-size: 25px;
margin-right: 300px;
margin-top: 80px;
float: left;
height: 750px;
width: 300px;
border: 8px #B3CCFF;
border-radius: 25px;
padding: 20px;
box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
 transform: scale(1);
 animation: pulse 2s infinite;
@keyframes pulse {
 0% {
   transform: scale(0.95);
   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
 }
 70% {
   transform: scale(1);
   box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
 }
 100% {
   transform: scale(0.95);
   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
`
const BirdsContainer = styled.div `
background-color:  #CCF2FF;
font-family: 'Games', sans-serif;
float: right;
margin-top: 80px;
margin-right: 100px;
font-size: 25px;
height: 750px;
width: 300px;
border: 8px black;
border-radius: 25px;
padding: 20px;
box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
 transform: scale(1);
 animation: pulse 2s infinite;
@keyframes pulse {
 0% {
   transform: scale(0.95);
   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
 }
 70% {
   transform: scale(1);
   box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
 }
 100% {
   transform: scale(0.95);
   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
`
const AllContainers = styled.div `
display:flex;
height: 97%;
`
export default Leaderboard;