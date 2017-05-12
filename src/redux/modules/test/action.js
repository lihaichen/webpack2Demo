import * as TEST from './action-type';
import {get, update} from '../../../utils/action_common';
// 更新计数器
export function updateCount() {
  return update(TEST.UPDATE_COUNT)();
}

export function getApiTest() {
  return get(TEST.GET_API_TEST)('/test')();
}

export async function testCompose(store) {
  console.log('---->1');
  const result = await store.dispatch(getApiTest());
  console.log('---->2', result);
}
