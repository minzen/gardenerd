import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GardenItem from './GardenItem'
import Copyright from './Copyright'
import MenuItemsLoggedIn from './MenuItemsLoggedIn'

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

const GardenView = (props) => {
  const classes = useStyles()

  return (
    <>
      <MenuItemsLoggedIn />
      <Container maxWidth="xl">
        <Grid container direction="column" justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.header}>
              My Garden
            </Typography>
            <Typography
              variant="body1"
              component="body1"
              className={classes.body}
            >
              Here you manage your garden layout(s) and add information about
              your plants, create notifications for items you find important
              etc.
            </Typography>
          </Grid>
        </Grid>
        {props.gardenItems.map((item) => (
          <GardenItem
            key={item.plantName}
            name={item.plantName}
            description={item.plantDescription}
            plantingDate={item.plantingDate}
            notes={item.notes}
            x={item.locationX}
            y={item.locationY}
            uid={item.uid}
          />
        ))}
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Container>
    </>
  )
}
export default GardenView
