export default function clientMiddleware(client) {
  return ({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const {promise, type, ...rest} = action; // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }
      next({...rest, type: type});
      const actionPromise = promise(client);
      actionPromise.then(
        (result) => {
          if (result && result.status === 200) {
            next({...rest, result, type: type + '_SUCCESS'});
            return result;
          }
          next({...rest, result, type: type + '_FAIL'});
          return result;
        },
        (error) => {
          next({...rest, error, type: type + '_FAIL'});
          throw error;
        }
      ).catch((error) => {
        console.error('MIDDLEWARE ERROR:', error);
        next({...rest, error, type: type + '_FAIL'});
        return error;
      });
      return actionPromise;
    };
  };
}
