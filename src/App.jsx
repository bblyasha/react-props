import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ProfileComponent from "./ProfileComponent";
import TaskComponent from "./TaskComponent";
import CartComponent from "./CartComponent";

function App() {
  return (
    <>
    <ProfileComponent />
    <TaskComponent />
    <CartComponent />
    </>
  )
}

export default App;
