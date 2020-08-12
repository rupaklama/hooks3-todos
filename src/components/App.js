import React, { useContext, useReducer } from 'react'

// import our Context object
import TodosContext from '../context';
// import our reducer func
import todosReducer from '../reducer';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function App() {
  // initial state from Context object
  const initialState = useContext(TodosContext);

  // two params in useReducer - reducer func & initial state
  // [updated state, dispatch func - to dispatch an action & update our state object]
  const [state, dispatch] = useReducer(todosReducer, initialState);

  // making state & dispatch available to all the components inside the provider tags,
  // with Value attribute to provide state objects
  return ( 
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
      <TodoForm />
    </TodosContext.Provider>
  )
}
