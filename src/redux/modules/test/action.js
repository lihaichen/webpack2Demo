import * as TEST from './action-type';
import {get, update} from '../../../utils/action_common';

export function getApiTest() {
  return get(TEST.GET_API_TEST)('/test')();
}

export async function testCompose(store) {
  console.log('---->1');
  const result = await store.dispatch(getApiTest());
  console.log('---->2', result);
}
