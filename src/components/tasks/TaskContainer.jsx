import React from 'react'
import {connect} from 'react-redux'

import { addEngineer } from '../../redux/actionCreators'

import AddTask from './AddTask'


const TaskContainer = ({tasks, dispatch }) => {

    return (
        <div className='TaskContainer'>
            <div className='AddTasks'>
                <AddTask />                
            </div>
            <div className='ShowTasks'>
                { tasks.length === 0 ? 'No Tasks to Show' : 'Showing Task'}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    tasks: state.tasks
})

export default connect(mapStateToProps)(TaskContainer)