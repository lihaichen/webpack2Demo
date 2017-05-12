export const get = type => url => params => {
  return {
    type: type,
    promise: (client) => {
      return client.get(url, {
        params: params
      });
    }
  };
};

export const put = type => url => data => {
  return {
    type: type,
    promise: (client) => {
      return client.put(url, {data});
    }
  };
};

export const del = type => url => {
  return {
    type: type,
    promise: (client) => {
      return client.del(url);
    }
  };
};

export const post = type => url => data => {
  return {
    type: type,
    promise: (client) => {
      return client.post(url, {data});
    }
  };
};
// 同步操作的action
export const update = type => data => {
  return {
    type: type,
    data: data
  };
};

/*
* example
*
 export function getEmployeeInfo(id) {
 return get('employee')(`/java/${id}`)();
 }
 * */
