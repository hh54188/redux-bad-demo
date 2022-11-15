import React from 'react';
import { Provider } from 'react-redux';
import * as _ from 'lodash'
import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import App from './App';

function buildFullName(action) {
  return `${action.name.first}, ${action.name.last}`
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_END': return { 
      ...state,
      user: {
        name: _.toUpper(buildFullName(action)) 
      }
      // Risk: If return array, may array reference not changed
    };
    default: return state;
  }
}

const store = createStore(reducer, {
  user: {
    name: null
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

