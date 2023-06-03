import React, { useEffect, useLayoutEffect, useState } from 'react'

function UseLayout() {

    const [name, setName] = useState(null)

    useEffect(() => {
        console.log("hello world");
        setName("Samal Varghese")
    },[]);


    useLayoutEffect(() => {
        console.log("favourite song");
        setName("Tharun Peter")
    },[]);


    const handleClick = (e) => {
        console.log(e);
    }

    const handleChange = (e) => {
        console.log(e, "🥰");
        console.log(e.target.value, "🥰");
    }

    return (
        <>
            <div>UseLayout</div>
            <button onClick={() => handleClick("ltlharun")}>aashmi tharun</button>
            <input onChange={handleChange} type="text" />
            <h1>{name}</h1>
        </>
    )
}

export default UseLayout


//use layout effect called earlier stage of pagerendering

//use effect called later stage of pagerendering