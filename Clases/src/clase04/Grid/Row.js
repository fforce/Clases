import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, aditionalClasses }) => <div className={`row ${aditionalClasses}`}> {children} </div>;

Row.propTypes = {
	children: PropTypes.node.isRequired
};

Row.defaultProps = {
	aditionalClasses: ''
};

export default Row;
