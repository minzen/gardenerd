import React, { useState } from 'react'
import { authMethods } from '../firebase/authMethods'

export const authContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  const handleSignup = () => {
    // middle man between firebase and signup
    console.log('handleSignup')
    // calling signup from firebase server
    let ret = authMethods.signup(
      inputs.email,
      inputs.password,
      setErrors,
      setToken
    )

    console.log(errors, token)
    return ret
  }

  const handleSignin = () => {
    console.log('handleSignin!!!!')
    authMethods.signin(
      inputs.email,
      inputs.password,
      setErrors,
      setToken,
      setUser
    )
    console.log(errors, token)
  }

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken)
  }

  return (
    <authContext.Provider
      value={{
        token,
        handleSignup,
        handleSignin,
        handleSignout,
        inputs,
        setInputs,
        errors
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
