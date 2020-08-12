// Here, we will create our Context object & make
// it available to other files in order to consume it.
import React from 'react';

// here within createContext, we can pass an object
// initial state
 const TodosContext = React.createContext({
    todos: [
        { id: 1, text: "Eat breakfast", complete: false },
        { id: 2, text: "Do laundry", complete: false },
        { id: 3, text: "Finish project", complete: true }
    ],
    editTodos: {}
});

// make this avilable for other components
export default TodosContext;