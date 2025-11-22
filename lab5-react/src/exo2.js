import React, { useState } from "react";

const DisplayTab = ({ table }) => {
  const [tab, setTab] = useState(table);

  const handleClick = (indexToRemove) => {
    setTab(tab.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index} onClick={() => handleClick(index)} style={{cursor: "pointer"}}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
};

const Exo2 = () => {
  const table1 = ["hello", "world", "from", "react"];
  const table2 = ["apple", "banana", "orange", "grape"];

  return (
    <div>
      <h2>Table 1</h2>
      <DisplayTab table={table1} />
      <h2>Table 2</h2>
      <DisplayTab table={table2} />
    </div>
  );
};


export default Exo2;
