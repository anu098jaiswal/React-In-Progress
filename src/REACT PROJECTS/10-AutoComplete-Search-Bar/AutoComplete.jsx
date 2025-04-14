import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
//1.added input box
//2.called api
//3.logic for fecthing data
//4.showed result added css

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input );
   
    const json = await data.json();
    setResults(json?.recipes);
  };
  //whenevr input data changes api is called
  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div className="Start">
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input
          type="text"
          className="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="results-container">
             {results.map((r) => (
          <span className="results" key={r.id}> {r.name}</span>
        ))}
        </div>
       
      </div>
    </div>
  );
};

export default AutoComplete;
