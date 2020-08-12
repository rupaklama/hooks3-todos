// import useContext hook
import React, { useContext } from 'react';

// import Context object
import TodosContext from '../context';

function TodoList () {
    // destructuring state & dispatch of Reducer, passed on this component before with Value attrib
    // state - display/update our state
    // dispatch - to update our state, Action object gets dispatched to Reducer which updates our State/Context object
    const { state, dispatch } = useContext(TodosContext);

    const renderTodos = state.todos.map(todo => {
        const { id, text } = todo;

        // created new action type - TOGGLE_TODO with 
        // payload (data) which is current todo we are iterating over
        
        return ( 
            <li key={id}> 
                <span 
                    onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })} 
                    className={`cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`}
                >{text}</span>
             
                <br />
                <button 
                    onClick={() => dispatch({ type: "EDIT_CURRENT_TODO", payload: todo })}
                   
                >Edit</button>
                <br />
                <button 
                    onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
                   
                >Delete</button>
            </li> // removing todos from state object with dispatch
        )
    })

    // setting title
    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing To Do!";

    return (
        <div className="container mx-auto max-w-md text-center font-mono"> 
            <h1>{title}</h1>
            { renderTodos }
        </div>
    )
}

export default TodoList;