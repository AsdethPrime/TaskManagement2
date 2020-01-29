import { createStore, combineReducers } from 'redux'

const initialEngineer = [
    { name: "Manish", id: '462d336e-532f-44a3-b7df-a51f3ccb20e8'}
]


const engineerReducer = (state = initialEngineer, action ) => {
    if (action.type === 'ADD_ENGINEER') {
        const newEngineer = {
            name: action.name,
            id: action.id,
        }
        return state.concat(newEngineer)
    }
    return state
}

const taskReducer = ( state = [], action ) => {
    return state
}

const rootReducer = combineReducers({
    engineers: engineerReducer,
    tasks: taskReducer
})

export const store = createStore(rootReducer)