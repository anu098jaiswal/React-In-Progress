import React from 'react'
import { useState } from 'react';
 //const value = (prev) => prev + 1;
  
 function abc(prev){
  return prev+1;
 }

function Counter() {
    const[count,setCount]=useState(0);
    // function handleOnchange(){
    //     setCount(count+1);
    // }
    const handleOnchange=()=>{
      setCount(abc);
       setCount(abc);
    }


  return (
    <div>
      <h1>Counter :{count}
      </h1>
      <button onClick={handleOnchange}>Click</button>
    </div>
  )
}

export default Counter;
