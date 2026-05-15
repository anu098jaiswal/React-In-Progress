import React, { createContext, useState } from 'react'
import ChildA from './ChildA';
import './index.css';

//1. Create Context
//const Context = createContext();
//2. Create Provider and wrap all child inside provider
//3.  Pass Value to Provider
//4.  consume in consumer (Use Context in child component)


  export const ThemeContext=createContext();
  export  const UserContext =createContext();
  
const Parent = () => {
    const[user,setUser]=useState({name:"Anushree"});
    const[theme,setTheme]=useState("light");
  return (
    <UserContext.Provider value={user} >
    <ThemeContext.Provider value={{theme,setTheme}} >
        <div id ='container' style={{backgroundColor:theme==='light'? 'beige':'black'}}>
          <ChildA/>
        </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
   
  )
}

export default Parent
