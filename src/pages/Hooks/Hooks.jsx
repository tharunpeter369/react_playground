import React, { useState, useEffect, useRef } from "react";
import UseRef from "../../component/Hooks/UseRef";
import UseReducer from "../../component/Hooks/UseReducer";
import UseLayout from "../../component/Hooks/UseLayout";
import UseImperativeHandle from "../../component/Hooks/UseImperativeHandle";
import UseContext from "../../component/Hooks/UseContext";
import UseMemo from "../../component/Hooks/UseMemo";
import UseCallBack from "../../component/Hooks/UseCallBack";
// import  from "react";

function Hooks() {

  const [selectedItem, setSelectedItem] = useState(null)
  const handleClick = function (params) {
    setSelectedItem(params)
  }

  switch (selectedItem) {
    case "useRef":
      return <UseRef />
    case "useReducer":
      return <UseReducer />
    case "useLayout":
      return <UseLayout />
    case "useImperativeHandle":
      return <UseImperativeHandle />
    case "useContext":
      return <UseContext />
    case "useMemo":
      return <UseMemo />
    case "useMemo":
      return <UseMemo />
    case "useCallBack":
      return <UseCallBack />
  }

  return (
    <div>
      <h1>Hooks</h1>
      <ol>
        <li>
          <a href="#" onClick={() => handleClick("useRef")}>userRef</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick("useReducer")}>useReducer</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick("useLayout")}>useLayout</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick("useImperativeHandle")}>useImperativeHandle</a>
          {/* <h1 onClick={() => handleClick("useImperativeHandle")}>useImperativeHandle</h1> */}
        </li>
        <li>
          <a href="#" onClick={() => handleClick("useContext")}>useContext</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick("useMemo")}>useMemo</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick("useCallBack")}>useCallBack</a>
        </li>
      </ol>
    </div>
  );
}

export default Hooks;
