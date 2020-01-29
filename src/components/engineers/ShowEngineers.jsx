import { Card, Button, Grid } from "@material-ui/core";
import React from "react";

const cardStyle = {
  width: 300,
  height: 300,
  backgroundColor: "aqua",
  margin: 20,
  padding: 20,
  display: 'inline-block',
};

const ShowValue = ({ label, value}) => (
  <Grid container>
    <Grid item xs={12}>
      <Button variant="contained" fullWidth disableRipple>
        {label} <hr /> {value}
      </Button>
    </Grid>
  </Grid>
);

const ShowEngineer = ({ engineer }) => (
  <Card raised id={engineer.id} style={cardStyle}>
    <ShowValue label="Name" value={engineer.name} />
    <hr />
    <ShowValue label='ID' value={engineer.id} />
    <hr />
  </Card>
);

export default ShowEngineer;
