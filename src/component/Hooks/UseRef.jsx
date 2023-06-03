import React, { useRef } from 'react'
import "./Hooks.css";


function UseRef() {
    const inputRef = useRef(null)

    const handleClick = function(){
        inputRef.current.value = ''
        inputRef.current.focus()
    }
    return (
        <div>
            <h1>useRef</h1>
            <div className="main">
                <input type="text" placeholder="type..." ref={inputRef} />
                <button onClick={handleClick}>click me</button>
                {/* <h1>{inputRef.current.value}</h1> */}
            </div>
        </div>
    )
}

export default UseRef