import React, { useState, useEffect, useRef } from "react";
// import  from "react";
import "./Hooks.css";

function Hooks() {
  const inputRef = useRef(null);
  const handleClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Hooks</h1>
      <div className="main">
        <input type="text" placeholder="type..." ref={inputRef} />
        <button onClick={handleClick}>click me</button>
        {/* <h1>{inputRef.current.value}</h1> */}
      </div>
    </div>
  );
}

export default Hooks;
