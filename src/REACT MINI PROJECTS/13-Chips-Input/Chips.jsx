import React from "react";
import { useState } from "react";
import "./style.css";
function Chips() {
  const [input, setInput] = useState("");
  const [chips, setchips] = useState([]);
  
  const handleOnkeyDown = (e) => {
    //trim removed all eading trailing spaces
    if (e.key === "Enter" && input.trim()) {
      //logic to add chip(shld be in n array (useState) and then directly map it to display in ui)
      setchips((prev) => [...prev, input]);
      setInput("");
    }
  };
  const handleDeleteChip=(index)=>{
    const copyChips=[...chips];
    copyChips.splice(index,1);
    setchips(copyChips);
  }

  return (
    <div className="container">
      <h1>Chips Input</h1>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleOnkeyDown}
      />
      <div>
        {chips.map((chip, index) => (
          <div className="chips" key={index}>
            {chip}
            <button style ={{color: "red"}} onClick={()=>handleDeleteChip(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chips;
