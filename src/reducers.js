import { combineReducers } from 'redux';
import * as actions from './actions';
import customData from './data/data';

const run = [];

const initialEmailState = {
  emailId: 0,
  messageList: customData,
};

run[actions.EMAIL_DELETED] = (state, action) => {
  return {
    ...state,
    emailId: 0,
    messageList: state.messageList.filter((item) => { return item.uid !== action.emailId; }),
  };
};

run[actions.EMAIL_SELECTED] = (state, action) => {
  return {
    ...state,
    emailId: action.emailId,
  };
};


const emailReducer = (state = initialEmailState, action) => {
  if (action.type in run) {
    return run[action.type](state, action);
  }

  return state;
};
const reducers = combineReducers({
  email: emailReducer,
});

export default reducers;
