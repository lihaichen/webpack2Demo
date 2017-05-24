import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import test from './modules/test/reducer';
import page from './modules/page/reducer';
export default combineReducers({
  routing: routerReducer,
  test,
  page
});
