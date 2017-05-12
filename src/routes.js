import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Test from './containers/test/test';

export default(
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Test}/>
      <Route path="test" component={Test}/>
    </Route>
  </Router>
);
