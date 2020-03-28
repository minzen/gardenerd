import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const Logo = require('../../assets/img/gardenerd_logo_200x200.png')

const useStyles = makeStyles({
  headerSection: {
    backgroundColor: '#F5F5F5',
    paddingLeft: 10,
    paddingRight: 10,
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='xl'>
      <Grid container direction='column' justify='center'>
        <Grid item xs={12} className={classes.headerSection}>
          <img src={Logo} alt='sitelogo' />
        </Grid>
      </Grid>
    </Container>
  )
}
export default Header
