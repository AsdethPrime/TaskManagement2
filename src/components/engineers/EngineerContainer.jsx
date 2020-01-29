import React from 'react'
import {connect} from 'react-redux'

import ShowEngineer from './ShowEngineers'
import AddEngineer from './AddEngineers'
import { addEngineer } from '../../redux/actionCreators'


const EngineerContainer = ({engineers, dispatch }) => {
    const handleSubmit = (name , id ) => dispatch(addEngineer(name, id)) 
    return (
        <div className='EngineerContainer'>
            <div className='AddEngineers'>
                <AddEngineer addEngineer={handleSubmit}/>
            </div>
            <div className='ShowEngineers'>
                {engineers.map(engineer => <ShowEngineer engineer={engineer} id={engineer.id} /> )}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    engineers: state.engineers
})

export default connect(mapStateToProps)(EngineerContainer)



