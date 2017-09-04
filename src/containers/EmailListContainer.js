import { connect } from 'react-redux';
import EmailList from '../components/EmailList';
import getEmailDetail from '../selectors';
import { emailSelected, emailDeleted } from '../actions';

const mapStateToProps = (state) => {
  return {
    selectedEmail: getEmailDetail(state),
    emailList: state.email.messageList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      emailSelected: (emailId) => {
        dispatch(emailSelected(emailId));
      },
      emailDeleted: (emailId) => {
        dispatch(emailDeleted(emailId));
      },
    },
  };
};

const EmailListContainer = connect(mapStateToProps, mapDispatchToProps)(EmailList);

export default EmailListContainer;
