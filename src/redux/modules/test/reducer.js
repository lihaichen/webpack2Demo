import * as TEST from './action-type';
import requestStatus from '../../requestStatus';
import {Map} from 'immutable';

const initialState = Map({
  count: 0,
  fetchData: Map({
    status: requestStatus.LOAD_INIT,
    data: {}
  }),
});
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TEST.UPDATE_COUNT:
      return state.setIn(['count'], state.get('count') + 1);
    default:
      return state;
  }
}

