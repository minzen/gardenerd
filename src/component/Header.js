import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../assets/img/gardenerd_logo_200x200.png'
import palette from '../palette'

const useStyles = makeStyles({
  headerSection: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: palette.primary.dark
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="xl">
      <Grid container direction="column" justify="center">
        <Grid item xs={12} className={classes.headerSection}>
          <a href="/">
            <img src={Logo} alt="sitelogo" />
          </a>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Header
