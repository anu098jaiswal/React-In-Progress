//Don’t mirror props in state
//dont use props in state
import { useState } from 'react';
import React from 'react'
import Child from './Child';
function Parent() {
  const[color,setColor]=useState("blue");
  return (
    <div>
      <button onClick={()=> setColor("red")}>Change Color</button>
      <Child color={color}/>
      
    </div>
  )
}
 
export default Parent
