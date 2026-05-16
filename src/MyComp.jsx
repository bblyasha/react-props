import React from "react";

function MyComp ({
    name,
    age,
    isActive,
    user,
    sayHello,
    hobbies
}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
            <p>Email: {user.email}</p>
            <button onClick={sayHello}>Hello!</button>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyComp