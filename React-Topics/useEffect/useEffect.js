import { useEffect } from "react";
import { useState } from "react";


//1.runs on every render
 export function Effect() {
    const[color,setColor]=useState(0)
    const[count,setCount]=useState(0);
  useEffect(() => {
    setCount(count+1);
    console.log("count",count)
  });

//2.runs only on first render
useEffect(() => {
    alert("Welcome to my page2");
  },[]);
 
 //3.run only when certain values change
useEffect(() => {
    alert("I m running bcoz count was changed");
    setColor(color+1)
  },[count]);

  return(
    <div>
        {color
 }
    </div>
  )}
  