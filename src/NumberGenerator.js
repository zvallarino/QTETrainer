function NumberGenerator() {
  let maxNumber = 10;
  let randomNumber = Math.floor((Math.random() * maxNumber));
  return (
    
    <div>
      {randomNumber}
    </div>
  );
}

export default NumberGenerator;