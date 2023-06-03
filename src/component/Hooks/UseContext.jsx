import React, { createContext, useState } from 'react'
import Login from './useContextComponent/Login'
import User from './useContextComponent/User'

export const AppContext = createContext(null)
function UseContext() {
    const [user, setUser] = useState("")
    return (
        <>
            <div>UseContext</div>
            <AppContext.Provider value={{ user, setUser }}>
                <Login />
                <User />
            </AppContext.Provider>
        </>
    )
}

export default UseContext

// createContext , useContext , wrap with variable create with createContext.provider