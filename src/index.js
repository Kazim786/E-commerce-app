import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {PersistGate } from 'redux-persist/integration/react';
//This delays the rendering of your app’s UI until 
//your persisted state has been retrieved and saved to redux.
import {store, persistor} from './redux/store';

//By importing BrowserRouter component from the react router dom
// I have given the functionality of routing into the application

import './index.css';
import App from './App';

//surrounding the application with 
//provider gives all components access to the store. Components can dispatch actions to it or retrieve info
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor= {persistor}>
      <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
