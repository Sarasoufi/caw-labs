import { useState } from "react";

function Exo1() {
 
  const [clicked, setClicked] = useState(false);

 
  const [toggle, setToggle] = useState(false);


  const [msg, setMsg] = useState("");

  
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
    
      <h2>Exercice 1[1] : ClickMe</h2>
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}
      <hr />

   
      <h2>Exercice 1[2] : Toggle Button</h2>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>{toggle ? "Clicked" : "Not Clicked"}</p>
      <hr />

      
      <h2>Exercice 1[3] : Buttons</h2>
      <button onClick={() => setMsg("Button 1 was clicked")}>Button 1</button>
      <button onClick={() => setMsg("Button 2 was clicked")}>Button 2</button>
      <button onClick={() => setMsg("Button 3 was clicked")}>Button 3</button>
      <p>{msg}</p>
      <hr />

      
      <h2>Exercice 1[4] : Counter</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>

    </div>
  );
}

export default Exo1;
