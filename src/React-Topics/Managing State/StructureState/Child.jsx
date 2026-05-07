import React from 'react'
import { useState } from 'react'
function Child({color}) {
    //const[rang,setRang]=useState({color})
    const rang= color;

  return (
    <div>
      {/* <h1 style={{rang}} >Hiiiii</h1> */}
      {/* <h1 style={{ color }}>Hiiiii</h1> */}
      <h1 style={{ color :rang}}>Hiiiii</h1>
    </div>
  );
}

export default Child
