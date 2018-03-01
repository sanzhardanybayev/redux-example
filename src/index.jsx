import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'normalize.css';
import "bootstrap/dist/css/bootstrap.min.css";

import App from './components/App';
import allReducers from './reducers';


//СОЗДАЕТСЯ ХРАНИЛИЩЕ
const store = createStore(allReducers,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/// ПОДСОЕДИНЕНИЕ КОМПОНЕНТА К ХРАНИЛИЩУ
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

