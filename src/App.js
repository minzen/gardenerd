import React, { useState, useContext, useEffect } from 'react'
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
import ListItems from './component/ListItems'
import PasswordForgotten from './component/PasswordForgotten'
import firebase from 'firebase'

const App = () => {
  const [gardenItems, setGardenItems] = useState([])
  const { handleSignup } = useContext(authContext)
  console.log(handleSignup)
  const { token } = useContext(authContext)
  console.log(token)
  const db = firebase.firestore()

  useEffect(() => {
    async function fetchData() {
      let items = []
      const gardenItemList = await db.collection('gardenitem').get()
      await gardenItemList.docs.map((doc) => {
        items.push(doc.data())
      })
      setGardenItems(items)
    }
    fetchData()
  }, [])

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
          <Route
            exact
            path="/listitems"
            render={(rProps) =>
              token === null ? (
                <SignIn />
              ) : (
                <ListItems gardenItems={gardenItems} />
              )
            }
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
