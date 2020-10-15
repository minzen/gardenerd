import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from './Copyright'

const useStyles = makeStyles({
  header: {
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 20
  }
})

const User = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="xl">
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.header}>
            User Profile
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
