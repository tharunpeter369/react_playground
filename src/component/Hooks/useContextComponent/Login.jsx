import React, { useContext, useRef } from 'react'
import { AppContext } from '../UseContext'

function Login() {
  const { setUser } = useContext(AppContext)
  const cleraRef = useRef(null)
  return (
    <>
      <div>Login</div>
      <input className='myName' type="text" ref={cleraRef} />
      <button onClick={() => {
        setUser(document.getElementsByClassName('myName')[0].value);
      }}>set input name</button>
      <button onClick={() => {
        cleraRef.current.value = ""
      }}>clear</button>
      <button onClick={() => {
        cleraRef.current.focus()
      }}>focus</button>
    </>

  )
}

export default Login