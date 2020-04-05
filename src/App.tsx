import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import GardenView from './frontend/components/GardenView'
import Header from './frontend/components/Header'
import User from './frontend/components/User'
import Info from './frontend/components/Info'
import SignIn from './frontend/components/Signin'
import SignUp from './frontend/components/Signup'
import { FirebaseContext } from './frontend/components/Firebase'

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
    borderRightWidth: 0,
  },
  menuItemWithPadding: {
    color: '#2F4F4F',
    paddingLeft: 10,
    textDecoration: 'none',
  },
  menuItem: {
    color: '#2F4F4F',
    textDecoration: 'none',
  },
  menuItemStatus: {
    marginLeft: 10,
    textDecoration: 'underline',
    color: '#2F4F4F',
  },
})

const App = () => {
  const sampleItems = [
    { name: 'Tomato', description: 'Tomato description' },
    { name: 'Cucumber', description: 'Tommy' },
  ]
  const classes = useStyles()
  const [gardenItems, setGardenItems] = useState(sampleItems)

  return (
    <Router>
      <div>
        <Header />
        <Container maxWidth='xl'>
          <nav className={classes.menuBar}>
            <Grid container direction='row' alignItems='center'>
              <Grid item className={classes.menuItemWithPadding}>
                <HomeOutlinedIcon />
              </Grid>
              <Grid item>
                <Link to='/' className={classes.menuItem}>
                  Home
                </Link>
              </Grid>
              <Grid item className={classes.menuItemWithPadding}>
                <InfoOutlinedIcon />
              </Grid>
              <Grid item>
                <Link to='/info' className={classes.menuItem}>
                  Info
                </Link>
              </Grid>
              <Grid item className={classes.menuItemWithPadding}>
                <PersonOutlineOutlinedIcon />
              </Grid>
              <Grid item>
                <Link to='/user' className={classes.menuItem}>
                  User Profile
                </Link>
              </Grid>
              <Grid item className={classes.menuItemWithPadding}>
                <LockOpenOutlinedIcon />
              </Grid>
              <Grid item>
                <Link to='/login' className={classes.menuItem}>
                  Login
                </Link>
              </Grid>
              <Grid item>
                <Link to='/signup' className={classes.menuItemWithPadding}>
                  Signup
                </Link>
              </Grid>
              <Grid item className={classes.menuItemStatus}>
                <FirebaseContext.Consumer>
                  {(firebase) => {
                    return (
                      <div>
                        Status DB: <strong>OK</strong>
                      </div>
                    )
                  }}
                </FirebaseContext.Consumer>
              </Grid>
            </Grid>
          </nav>
        </Container>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/info' component={Info} />
          <Route path='/user' component={User} />
          <Route path='/login' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/'>
            <GardenView
              gardenItems={gardenItems}
              setGardenItems={setGardenItems}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
