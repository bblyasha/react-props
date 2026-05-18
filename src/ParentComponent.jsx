import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

function ParentComponent() {
    const [count, setCount] = useState(0);

    const name = "Natalya"

    return (
        <>
        <h2>Count: {count}</h2>
        <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
        <div>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <div>
        <div>
        <button onClick={() => setCount(Math.floor(Math.random() * 9) + 1)}>Random</button>
        </div>
        <button onClick={() => setCount(count > 0 ? count -1 : count)}>Decrease</button>
        </div>

        <ChildComponent name={name} count={count} />
        <SiblingComponent />
        </>
    )
}

export default ParentComponent