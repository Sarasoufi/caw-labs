import React, { useState } from "react";

function Exo4() {

  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [bgColor, setBgColor] = useState("");

  
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newDiv = {
      height,
      width,
      bgColor,
      id: Date.now(), 
    };

    
    setDivs([...divs, newDiv]);

    
    setHeight("");
    setWidth("");
    setBgColor("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add a Div</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>Height (px): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Width (px): </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Background Color: </label>
          <input
            type="text"
            placeholder="e.g., red or #00ff00"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Add Div
        </button>
      </form>

      <h3>Divs:</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {divs.map((div) => (
          <div
            key={div.id}
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.bgColor,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Exo4;
