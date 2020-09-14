import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDosReducer from './reducers/todos';
import { addNewToDo } from './actions/todos';
import { Provider } from 'react-redux';


const store = createStore( toDosReducer );

//console.log the store
store.subscribe( ()=> console.log( store.getState() ) );

store.dispatch( addNewToDo("Research Redux") );

ReactDOM.render(
  <Provider store={store}>
    <> </>
  </Provider>,
  document.getElementById('root')
);


