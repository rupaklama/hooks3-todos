import React, { useState, useEffect, useContext } from 'react'

// import Context object
import TodosContext from '../context';
export default function TodoForm() {

    const [addList, setAddList] = useState('');

    // destructuring state & dispatch of Reducer, passed on this component before with Value attrib
    // state - display/update our state
    // dispatch - to update our state, Action object gets dispatched to Reducer which updates our State/Context object
    const { state: { editTodos = {}}, dispatch } = useContext(TodosContext);

    // using useEffect to check to see if current todo's updated
    useEffect(() => {
        // check to see if we have current todo in state
        if(editTodos.text) {
            setAddList(editTodos.text)
        }
        // eslint-disable-next-line
    }, [editTodos.id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // check to see if we have current todo in state
        if(editTodos.text) {
            dispatch({ type: "UPDATE_TODO", payload: addList })
        } else {
            // dispatching new action object - ADD_TODO
            // with payload - user input
            dispatch({ type: "ADD_TODO", payload: addList })
        }
        setAddList('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex justify-center p-5">
                <label>Add Todos</label>
                <input 
                    type="text" 
                    className="border-black border-solid border-2"
                    value={addList}
                    onChange={e => setAddList(e.target.value)}
                />
                    
            </form>
        </div>
    )
}
