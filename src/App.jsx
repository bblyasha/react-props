import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MyComp from "./MyComp";

function App() {
  return (
    <>
    <MyComp
      name="Natalya"
      age={23}
      isActive={true}
      user={{ email: "natalya@gmail.com" }}
      sayHello={() => alert("Hello")}
      hobbies={["React", "JS", "Redux"]}
    />
    </>
  )
}

export default App;
