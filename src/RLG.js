function RLG() {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  return (
    <div>
      {alphabet[Math.floor(Math.random() * alphabet.length)]}
    </div>
  );
}

export default RLG;