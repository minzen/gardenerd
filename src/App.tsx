import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import GardenView from './components/GardenView'
import Header from './components/Header'
import User from './components/User'
import Info from './components/Info'

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
  menuItemWithPadding: {
    color: '#2F4F4F',
    paddingLeft: 10,
    textDecoration: 'none'
  },
  menuItem: {
    color: '#2F4F4F',
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
            </Grid>
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
