import React from 'react'
import Info from './components/Info'
import User from './components/User'
import GardenView from './components/GardenView'
import Header from './components/Header'
import { makeStyles } from '@material-ui/core/styles'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const useStyles = makeStyles({
  menuBar: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: '#FFFAFA'
  },
  menuItem: {
    color: '#2F4F4F',
    padding: 5,
    textDecoration: 'none'
  }
})

const App = () => {
  const classes = useStyles()

  return (
    <Router>
      <div>
        <Header />
        <nav className={classes.menuBar}>
              <Link to='/' className={classes.menuItem}>Home</Link>
              <Link to='/info' className={classes.menuItem}>Info</Link>
              <Link to='/user' className={classes.menuItem}>User Profile</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/info'>
            <Info />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
          <Route path='/'>
            <GardenView />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App
