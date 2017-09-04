import { createSelector } from 'reselect';
import find from 'lodash.find';

const getEmailSelected = (state) => { return state.email.emailId; };
const getEmailList = (state) => { return state.email.messageList; };

const getEmailDetail = createSelector(
  [getEmailSelected, getEmailList],
  (emailId, list) => {
    const found = find(list, (item) => {
      return item.uid === emailId;
    });

    if (typeof found !== 'undefined') {
      found.read = true;
      return found;
    }

    return {};
  },
);

export default getEmailDetail;
