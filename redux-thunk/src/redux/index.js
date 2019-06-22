import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

//Action creators
export const getTodos = () => {
    return dispatch => {
        axios.get('https://api.vschool.io/royden/todo/').then(response => {
            dispatch({
                type: "GET_TODOS",
                todos: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const addTodo = newTodo => {
    return dispatch => {
        axios.post('https://api.vschool.io/royden/todo/', newTodo).then(response => {
            dispatch({
                type: "ADD_TODOS",
                newTodo: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

const initialState = {
    todos: []
}

//Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODOS":
            return {
                todos: [...state.todos, action.newTodo] 
            }
        case "GET_TODOS":
            return {
                todos: action.todos
            }
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))