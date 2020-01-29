import React from "react";

import { Card, Button, Grid } from "@material-ui/core";

const uuid = require("uuid/v1");
const id = uuid();

const taskData = {
    id: id, 
    title: 'Title 1',
    description: 'Please deploy a nice looking app right up my ass',
    status: 'new',
    assignedTo: '',
}


const Task = () => {
  const cardStyle = {
    width: 300,
    height: 350,
    backgroundColor: "aqua",
    margin: 20,
    padding: 20,
    display: 'inline-block',
  };

  const ShowValue = ({label, data }) => (
    <Grid container>
    <Grid item xs={12}>
      <Button variant="contained" fullWidth disableRipple>{label} <br /> {data}</Button>
    </Grid>
  </Grid>
  )

  return (
    <div>
      <Card raised style={cardStyle}>
          <ShowValue label="Title" data={taskData.title} />
          <hr />
          <ShowValue label='Description' data={taskData.description} />
          <hr />
          <ShowValue label='Status' data={taskData.status} />
          <hr />
          <ShowValue label='Assigned To' data={taskData.assignedTo.length === 0 ? 'not assigned to anyone' : taskData.assignedTo  } />
      </Card>
    </div>
  );
};

export default Task;
