//lifting state up
//1.normal accordian
//it renders two seperate panel  each panel has isActive state to detrmine is it is visible or not
//pressing on one panel doesnt affct each other independent
import  { useState } from "react";

//passing down the info through props


function Panel({title,children,isActive,onShow}){
 // const[isActive,setIsActive] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </>
  );
 }
 
 

 export default function Accordian() {
  const[activeIndex,setActiveIndex]=useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel isActive={activeIndex===0} onShow={()=>setActiveIndex(0)} title="About">
        {
          "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
        }
      </Panel>

      <Panel  isActive={activeIndex===1} onShow={()=>setActiveIndex(1)} title="Etymology">
        {"The name comes from Kazakh al 'white' and mat 'city'."}
      </Panel>
    </>
  );

}
