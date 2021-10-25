function RCG() {
  let characterList = "`-=[];',./123456789abcdefghijklmnopqrstuvwxyz"
  return (
    <div>
      {characterList[Math.floor(Math.random() * characterList.length)]}
      
    </div>
  );
}
export default RCG;