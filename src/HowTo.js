
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
  font-size:100px;
}
p{
  font-size:50px;
}
height:97%
`
