import React, {useState} from 'react'
import { Container, Grid, Typography, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import GardenItem from './GardenItem'
import Copyright from './Copyright'
import MenuItemsLoggedIn from './MenuItemsLoggedIn'
import GardenItemForm from './forms/GardenItemForm'
import moment from 'moment'
import firebase from 'firebase'

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
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState(props.description)
  const [plantingDate, setPlantingDate] = useState(props.plantingDate)
  const [notes, setNotes] = useState(props.notes)
  const [x, setX] = useState(props.x)
  const [y, setY] = useState(props.y)
  const db = firebase.firestore()


  const handleClick = () => {
    console.log('Fab clicked')
    setEditFormVisible(!editFormVisible)
  }

  const closeEditForm = () => {
    setEditFormVisible(false)
  }

  const editForm = () => {
    if (editFormVisible) {
      return (
        <GardenItemForm
          name={title}
          description={description}
          plantingDate={moment()}
          notes={notes}
          x={x}
          y={y}
          setName={setTitle}
          setDescription={setDescription}
          setPlantingDate={setPlantingDate}
          setNotes={setNotes}
          setX={setX}
          setY={setY}
          editFormVisible={editFormVisible}
          setEditFormVisible={setEditFormVisible}
          closeEditForm={closeEditForm}
          setGardenItems={props.setGardenItems}
        />
      )
    }
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
            uid={item.uid}
            x={item.locationX}
            y={item.locationY}
            setGardenItems={props.setGardenItems}
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
