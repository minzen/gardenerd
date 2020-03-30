import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { GardenItem } from './GardenItem'

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

interface GardenViewProps {
  gardenItems: any
  setGardenItems: Function
}

const GardenView = (props: GardenViewProps) => {
  const classes = useStyles()

  return (
    <Container maxWidth='xl'>
      <Grid container direction='column' justify='center'>
        <Grid item xs={12}>
          <Typography variant='h3' className={classes.header}>
            My Garden
          </Typography>
          <Typography variant='body1' className={classes.body}>
            Here you manage your garden layout(s) and add information about your
            plants, create notifications for todos you find important etc.
          </Typography>
        </Grid>
      </Grid>
      {props.gardenItems.map((item: any) => 
          <GardenItem key={item.name} name={item.name} description={item.description} />      
      )}
    </Container>
  )
}
export default GardenView
