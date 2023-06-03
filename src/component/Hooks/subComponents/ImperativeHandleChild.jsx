import React, { useState, forwardRef, useImperativeHandle } from 'react'

const ImperativeHandleChild = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    }))

    return (
        <>
            <div>imperativeHandleChild</div>
            <button
                onClick={() => {
                    setToggle(!toggle)
                }}
            >Button form child</button>
            <h1>{toggle && "Am toggling bitch"}</h1>
        </>
    )
})

export default ImperativeHandleChild

//highlight keys are (forwardRef,useImperativeHandle)