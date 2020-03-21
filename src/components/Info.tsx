import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  body: {
    paddingBottom: 10
  }
})

const Info = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant='body1' className={classes.body}>
        Gardenerd is an app for hobby gardeners who want to manage garden plants
        and their specific information by using a web browser. One may add notes
        specific to a plant, e.g. information about the fertilization, plant
        date and a general care instructions. It is also planned that it is
        possible to create and manage layouts so you can have the same setup as
        in your own garden/greenhouse.
      </Typography>
      <Typography variant='body1' className={classes.body}>
        You will need to register a user account to be able to start using the
        service.
      </Typography>
    </>
  )
}
export default Info
