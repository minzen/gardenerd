import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

class Firebase {
  auth: app.auth.Auth
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }

  doCreateUserWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    console.log('doCreateUserWithEmailAndPassword', email, password)
    await this.auth.createUserWithEmailAndPassword(email, password)
  }

  doSignInWithEmailAndPassword = async (email: string, password: string) => {
    await this.auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
      })
  }

  doSignOut = async () => {
    await this.auth.signOut()
  }
  doPasswordReset = async (email: string) =>
    await this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = async (password: string) => {
    this.auth.currentUser
      ? await this.auth.currentUser.updatePassword(password)
      : Promise.resolve()
  }
}
export default Firebase
