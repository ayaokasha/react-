import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";

export default function Home() {
  //hook
  //useState is a hook that allows us to add state to functional components.
  const [count, setCount] = useState(0);

  const [userName, setUserName] = useState("Ahmed");
  const [darkStyle, setdarkStyle] = useState("bg-dark text-light p-2");

  function changeCount() {
    setCount(Math.floor(Math.random() * 100));
  }

  return (
    <>
      <Navbar />
      <h2 className={darkStyle}>{userName}</h2>

      <h2 className={count > 50 ? "bg-success" : "bg-danger"}>
        count : {count}
      </h2>

      <button onClick={changeCount} className="btn btn-success">
        change count
      </button>

      <h2 className="fas fa-home"> Home Component</h2>
    </>
  );
}
