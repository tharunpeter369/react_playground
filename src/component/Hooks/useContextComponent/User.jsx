import React, { useContext } from 'react'
import { AppContext } from '../UseContext'

function User() {
    const { user, setUser } = useContext(AppContext)
    return (
        <>
            <div><h1>User:{user}</h1></div>
            <button onClick={() => {
                setUser("tharun")
            }}>set tharun form user</button>
        </>
    )
}

export default User