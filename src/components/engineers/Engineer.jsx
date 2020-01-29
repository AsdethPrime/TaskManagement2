import React from "react";

import { Card, Button, Grid } from "@material-ui/core";

const uuid = require("uuid/v1");
const id = uuid();

const engineerData = {
  name: "Manish",
  id: id,  
};


const Engineer = () => {
  const cardStyle = {
    width: 300,
    height: 300,
    backgroundColor: "aqua",
    margin: 20,
    padding: 20
  };

  const ShowValue = ({label, data }) => (
    <Grid container>
    <Grid item xs={12}>
      <Button variant="contained" fullWidth disableRipple>{label} <hr /> {data}</Button>
    </Grid>
  </Grid>
  )

  return (
    <div>
      <Card raised style={cardStyle}>
          <ShowValue label="Name" data={engineerData.name} />
          <hr />
          <ShowValue label='Taking Ticket' data={engineerData.takingTicket ? 'TRUE' : 'FALSE'} />
          <hr />
          <ShowValue label='id' data={engineerData.id} />
      </Card>
    </div>
  );
};

export default Engineer;
