import React from 'react'
import Info from './components/Info'
import User from './components/User'
import GardenView from './components/GardenView'
import Header from './components/Header'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const useStyles = makeStyles({
  menuBar: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: '#F5F5F5',
    borderStyle: 'solid',
    borderColor: 'lightGrey',
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  menuItem: {
    color: '#2F4F4F',
    padding: 12,
    textDecoration: 'none'
  }
})

const App = () => {
  const classes = useStyles()

  return (
    <Router>
      <div>
        <Header />
        <Container maxWidth='xl'>
        <nav className={classes.menuBar}>
              <Link to='/' className={classes.menuItem}>Home</Link>
              <Link to='/info' className={classes.menuItem}>Info</Link>
              <Link to='/user' className={classes.menuItem}>User Profile</Link>
        </nav>
        </Container>

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
