import React, { useState } from 'react'

function Randomcolorgenerator() {
  const[typeOfColor,setTypeOfColor]=useState('hex');
  const[color,setColor]=useState('#000000');
  
  function handleHexColor(){
    setTypeOfColor('hex');
    let hexColor="#";
    const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    for(let  i=0;i<6;i++){
      const randomIndex = Math.floor(Math.random() * 16)
     hexColor += hex[randomIndex];

    }
    setColor(hexColor);
  }
  function handleRGBColor(){
    setTypeOfColor('rgb');
   const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  setColor(rgbColor);

  }


  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={hadleHexColor}>Create Hex color</button>
      <button onClick={handleRGBColor}>Create RGB color</button>
      <button onClick={typeOfColor=="hex"?handleHexColor:handleRGBColor} >Genrate random color</button>
    </div>
  )
}

export default Randomcolorgenerator



