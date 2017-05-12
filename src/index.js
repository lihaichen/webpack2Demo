import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducer';
import createMiddleware from './redux/middleware/clientMiddleware';
const store = createStore(reducer, applyMiddleware(createMiddleware));

ReactDOM.render(
  (<Provider store={store}>
    {routes}
  </Provider>), document.getElementById('root'));
