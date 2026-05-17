import React, { useState } from "react";

function MyComp() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(true);

  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [color, setColor] = useState("green");
  const handleClick = () => {
    setColor(color === "green" ? "yellow" : "green");
  };
  const style = {
    backgroundColor: color,
  };

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
      <div>
        {state && <h2>TEXT</h2>}
        <button onClick={() => setState((state) => !state)}>Click</button>
      </div>

      <div>
        <label>
          Enter your name:{" "}
          <input type="text" value={name} onChange={handleChange} />{" "}
        </label>
        <p>Hello, {name}!</p>
      </div>

      <div>
        <button style={style} onClick={handleClick}>
          Click to change color
        </button>
      </div>
    </>
  );
}

export default MyComp;
