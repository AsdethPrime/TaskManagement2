import React from 'react'
import { TextField, Button  } from '@material-ui/core'

const AddTask = () => {
    const [title, setTitle ] = React.useState('')
    const [description, setDescription ] = React.useState('')
    const [ status, toggleStatus ] = React.useState(false)

    const divStyle = {
        margin: 20,
        padding: 20
      };
    

    return (
        <div style={divStyle}>
            <Button fullWidth variant='contained' onClick={() => toggleStatus(!status)}>
                ADD TASK
            </Button>
            { status && (
                <form>
                    <TextField label='Title' fullWidth value={title} onChange={(event) => setTitle(event.target.value)} />
                    <TextField label='Description' fullWidth value={description} onChange={(event) => setDescription(event.target.value)} />
                    <Button type='submit' variant='contained'>Submit</Button>                   
                </form>
            )}            
        </div>
    )
}

export default AddTask 
