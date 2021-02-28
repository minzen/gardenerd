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
  },
  errortext: {
    color: 'red'
  }
})

const GardenItemForm = (props) => {
  const classes = useStyles()
  const nameInvalid = 'Error: Name is a required field'
  const descriptionInvalid = 'Error: Description is a required field'
  const notesInvalid = 'Error: Notes is a required field'
  const plantingDateInvalid = 'Error: Planting date is a required field'
  const xInvalid = 'Error: value of X is invalid'
  const yInvalid = 'Error: value of Y is invalid'
  
  const [newName, setNewName] = useState(props.name)
  const [newDescription, setNewDescription] = useState(props.description)
  const [newNotes, setNewNotes] = useState(props.notes)
  const [newPlantingDate, setNewPlantingDate] = useState(
    props.plantingDate.toDate()
  )
  const [newX, setNewX] = useState(props.x)
  const [newY, setNewY] = useState(props.y)
  const [newUid, setNewUid] = useState(props.uid)
  const [formValid, setFormValid] = useState(false)
  const [formErrors, setFormErrors] = useState(null)

  const db = firebase.firestore()

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    validateNameField(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    console.log(event.target.value)
    setNewDescription(event.target.value)
    validateDescriptionField(event.target.value)
  }

  const handleNotesChange = (event) => {
    console.log(event.target.value)
    setNewNotes(event.target.value)
    validateNotesField(event.target.value)
  }

  const handlePlantingDateChange = (date) => {
    console.log(date)
    setNewPlantingDate(date)
    validatePlantingDate(date)
  }

  const handleXChange = (event) => {
    console.log(event.target.value)
    setNewX(event.target.value)
    validateXField(event.target.value)
  }
  const handleYChange = (event) => {
    console.log(event.target.value)
    setNewY(event.target.value)
    validateYField(event.target.value)
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

  const validateForm = () => {
    if (!validateNameField(newName)) {
      setFormInvalidAndSetError(nameInvalid)
      return false
    } else if (!validateDescriptionField(newDescription)) {
      setFormInvalidAndSetError(descriptionInvalid)
      return false
    } else if (!validateNotesField(newNotes)) {
      setFormInvalidAndSetError(notesInvalid)
      return false
    } else if (!validatePlantingDate(newPlantingDate)) {
      setFormInvalidAndSetError(plantingDateInvalid)
      return false
    } else if (!validateXField(newX)) {
      setFormInvalidAndSetError(xInvalid)
      return false
    } else if (!validateYField(newY)) {
      setFormInvalidAndSetError(yInvalid)
      return false
    }
    setFormValidAndClearErrors()
    return true
  }

  const setFormInvalidAndSetError = (errorMsg) => {
    setFormValid(false)
    setFormErrors(errorMsg)
  }

  const setFormValidAndClearErrors = () => {
    setFormValid(true)
    setFormErrors('')
  }

  const validateNameField = (value) => {
    if (value === '' || value === undefined) {
      setFormInvalidAndSetError(nameInvalid)
      return false
    }
    setFormValidAndClearErrors()
    return true
  }

  const validateDescriptionField = (value) => {
    if (value === '' || value === undefined) {
      setFormInvalidAndSetError(descriptionInvalid)
      return false
    }
    setFormValidAndClearErrors()
    return true
  }

  const validateNotesField = (value) => {
    if (value === '' || value === undefined) {
      setFormInvalidAndSetError(notesInvalid)
      return false
    }
    setFormValidAndClearErrors()
    return true
  }

  const validatePlantingDate = (value) => {
    if (value === '' || value === undefined) {
      setFormInvalidAndSetError(plantingDateInvalid)
      return false
    }
    setFormValidAndClearErrors()
    return true
  }

  const validateXField = (value) => {
    if (value === '' || value === undefined || isNaN(value)) {
      setFormInvalidAndSetError(xInvalid)
      return false
    }
    setFormValidAndClearErrors()
    return true
  }

  const validateYField = (value) => {
    if (value === '' || value === undefined || isNaN(value)) {
      setFormInvalidAndSetError(yInvalid)
      return false
    }
    setFormValidAndClearErrors()
    return true
  }

  const handleItemSave = () => {
    
    if (validateForm()) {
      console.log(
        'saving form values',
        newName,
        newDescription,
        newPlantingDate,
        newNotes,
        newX,
        newY,
        newUid
      )
  
      let plantToSaveKey = props.uid
      if (props.uid === undefined) {
        plantToSaveKey = firebase.database().ref().child('gardenitem').push().key
      }
      const savedItem = db.collection('gardenitem').doc(plantToSaveKey).set({
        plantName: newName,
        plantDescription: newDescription,
        plantingDate: newPlantingDate,
        notes: newNotes,
        locationX: newX,
        locationY: newY,
        uid: plantToSaveKey
      })
      console.log('Saved', savedItem, plantToSaveKey)
      fetchDbItems()
      props.closeEditForm()  
    }
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
        <div className={classes.errortext}>{formErrors}</div>
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
            disabled={!formValid}
          >
            Save changes
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}
export default GardenItemForm
