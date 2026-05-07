import data from "./data";
import { useState } from "react";
export default function Accordian() {
  const [selected, setSelected] = useState();
  const [enableMulti, setEnableMulti] = useState(false);
  const[multiple,setMultiple]=useState([]);

  function handleSelection(getID) {
    console.log(getID);
    setSelected(getID === selected ? null : getID);
  }
  function handleMulti(getID){
    let cpy=[...multiple];
    const index=cpy.indexOf(getID);
    console.log(index);
if(index=== -1){
  cpy.push(getID)
}
else cpy.splice(index,1);
setMultiple(cpy);

}
  return (
    <div>
      <button onClick={() => setEnableMulti(!enableMulti)}>
        Enable Multi Selection
      </button>
      {data.map((dataItem) => (
        <div
          onClick={
            enableMulti
              ? () => handleMulti(dataItem.id)
              : () => handleSelection(dataItem.id)
          }
        >
          {dataItem.questions}
          <span> +</span>
          <br />
          {selected === dataItem.id ? dataItem.answer : null}
        </div>
      ))}
    </div>
  );
}
