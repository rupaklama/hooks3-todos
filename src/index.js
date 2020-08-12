import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

// In order to use react context, we need to create Context Object,
// This Context object which is like a storage can be use to share data between components easily.
// export const UserContext = React.createContext(); 
// It returns an object with 2 values: special components
// { Provider, Consumer }
// Provider component wraps around a tree of components that can have an access to the Context Object

// using Provider component of Context object to provide values to all
// children and grandchildren by using value={} attribute

// our value/data to share
// const username = 'Rupak';



ReactDOM.render(
  <React.StrictMode>
  
      <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
