import React, {useState} from 'react'
import { Container, Grid, Typography, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import GardenItem from './GardenItem'
import Copyright from './Copyright'
import MenuItemsLoggedIn from './MenuItemsLoggedIn'
import GardenItemForm from './forms/GardenItemForm'
import moment from 'moment'

const useStyles = makeStyles({
  body: {
    paddingBottom: 10,
    fontSize: 14
  },
  header: {
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 20
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  }
})

const GardenView = (props) => {
  const classes = useStyles()
  const [editFormVisible, setEditFormVisible] = useState(false)

  const editForm = () => {
    if (editFormVisible) {
      return (
        <GardenItemForm
          name={""}
          description={""}
          plantingDate={moment()}
          notes={""}
          x={100}
          y={100}
          //setName={setTitle}
          // setDescription={setDescription}
          // setPlantingDate={setPlantingDate}
          // setNotes={setNotes}
          // setX={setX}
          // setY={setY}
          editFormVisible={editFormVisible}
          setEditFormVisible={setEditFormVisible}
          // closeEditForm={closeEditForm}
        />
      )
    }
  }

  const handleClick = () => {
    console.log('Fab clicked')
    setEditFormVisible(!editFormVisible)
  }

  return (
    <>
      <MenuItemsLoggedIn />
      <Container maxWidth="xl">
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={handleClick}
        >
          <AddIcon />
        </Fab>

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
        {editForm()}
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Container>
    </>
  )
}
export default GardenView
