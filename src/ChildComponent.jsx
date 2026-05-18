import React from "react";

function ChildComponent({name, count}) {
    
    return (
        <>
        <h3>Hello, {name}! Current count is {count}</h3>
        </>
    )
}

export default ChildComponent