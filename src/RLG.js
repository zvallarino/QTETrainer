function RLG({gamesInput, setGamesInput}) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]


  return (
    <div>
    {randomLetter}
    </div>
  );
}

export default RLG;