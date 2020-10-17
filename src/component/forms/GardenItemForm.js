import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles({
  textField: {
    maxWidth: 400
  }
})

const GardenItemForm = (props) => {
  const classes = useStyles()

  const handleTitleChange = (event) => {
    console.log(event.target.value)
    props.setName(event.target.value)
  }

  const handleDescrChange = (event) => {
    console.log(event.target.value)
    props.setDescription(event.target.value)
  }

  const handleFormSubmit = () => {
    console.log('saving form values', props.name, props.description)
  }

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <TextField
          value={props.name}
          className={classes.textField}
          onChange={(event) => {
            return handleTitleChange(event)
          }}
        >
          Name:{' '}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={props.description}
          className={classes.textField}
          onChange={(event) => {
            return handleDescrChange(event)
          }}
        >
          Description:{' '}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={handleFormSubmit}
          variant="contained"
          color="secondary"
        >
          Save changes
        </Button>
      </Grid>
    </Grid>
  )
}
export default GardenItemForm
