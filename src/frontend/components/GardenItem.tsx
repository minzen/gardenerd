import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GardenItemForm from '../forms/GardenItemForm'

interface GardenItemProps {
  name: string
  description: string
  // todo Notifications/Reminders
}

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

export const GardenItem = (props: GardenItemProps) => {
  const classes = useStyles()
  const [title, setTitle] = useState(props.name)
  const [description, setDescription] = useState(props.description)
  const [editFormVisible, setEditFormVisible] = useState(false)

  const handleEditItem = () => {
    console.log('Edit clicked on item', props.name)
    setEditFormVisible(!editFormVisible)
  }

  const editForm = () => {
    if (editFormVisible) {
      return (
        <GardenItemForm
          name={title}
          description={description}
          plantationDate={'2020-03-28'}
          setName={setTitle}
          setDescription={setDescription}
        />
      )
    }
  }

  return (
    <>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant='h5' component='h2'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            variant='contained'
            color='primary'
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
