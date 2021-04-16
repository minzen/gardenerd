import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlined'
import { Link } from 'react-router-dom'
import palette from '../palette'

const useStyles = makeStyles({
  menuBar: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: palette.primary.main
  },
  menuItemWithPadding: {
    paddingLeft: 10,
    textDecoration: 'none'
  },
  menuItem: {
    textDecoration: 'none'
  },
  menuItemStatus: {
    marginLeft: 10,
    textDecoration: 'underline',
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
          <Grid item>
            <Link to="/listitems" className={classes.menuItem}>
              List items
            </Link>
          </Grid>
        </Grid>
      </nav>
    </Container>
  )
}
export default MenuItemsLoggedIn
