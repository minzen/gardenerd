import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

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
  },
  menuItemStatus: {
    marginLeft: 10,
    textDecoration: 'underline',
    color: '#2F4F4F'
  }
})

const MenuItemsNotLoggedIn = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="xl">
      <nav className={classes.menuBar}>
        <Grid container direction="row" alignItems="center">
          <Grid item className={classes.menuItemWithPadding}>
            <HomeOutlinedIcon />
          </Grid>
          <Grid item>
            <Link to="/" className={classes.menuItem}>
              Home
            </Link>
          </Grid>

          <Grid item className={classes.menuItemWithPadding}>
            <InfoOutlinedIcon />
          </Grid>
          <Grid item>
            <Link to="/info" className={classes.menuItem}>
              Info
            </Link>
          </Grid>

          <Grid item className={classes.menuItemWithPadding}>
            <LockOpenOutlinedIcon />
          </Grid>
          <Grid item>
            <Link to="/login" className={classes.menuItem}>
              Login
            </Link>
          </Grid>

          <Grid item>
            <Link to="/signup" className={classes.menuItemWithPadding}>
              Signup
            </Link>
          </Grid>
        </Grid>
      </nav>
    </Container>
  )
}
export default MenuItemsNotLoggedIn
