import React from 'react';
import { useState } from 'react';
//Avoid duplication in state
function Menu() {

  const[select,setSelect]= useState();
    const items=[{ name:"lays " ,id:0} , 
        { name :"kurkure" ,id:1 } ,
         { name :"dairymaik" ,id:2}];

        //  function handleSelect(){
        //   setSelect();
        //  }  

  return (
    <div>
      <p>Whats Your travel snack</p>
      {items.map((item) => (
        <div>
        <p> {item.name} </p>
        <button onClick ={( )=>setSelect(item.name)} > Chosse</button>
        </div>
      ))
      }
      <p> You Chossed {select}</p>

    </div>
  );
}

export default Menu
