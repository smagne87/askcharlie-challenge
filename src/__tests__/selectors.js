import getEmailDetail from '../selectors';
import customData from '../data/data';

const initialReducerState = {
  email: {
    emailId: 0,
    messageList: customData,
  },
};

describe('selectors', () => {
  it('should handle getEmailDetail selector', () => {
    expect(getEmailDetail(initialReducerState)).toEqual({});
  });
});
