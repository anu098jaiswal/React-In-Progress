import React, { useState } from 'react'
//import styled from 'styled-components';
import Startgame from './Startgame';
import Gameplay from './Gameplay';



function Dicegame() {
    const[isGameStarted,setIsGameStarted] = useState(false);

    const toggleGamePlay= () =>{
        setIsGameStarted(prev=> ! prev)
    };
  return (
    <>
      {isGameStarted ? <Gameplay/>: <Startgame toggle ={toggleGamePlay}/>}
    </>
  );
}

export default Dicegame;
