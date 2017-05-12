import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducer';
import createMiddleware from './redux/middleware/clientMiddleware';
import ApiClient from './utils/api_client';
const client = new ApiClient();
const store = createStore(reducer, applyMiddleware(createMiddleware(client)));
ReactDOM.render(
  (<Provider store={store}>
    {routes}
  </Provider>), document.getElementById('root'));
