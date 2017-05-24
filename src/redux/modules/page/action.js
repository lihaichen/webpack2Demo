import * as PAGE from './action-type';
import {update} from '../../../utils/action_common';

export function updateTestPageStatus(data) {
  return update(PAGE.UPDATE_TEST_PAGE_STATUS)(data);
}
