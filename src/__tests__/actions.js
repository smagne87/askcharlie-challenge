import * as actions from '../actions';

describe('actions', () => {
  it('should create action select an email', () => {
    const emailId = 24;
    const expectedAction = {
      type: actions.EMAIL_SELECTED,
      emailId,
    };
    expect(actions.emailSelected(emailId)).toEqual(expectedAction);
  });
  it('should create action delete an email', () => {
    const emailId = 24;
    const expectedAction = {
      type: actions.EMAIL_DELETED,
      emailId,
    };
    expect(actions.emailDeleted(emailId)).toEqual(expectedAction);
  });
});
