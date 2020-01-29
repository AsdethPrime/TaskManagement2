import React from "react";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import {
  AppBar,
  Typography,
  Divider,
  Grid,
  Button,  
} from "@material-ui/core";

import Engineer from "./components/engineers/EngineerContainer";
import Task from "./components/tasks/TaskContainer";

import "./App.css";

const App = () => {

  const ShowTitle = ({ title }) => (
    <AppBar position="relative" align="center">
      <Typography variant="h4">{title}</Typography>
    </AppBar>
  );

  const ShowLink = ({ url, name }) => (
    <Grid item xs={4}>
      <NavLink to={url}>
        <Button variant="outlined" color="primary" fullWidth>
          {name}
        </Button>
      </NavLink>
    </Grid>
  );

  const ShowEmptySpace = () => (
    <div>
      <Divider />
      <Divider />
      <hr />
    </div>
  );

  const browserRouterStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly'

  };

  const ShowRouter = () => (
    <BrowserRouter>
      <div style={browserRouterStyle}>
        <ShowLink url="/" name="Home" />
        <ShowLink url="/engineers" name="Engineers" />
        <ShowLink url="/tasks" name="Tasks" />
      </div>
      <hr />
      <Divider />
      <Switch>
        <Route exact path="/">
          <Engineer />
        </Route>
        <Route path="/engineers">
          <Engineer />
        </Route>
        <Route path="/tasks">
          <Task />
        </Route>
      </Switch>
    </BrowserRouter>
  );

  return (
    <div>
      <ShowTitle title="Task Management App v2" />
      <ShowEmptySpace />
      <ShowRouter />
    </div>
  );
};

export default App;
