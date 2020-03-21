import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Header from './components/Header'
import Info from './components/Info'
import './App.css'

const App = () => {

  return (
    <Container maxWidth='xl'>
      <Grid container direction='column' justify='center'>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Info />
        </Grid>
        <Grid item xs={12} >
          {/* Benefits: */}
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
