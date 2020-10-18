import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Snackbar,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from './Copyright'
import firebase from 'firebase'
import MenuItemsLoggedIn from './MenuItemsLoggedIn'
import EditIcon from '@material-ui/icons/Edit'
import MuiAlert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
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
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

const User = () => {
  const classes = useStyles()
  const user = firebase.auth().currentUser
  const [openEmailDialog, setOpenEmailDialog] = useState(false)
  const [openNameDialog, setOpenNameDialog] = useState(false)
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false)
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [openAlert, setOpenAlert] = useState(false)
  const [alertType, setAlertType] = useState('success')
  const [alertMsg, setAlertMsg] = useState('')

  useEffect(() => {
    if (user !== null) {
      setNewEmail(user.email)
      setNewName(user.displayName)
    }
  }, [])

  const showAlert = (msg, type) => {
    setAlertMsg(msg)
    setAlertType(type)
    setOpenAlert(true)
  }

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

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePasswordDialogOpen = () => {
    setOpenPasswordDialog(true)
  }

  const handlePasswordDialogClose = () => {
    setOpenPasswordDialog(false)
  }

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value)
  }

  const handleEmailSave = async () => {
    console.log('Saving changes to the email...')
    try {
      await user.updateEmail(newEmail)
      showAlert('Email address updated successfully', 'info')
      handleEditEmailDialogClose()
    } catch (error) {
      console.log(error)
      showAlert(error, 'error')
    }
  }

  const handleNameSave = async () => {
    console.log('Saving changes to the name...')
    try {
      await user.updateProfile({
        displayName: newName
      })
      handleEditNameDialogClose()
    } catch (error) {
      console.log(error)
      showAlert(error, 'error')
    }
  }

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value)
  }

  const handleClose = () => {
    setOpenAlert(false)
  }

  const handlePasswordSave = async () => {
    console.log('Updating the password...', newPassword)
    try {
      await user.updatePassword(newPassword)
      showAlert('Password updated successfully', 'info')
      handlePasswordDialogClose()
    } catch (error) {
      console.log(error)
      showAlert(error, 'error')
    }
  }

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
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

              <Grid container direction="row" className={classes.userField}>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePasswordDialogOpen}
                    startIcon={<EditIcon />}
                  >
                    Change password
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
          aria-labelledby="form-dialog-email"
          maxWidth="xs"
          fullWidth
          className={classes.dialog}
        >
          <DialogContent>
            <TextField
              autoFocus
              id="email"
              placeholder="Email: "
              value={newEmail}
              onChange={handleEmailChange}
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
          aria-labelledby="form-dialog-name"
          maxWidth="xs"
          fullWidth
        >
          <DialogContent className={classes.dialog}>
            <TextField
              id="name"
              placeholder="Name: "
              value={newName}
              onChange={handleNameChange}
            />
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

        <Dialog
          open={openPasswordDialog}
          onClose={handlePasswordDialogClose}
          aria-labelledby="form-dialog-password"
          maxWidth="xs"
          fullWidth
        >
          <DialogContent className={classes.dialog}>
            <TextField
              id="password"
              placeholder="Password: "
              value={newPassword}
              type="password"
              onChange={handlePasswordChange}
            />
            <br />
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={handlePasswordSave}
              >
                Save changes
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>

        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={alertType}>
            {alertMsg}
          </Alert>
        </Snackbar>
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
