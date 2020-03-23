import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  body: {
    paddingBottom: 10,
    fontSize: 14
  },
  header: {
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 20
  }
})

const GardenView = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='xl'>
      <Grid container direction='column' justify='center'>
        <Grid item xs={12}>
          <Typography variant='h3' className={classes.header}>
            My Garden
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Here you manage your garden layout(s) and add information about your plants, create notifications for todos you find important etc. 
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
export default GardenView
