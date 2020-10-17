import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from './Copyright'
import firebase from 'firebase'
import MenuItemsLoggedIn from './MenuItemsLoggedIn'

const useStyles = makeStyles({
  header: {
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 20
  }
})

const User = () => {
  const classes = useStyles()
  const user = firebase.auth().currentUser

  if (user) {
    console.log(user)
    const email = user.email !== null ? user.email : ''
    return (
      <>
        <MenuItemsLoggedIn />
        <Container maxWidth="xl">
          <Grid container direction="column" justify="center">
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.header}>
                User Profile
              </Typography>
              <Typography variant="body1" className={classes.header}>
                email: {email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Copyright />
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }

  return (
    <>
      <MenuItemsLoggedIn />
      <Container maxWidth="xl">
        <Grid container direction="column" justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.header}>
              User Profile (no logged in user)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default User
