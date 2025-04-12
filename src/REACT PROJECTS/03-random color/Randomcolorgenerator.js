import { useState,useEffect } from "react";

export function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");
  //generates random index between 0-15
  function randomGenerator(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomGenerator(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  
  }
  function handleRandomRgbColor() {
    const r = randomGenerator(256);
    const g = randomGenerator(256);
    const b = randomGenerator(256);
    console.log(`rgb(${r},${g},${b})`);
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (colorType == "hex") handleRandomHexColor();
    return () => {
      handleRandomRgbColor();
    };
  }, [colorType]);

  return (
    <div style={{ height: "100vh", width: "200vh", background: color }}>
      <button onClick={() => setColorType("hex")}> Create HEX color</button>
      <button onClick={() => setColorType("rgb")}> Create RGB color </button>
      <button
        onClick={
          colorType == "hex" ? handleRandomHexColor : handleRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div>
        <h1>{colorType == "rgb" ? "RGB Color" : "HEX Color"}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
