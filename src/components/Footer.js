import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div className="footer">
      <h3>{props.title}</h3>
      <p><small>{props.copyrightText}</small></p>
    </div>
  );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  copyrightText: PropTypes.string.isRequired,
};

export default Footer;
