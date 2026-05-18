import React, { useState } from "react";

function SiblingComponent() {
    const [text, setText] = useState('TEXT')
    return (
        <>
        <h3>{text}</h3>
        <div>
        <button onClick={() => setText('REDEV')}>Change</button>
        </div>
        </>
    )
}

export default SiblingComponent