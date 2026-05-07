// Group related state


import React from 'react'
import { useState } from 'react';
function MovingDot() {
    // const [x,setX]=useState(0);
    // const [y, setY] = useState(0);
  const[position,setPosition]=useState({x:120,y:120});


    function handleMove(e){
        
       //setPosition({x:e.clientX, y:e.clientY })
       setPosition({...position, y:20})

    }

  return (
    <div
      onPointerMove={handleMove}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
          left: -10,
          top: -10,
          width: 20,
          height: 20,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      />
    </div>
  );
}

export default MovingDot
