import React from "react";
import { TextField, Button } from "@material-ui/core";

const id = require("uuid/v4");

const AddEngineers = props => {
  const divStyle = {
    margin: 20,
    padding: 20
  };

  const [name, setName] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.addEngineer(name, id());
    setName("");
  };

  const ShowForm = props => {
    const [state, toggleState] = React.useState(false);
    return (
      <div>
        <Button fullWidth variant="contained" onClick={() => toggleState(!state)}>
          Show From
        </Button>
        {state && (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='primary'
            >
              Submit
            </Button>
          </form>
        )}
      </div>
    );
  };

  return (
    <div style={divStyle}>
      <ShowForm />
    </div>
  );
};

export default AddEngineers;
