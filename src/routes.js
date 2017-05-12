import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Test from './containers/test/test';
export default ({history}) => {
  return (
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={Test}/>
        <Route path="test" component={Test}/>
      </Route>
    </Router>);
};
