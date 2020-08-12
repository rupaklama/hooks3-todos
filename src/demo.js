// new way to consume context is with useContext hook
// import useContext (or we could write React.useContext)
// import React, { useContext, useReducer } from 'react';

// import context object
// import { UserContext } from './index';

// initial state to demo useReducer
const initialState = {
  count: 0
}

// action types
// const TYPES = {
//   INCREMENT: 'INCREMENT',
//   DECREMENT: 'DECREMENT',
//   RESET: 'RESET'
// }

// reducer function to process & update state
// two params - our initial state & action types
const countReducer = (state, action) => {
  switch (action.type) {
    case "increment": 
      return { // updating our count initial state
        count: state.count + 1
      }
    case "decrement": 
      return { 
        count: state.count - 1
      }
    case "reset": 
      return initialState
    default:
      return initialState
  }
}
function App() {
  // to use above reducer with useReducer hook
  // two params in useReducer - reducer func & initial state
  // [updated state, dispatch func - to dispatch an action & update our state object]
  const [state, dispatch ] = useReducer(countReducer, initialState);

  // NEW WAY with using hook
  // just pass the context object that we created into useContext hook
  // that returns our value
  // const value = useContext(UserContext);
  // return <div>Hello, {value}</div>

  return (
    <div>
      count: {state.count}
      <button 
        onClick={() => dispatch({ type: "increment" })}
        className="border m-1 p-1"
      >Increment</button>

      <button 
        onClick={() => dispatch({ type: "decrement" })}
        className="border m-1 p-1"
      >decrement</button>

      <button 
        onClick={() => dispatch({ type: "reset" })}
        className="border m-1 p-1"
      >reset</button>

    </div> // calling dispatch, pass into it an object & type of action to perform,
  ); // after this our state object gets updated
}

export default App;

// The old way is by using Consumer component to consume value provided by Provider
// To get the username value that's been passed down, we have to use render props pattern

// OLD WAY without hook
// function App() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {value => <div>Hello, {value}</div>}
//       </UserContext.Consumer>
//     </div>
//   );
// }


