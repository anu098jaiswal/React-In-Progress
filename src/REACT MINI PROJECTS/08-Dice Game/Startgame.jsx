import React from 'react'
import styled from 'styled-components';
//import dice1 from"dice1.png";
import dice1 from "./dice1.png";



const Startgame = ({toggle}) => {
  return (
    <Container>
      <img src={dice1}/>
      <div>
        <h1>Dice Game </h1>
        <Button onClick={toggle}> Play Now</Button>
      </div>
    </Container>
  );
}

export default Startgame;

const Container=styled.div`
 max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Button=styled.button`
background-color :black;
color : white;
padding :10px;
`;
