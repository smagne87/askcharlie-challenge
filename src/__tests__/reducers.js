import reducers from '../reducers';
import * as actions from '../actions';
import customData from '../data/data';

const initialEmailState = {
  emailId: 0,
  messageList: customData,
};

const initialReducerState = {
  email: initialEmailState,
};

const Id = 24;

describe('reducer tests', () => {
  it('should return the initial state', () => {
    expect(
      reducers(undefined, {}),
    ).toEqual(initialReducerState);
  }); 

  it('should handle EMAIL_SELECTED', () => {
    expect(
      reducers(undefined, {
        type: actions.EMAIL_SELECTED,
        emailId: Id,
      }),
    ).toEqual(
      {
        email: {
          emailId: Id,
          messageList: customData,
        },
      });
  });
  it('should handle EMAIL_DELETED', () => {
    const newData = customData.filter((item) => { return item.uid !== Id; });
    expect(
      reducers(undefined, {
        type: actions.EMAIL_DELETED,
        emailId: Id,
      }),
    ).toEqual({
      email: {
        emailId: 0,
        messageList: newData,
      },
    });
  });
});
