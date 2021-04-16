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
import firebase from 'firebase'
import AlertDialog from './AlertDialog'
import palette from '../palette'

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
    marginBottom: 15,
    backgroundColor: palette.primary.light
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bolder'
  },
  pos: {
    marginBottom: 12
  }
}))

const GardenItem = (props) => {
  console.log(props)
  const classes = useStyles()
  const [title, setTitle] = useState(props.name)
  const [description, setDescription] = useState(props.description)
  const [plantingDate, setPlantingDate] = useState(props.plantingDate)
  const [notes, setNotes] = useState(props.notes)
  const [x, setX] = useState(props.x)
  const [y, setY] = useState(props.y)
  const [editFormVisible, setEditFormVisible] = useState(false)
  const [deleteItemDialogVisible, setDeleteItemDialogVisible] = useState(false)
  const uid = useState(props.uid)
  const db = firebase.firestore()
  const plantingDateStr =
    plantingDate !== null ? plantingDate.toDate().toDateString() : ''

  const handleEditItem = () => {
    console.log('Edit clicked on item', props.name)
    setEditFormVisible(true)
  }

  const showDeleteDialog = () => {
    setDeleteItemDialogVisible(true)
  }

  const closeDeleteDialog = () => {
    setDeleteItemDialogVisible(false)
  }

  const handleDeleteItem = () => {
    console.log('Delete clicked on item', props.uid)
    db.collection('gardenitem')
      .doc(props.uid)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!')
        fetchDbItems()
      })
      .catch((error) => {
        console.error('Error removing document: ', error)
      })
  }

  const fetchDbItems = () => {
    try {
      db.collection('gardenitem')
        .get()
        .then((gardenItemList) => {
          let items = []
          if (gardenItemList !== null && gardenItemList.docs !== null) {
            gardenItemList.docs.map((doc) => {
              console.log('id: ' + doc.id)
              items.push(doc.data())
              return items
            })
            props.setGardenItems(items)
          }
        })
    } catch (error) {
      console.log(error)
    }
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
          setGardenItems={props.setGardenItems}
          uid={uid}
        />
      )
    }
  }

  return (
    <>
      <AlertDialog
        dialogOpen={deleteItemDialogVisible}
        closeDeleteDialog={closeDeleteDialog}
        confirmAction={handleDeleteItem}
        title={'Delete item?'}
        description={'Are you certain that you want the item to be deleted?'}
      />
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h3" className={classes.title}
            color="textSecondary"
            gutterBottom
          >Name: {title}</Typography>
          <br />
          <Typography variant="body1">Description: {description}</Typography>
          <Typography variant="body2">
            Notes: {notes}<br />
            Planting date: {plantingDateStr}<br />
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
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={showDeleteDialog}
          >
            Delete plant item
          </Button>
        </CardActions>
      </Card>

      {editForm()}
    </>
  )
}
export default GardenItem
