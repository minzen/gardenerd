import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GardenItemForm from './forms/GardenItemForm'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export const GardenItem = (props) => {
  console.log(props)
  const classes = useStyles()
  const [title, setTitle] = useState(props.name)
  const [description, setDescription] = useState(props.description)
  const [plantingDate, setPlantingDate] = useState(props.plantingDate)
  const [notes, setNotes] = useState(props.notes)
  const [x, setX] = useState(props.x)
  const [y, setY] = useState(props.y)
  const [editFormVisible, setEditFormVisible] = useState(false)

  const handleEditItem = () => {
    console.log('Edit clicked on item', props.name)
    setEditFormVisible(true)
  }

  const closeEditForm = () => {
    setEditFormVisible(false)
  }

  // TODO: Enable adding a photo
  const editForm = () => {
    if (editFormVisible) {
      return (
        <GardenItemForm
          name={title}
          description={description}
          plantingDate={plantingDate}
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
        />
      )
    }
  }

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Name: {title}
          </Typography>
          <br />
          <Typography variant="h5" component="h2">
            Description: {description}
          </Typography>
          <br />
          <Typography variant="body1" component="body1">
            Notes: {notes}
          </Typography>
          <br />
          <Typography variant="body1" component="body1">
            Planting date: {plantingDate.toString()}
          </Typography>
          <br />
          <Typography variant="body1" component="body1">
            Location in x,y: [{x},{y}]
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleEditItem}
          >
            Edit plant information
          </Button>
        </CardActions>
      </Card>

      {editForm()}
    </>
  )
}
