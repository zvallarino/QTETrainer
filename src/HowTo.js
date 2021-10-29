
import styled from 'styled-components';  

function HowTo() {
  return (
    <HowToZ>
     <h1>
       How To Play 
     </h1>
      <p>
        LOL who reads the instructions 
      </p>
      <p>
        Instructions are for the weak
      </p>
      <p>
        You are strong 
      </p>
    </HowToZ>
  );
}

export default HowTo;

const HowToZ = styled.div`
display:flex;
flex-direction:column;
h1{
  font-family: 'Games', sans-serif;
  font-size:100px;
  font-weight:bold;
  color:   #FF6766;
  text-shadow: 8px 8px black;
}
p{
  font-family: 'Games', sans-serif;
  font-size:50px;
  font-weight:bold;
  color: #FF6766;
  text-shadow: 8px 8px black;
}
height:97%
`
