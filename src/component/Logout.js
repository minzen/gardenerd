import React, { Component, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Logout = (props) => {
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    props.history.push('/login')
  }

  return <Button onClick={logout()}>Logout</Button>
}
export default Logout
