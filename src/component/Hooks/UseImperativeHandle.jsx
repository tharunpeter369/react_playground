import React, { useRef } from 'react'
import ImperativeHandleChild from './subComponents/ImperativeHandleChild'

function UseImperativeHandle() {
    const buttonRef = useRef(null)
    return (
        <>
            <div>UseImperativeHandle</div>
            <button
                onClick={() => {
                    buttonRef.current.alterToggle()
                }}
            >Butoon form parent</button>
            <ImperativeHandleChild ref={buttonRef} />
        </>
    )
}

export default UseImperativeHandle