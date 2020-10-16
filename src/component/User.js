import React, { useContext } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from './Copyright'
import { authContext } from '../provider/AuthProvider'
import firebase from 'firebase'

const useStyles = makeStyles({
  header: {
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 20
  }
})

const User = () => {
  const classes = useStyles()
  const { token } = useContext(authContext)
  const user = firebase.auth().currentUser

  if (user) {
    console.log(user)
    const email = user.email !== null ? user.email : ''
    return (
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
    )
  }

  return (
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
  )
}
export default User
