import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from './Copyright'
import firebase from 'firebase'
import MenuItemsLoggedIn from './MenuItemsLoggedIn'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles({
  header: {
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 20
  },
  userField: {
    paddingBottom: 10
  },
  overlay: {
    backgroundColor: 'grey'
  }
})

const User = () => {
  const classes = useStyles()
  const [openEmailDialog, setOpenEmailDialog] = useState(false)
  const [openNameDialog, setOpenNameDialog] = useState(false)
  const user = firebase.auth().currentUser

  const handleEditEmailDialogOpen = () => {
    setOpenEmailDialog(true)
  }
  const handleEditEmailDialogClose = () => {
    setOpenEmailDialog(false)
  }

  const handleEditNameDialogOpen = () => {
    setOpenNameDialog(true)
  }

  const handleEditNameDialogClose = () => {
    setOpenNameDialog(false)
  }

  const handleEmailSave = () => {
    console.log('Saving changes to the email...')
  }
  const handleNameSave = () => {
    console.log('Saving changes to the name...')
  }

  if (user) {
    console.log(user)
    return (
      <>
        <MenuItemsLoggedIn />
        <Container maxWidth="xl">
          <Grid container direction="column" justify="center">
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.header}>
                User Profile
              </Typography>

              <Grid container direction="row" className={classes.userField}>
                <Grid item xs={2}>
                  <Typography variant="body1">Name:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{user.displayName}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEditNameDialogOpen}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction="row" className={classes.userField}>
                <Grid item xs={2}>
                  <Typography variant="body1">Email:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{user.email}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEditEmailDialogOpen}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Copyright />
            </Grid>
          </Grid>
        </Container>

        <Dialog
          open={openEmailDialog}
          onClose={handleEditEmailDialogClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
          fullWidth
          className={classes.dialog}
        >
          <DialogContent>
            <TextField
              autoFocus
              id="email"
              placeholder="Email: "
              value={user.email}
              fullWidth
            />
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleEmailSave}
              >
                Save changes
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>

        <Dialog
          open={openNameDialog}
          onClose={handleEditNameDialogClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
          fullWidth
        >
          <DialogContent className={classes.dialog}>
            <TextField id="name" placeholder="Name: " value={user.name} />
            <br />
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNameSave}
              >
                Save changes
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <MenuItemsLoggedIn />
    </>
  )
}
export default User
