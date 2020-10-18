import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Copyright from './Copyright'
import Snackbar from '@material-ui/core/Snackbar'
import firebase from 'firebase'
import MuiAlert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  header: {
    paddingBottom: 15
  }
}))

const PasswordForgotten = (props) => {
  const classes = useStyles()
  const auth = firebase.auth()
  const [email, setEmail] = useState('')
  const [openAlert, setOpenAlert] = useState(false)
  const [alertType, setAlertType] = useState('success')
  const [alertMsg, setAlertMsg] = useState('')

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

  const handleClose = () => {
    setOpenAlert(false)
  }

  const showAlert = (msg, type) => {
    setAlertMsg(msg)
    setAlertType(type)
    setOpenAlert(true)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handleSubmit = async (event) => {
    console.log('handleSubmit', email)
    event.preventDefault()
    try {
      await auth.sendPasswordResetEmail(email)
      showAlert(
        'Email for resetting the password has been sent successfully.',
        'info'
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.header}>
          Reset Password
        </Typography>
        <Typography component="body1" variant="body11">
          If you have lost your password, you can reset the password by
          providing your Email address below. You'll get instructions to your
          Email account on how to reset the password.
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => handleSubmit(event)}
          >
            Reset
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {'Need a new account? Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertType}>
          {alertMsg}
        </Alert>
      </Snackbar>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}
export default PasswordForgotten
