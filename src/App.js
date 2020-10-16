import React, { useState, useContext } from 'react'
import { authContext } from './provider/AuthProvider'
import { Container, Grid } from '@material-ui/core'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import GardenView from './component/GardenView'
import Header from './component/Header'
import User from './component/User'
import Info from './component/Info'
import SignIn from './component/Signin'
import SignUp from './component/Signup'
import MenuItemsLoggedIn from './component/MenuItemsLoggedIn'
import MenuItemsNotLoggedIn from './component/MenuItemsNotLoggedIn'
import Logout from './component/Logout'

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

  const menuItems = () => {
    if (token) {
      return <MenuItemsLoggedIn />
    }

    return <MenuItemsNotLoggedIn />
  }

  return (
    <Router>
      <div>
        <Header />
        {menuItems()}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            exact
            path="/"
            render={(rProps) => (token === null ? <SignIn /> : <Info />)}
          />
          {/* <GardenView
              gardenItems={gardenItems}
              setGardenItems={setGardenItems}
            />
          </Route> */}
          <Route exact path="/info" component={Info} />
          <Route exact path="/user" component={User} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
