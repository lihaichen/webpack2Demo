import * as TEST from './action-type';
// 更新计数器
export function updateCount() {
  return {
    type: TEST.UPDATE_COUNT
  };
}

export function getApiTest() {
  return {
    type: TEST.GET_API_TEST,
    promise: (client) => {
      return client.get('/api/test');
    }
  };
}

export async function testCompose(store) {
  console.log('---->1');
  const result = await store.dispatch(getApiTest());
  console.log('---->2', result);
}
