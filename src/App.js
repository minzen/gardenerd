import React, { useState, useContext } from 'react'
import { authContext } from './provider/AuthProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import GardenView from './component/GardenView'
import Header from './component/Header'
import User from './component/User'
import Info from './component/Info'
import SignIn from './component/Signin'
import SignUp from './component/Signup'
import Logout from './component/Logout'
import PasswordForgotten from './component/PasswordForgotten'

const App = () => {
  const sampleItems = [
    { name: 'Tomato', description: 'Tomato description' },
    { name: 'Cucumber', description: 'Tommy' }
  ]
  const [gardenItems, setGardenItems] = useState(sampleItems)
  const { handleSignup } = useContext(authContext)
  console.log(handleSignup)
  const { token } = useContext(authContext)
  console.log(token)

  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            exact
            path="/"
            render={(rProps) =>
              token === null ? (
                <SignIn />
              ) : (
                <GardenView
                  gardenItems={gardenItems}
                  setGardenItems={setGardenItems}
                />
              )
            }
          />
          <Route exact path="/info" component={Info} />
          <Route exact path="/user" component={User} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/resetpassword" component={PasswordForgotten} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
