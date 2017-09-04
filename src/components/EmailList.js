import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Moment from 'react-moment';
import EmailDetail from './EmailDetail';

const EmailList = (props) => {
  const handleSelect = (emailId) => {
    props.actions.emailSelected(emailId);
  };

  const handleDelete = () => {
    props.actions.emailDeleted(props.selectedEmail.uid);
  };

  const emailClasses = (email) => {
    return `${email.read ? 'read' : 'unread'} ${email.uid === props.selectedEmail.uid ? 'selected' : ''}`;
  };
  const emailItems = props.emailList.map((item) => {
    const id = shortid.generate();

    return (
      <div
        key={id}
        className={emailClasses(item)}
        onClick={() => { handleSelect(item.uid); }}
      >
        <p>{`${item.sender} | ${item.subject} | `}
          <Moment format="ddd DD MMMM, hh:mm A">{item.time_sent}</Moment>
        </p>
      </div>
    );
  });
  return (
    <div className="email-list-container">
      <div className="toolbar">
        <button onClick={handleDelete}>X</button>
      </div>
      <div className="body">
        <div className="email-list">
          {emailItems}
        </div>
        <div className="email-detail">
          <EmailDetail email={props.selectedEmail} />
        </div>
      </div>
    </div>
  );
};

EmailList.propTypes = {
  selectedEmail: PropTypes.object.isRequired,
  emailList: PropTypes.array.isRequired,
  actions: PropTypes.shape({ // eslint-disable-line react/no-unused-prop-types
    emailSelected: PropTypes.func.isRequired,
    emailDeleted: PropTypes.func.isRequired,
  }).isRequired,
};

export default EmailList;
