import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom'
import { AppBar, Typography, Divider, Grid, Button} from '@material-ui/core'

import './App.css';

const App = () => {
  const gridStyle = {
    fontSize: 25,
  }

  const ShowTitle = ({title}) => (
    <AppBar position='relative' align='center'>
      <Typography variant='h4'>
        {title}
      </Typography>
    </AppBar>
  )

  const ShowLink = ({url, name }) => (
    <Grid item xs={4}>
      <NavLink to={url}>
        <Button variant='outlined' color='primary' fullWidth>
          {name}
        </Button>
      </NavLink>
    </Grid>
  )

  const ShowExactLink = ({url, name }) => (
    <Grid item xs={4}>
      <NavLink exact to={url}>
        <Button variant='outlined' color='primary' fullWidth>
          {name}
        </Button>
      </NavLink>
    </Grid>
  )

  return (
    <HashRouter>
      <div>
        <nav>
          <ShowTitle title='Task Management App v2' />
          <Divider />
          { /* Show Navigation Link */}
          <Grid container style={gridStyle}>
            <ShowExactLink url='/' name='HOME' />
            <ShowLink url='/engineers' name='ENGINEERS' />   
            <ShowLink url='/tasks' name='TASKS' />        
          </Grid>
        </nav>
        <div className='content'>

        </div>
      </div>
    </HashRouter>
  )
}

export default App;
