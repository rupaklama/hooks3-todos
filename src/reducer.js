import { v4 as uuidv4 } from 'uuid';

// creating Reducer to process & update our state object
// two params - our initial state & action types
export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                id: uuidv4(),
                text: action.payload,
                complete: false
            }
            const addedTodos = [...state.todos, newTodo] // add new list - newTodo in the state
            return {
                ...state, // new updated state
                todos: addedTodos // updated todos array with the new added list
            }

        case "TOGGLE_TODO": 
        // change value of complete property in todos state to false 
            const toggledTodos = state.todos.map(todo => 
                todo.id === action.payload.id ? 
                {...action.payload, complete: !action.payload.complete} :
                todo
            )
            return { // returning new updated state & update values of todos
                ...state, 
                todos: toggledTodos
            }

        case "REMOVE_TODO":
            const filteredTodos = state.todos.filter(todo => todo.id !== action.payload.id)
            return {
                ...state,
                todos: filteredTodos
            }
        
        case "EDIT_CURRENT_TODO":
            return {
                ...state, 
                editTodos: action.payload
            }

        case "UPDATE_TODO":
            const updatedTodo = {...state.editTodos, text: action.payload }
            const updatedTodoIndex = state.todos.findIndex (
                t => t.id === state.editTodos.id 
            )
            const updatedTodos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ]

            return {
                ...state,
                editTodos: {},
                todos: updatedTodos
            }
        default:
            return state;

    }
}

