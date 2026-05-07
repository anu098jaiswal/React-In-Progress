import React, { useState } from "react";

function Accordian() {
  const infos= [
    {
      title: "About",
      content:
        "With a population of about 2 million, Almaty is Kazakhstan's largest city.",
    },
    {
      title: "Etymology",
      content: "he name comes from  the region surrounding",
    },
  ];
const[show,setShow]= useState("");

  return (
    <div>
      <h1> Almaty, Kazakhstan </h1>
      {infos.map((info) => (
        <>
          <h3> {info.title}</h3>
          <button onClick={() => setShow(<p>{info.content}</p>)}> Show </button>
          {show}
        </>
      ))}
    </div>
  );
}

export default Accordian;
