import * as PAGE from './action-type';
import {Map} from 'immutable';

const initialState = Map({
  test: Map({
    count: 0,
  }),
});
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PAGE.UPDATE_TEST_PAGE_STATUS:
      return state.updateIn(['test'], data => data.merge(action.data));
    default:
      return state;
  }
}

