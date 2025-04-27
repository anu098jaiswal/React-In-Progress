//input -only numbers
import "./style.css"
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

const OTP_DIGIT=5;//no of digits in input

function OtpInput() {

    const[inputArr,setInputArr]=useState(new Array(OTP_DIGIT).fill(""));
    const refArr=useRef([]);
    useEffect(()=>{
        refArr.current[0]?.focus();
    },[]);

function handleOnChange(value,index){
    //only digits
    if(isNaN(value)) return;
    //creeate new arr
   const newArr=[...inputArr];
   const newvalue=value.trim();
   //only 1 digit 
   newArr[index]=newvalue.slice(-1);
    setInputArr(newArr);
     newvalue && refArr.current[index + 1]?.focus();
}
function handleOnKeyDown(e,index){
  // if(e.key=="Backspace") refArr.current[index - 1]?.focus();
  // **first focus happend and then backspace, we need to first chjeck if backspace worked that means
  // there is no value in the box and then focus prev box

 // if (!e.target.value && e.key == "Backspace")
    //It checks if the input box is empty and then moves focus to the previous box.
    //refArr.current[index - 1]?.focus();

  //*when we backspace the last digit, need to press backspace for 2 times to focus prev box=>using 
  //settimeout to fix it

  if (e.key === "Backspace") {
    setTimeout(() => {
      if (!e.target.value) {
        refArr.current[index - 1]?.focus();
      }
    }, 0);
}}

  return (
    <div className="App">
      <h1>Validate Input</h1>
     {inputArr.map((input, index) => {
    return (
      <input
        className="otp-input"
        key={index}
        type="text"
        value={inputArr[index]}
        onChange={(e) => handleOnChange(e.target.value, index)}
        ref={(input)=>(refArr.current[index]=input)}
        onKeyDown={(e)=>handleOnKeyDown(e,index)}
      />
    );
  })}
    </div>
  );
}

export default OtpInput

