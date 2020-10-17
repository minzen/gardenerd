import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlined'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const useStyles = makeStyles({
  menuBar: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: '#424242',
    borderStyle: 'solid',
    borderColor: 'lightGrey',
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  menuItemWithPadding: {
    color: '#F7F7F7',
    paddingLeft: 10,
    textDecoration: 'none'
  },
  menuItem: {
    color: '#F7F7F7',
    textDecoration: 'none'
  },
  menuItemStatus: {
    marginLeft: 10,
    textDecoration: 'underline',
    color: '#F7F7F7'
  }
})

const MenuItemsLoggedIn = () => {
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
            <PersonOutlineOutlinedIcon />
          </Grid>
          <Grid item>
            <Link to="/user" className={classes.menuItem}>
              User Profile
            </Link>
          </Grid>
          <Grid item className={classes.menuItemWithPadding}>
            <LockOutlinedIcon />
          </Grid>
          <Grid item>
            <Link to="/logout" className={classes.menuItem}>
              Logout
            </Link>
          </Grid>
        </Grid>
      </nav>
    </Container>
  )
}
export default MenuItemsLoggedIn
