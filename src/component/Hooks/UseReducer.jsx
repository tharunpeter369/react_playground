import React, { useReducer } from 'react'

function UseReducer() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'show':
                return ({ name: !state.name, age: state.age })
            case 'ageIncrement':
                return ({ name: !state.name, age: state.age + 1 })
            default:
                return state
        }
    }

    const [myDetail, dispatch] = useReducer(reducer, { name: true, age: 0 })

    const showTextfn = function () {
        dispatch({ type: 'show' })
    }

    const incrementAge = function () {
        dispatch({ type: 'ageIncrement' })
    }

    return (
        <>
            <div>useReducer</div>
            <h1>name : {myDetail.name && "tharun"}</h1>
            <h2>Age : {myDetail.age}</h2>
            <button onClick={showTextfn}>show text</button>
            <button onClick={incrementAge}>increment age</button>
        </>
    )
}

export default UseReducer