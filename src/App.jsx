import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

function App() {
  return (
    <>
    <ParentComponent />
    </>
  )
}

export default App;
