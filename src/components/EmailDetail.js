import React from 'react';
import PropTypes from 'prop-types';

const EmailDetail = (props) => {
  return (
    <div>
      <p>{props.email.message}</p>
    </div>
  );
}

EmailDetail.propTypes = {
  email: PropTypes.object,
};

EmailDetail.defaultProps = {
  email: {},
};

export default EmailDetail;
