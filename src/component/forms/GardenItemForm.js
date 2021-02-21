import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker } from '@material-ui/pickers'
import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@material-ui/core'
import firebase from 'firebase'

const useStyles = makeStyles({
  textField: {
    maxWidth: 400
  }
})

const GardenItemForm = (props) => {
  const classes = useStyles()
  const [newName, setNewName] = useState(props.name)
  const [newDescription, setNewDescription] = useState(props.description)
  const [newNotes, setNewNotes] = useState(props.notes)
  const [newPlantingDate, setNewPlantingDate] = useState(
    props.plantingDate.toDate()
  )
  const [newX, setNewX] = useState(props.x)
  const [newY, setNewY] = useState(props.y)
  const db = firebase.firestore()

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    console.log(event.target.value)
    setNewDescription(event.target.value)
  }

  const handleNotesChange = (event) => {
    console.log(event.target.value)
    setNewNotes(event.target.value)
  }

  const handlePlantingDateChange = (date) => {
    console.log(date)
    setNewPlantingDate(date)
  }

  const handleXChange = (event) => {
    console.log(event.target.value)
    setNewX(event.target.value)
  }
  const handleYChange = (event) => {
    console.log(event.target.value)
    setNewY(event.target.value)
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
            })
            props.setGardenItems(items)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  const handleItemSave = () => {
    console.log(
      'saving form values',
      newName,
      newDescription,
      newPlantingDate,
      newNotes,
      newX,
      newY
    )
    // TODO: validation

    let newPlantKey = firebase.database().ref().child('gardenitem').push().key
    const savedItem = db.collection('gardenitem').doc(newPlantKey).set({
      plantName: newName,
      plantDescription: newDescription,
      plantingDate: newPlantingDate,
      notes: newNotes,
      locationX: newX,
      locationY: newY,
      uid: newPlantKey
    })
    console.log('Saved', savedItem, newPlantKey)
    fetchDbItems()
    props.closeEditForm()
  }

  return (
    <Dialog
      open={props.editFormVisible}
      onClose={props.closeEditForm}
      aria-labelledby="form-dialog-item"
      maxWidth="xs"
      fullWidth
      className={classes.dialog}
    >
      <DialogContent>
        <TextField
          autoFocus
          id="name"
          placeholder="Name: "
          value={newName}
          onChange={handleNameChange}
          fullWidth
        />
        <TextField
          id="description"
          placeholder="Description: "
          value={newDescription}
          onChange={handleDescriptionChange}
          fullWidth
        />
        <TextField
          id="notes"
          placeholder="Notes: "
          value={newNotes}
          onChange={handleNotesChange}
          fullWidth
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            fullWidth
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Planting date"
            value={newPlantingDate}
            onChange={handlePlantingDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="x"
          placeholder="X: "
          value={newX}
          onChange={handleXChange}
          fullWidth
        />
        <TextField
          id="y"
          placeholder="Y: "
          value={newY}
          onChange={handleYChange}
          fullWidth
        />
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleItemSave}
          >
            Save changes
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}
export default GardenItemForm
