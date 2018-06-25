import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, sizes }) => {
	let sm = sizes.sm ? `col-sm-${sizes.sm}` : '';
	let md = sizes.md ? `col-md-${sizes.md}` : '';
	let lg = sizes.lg ? `col-lg-${sizes.lg}` : '';
	return <div className={`${sm} ${md} ${lg}`}> {children} </div>;
};

Column.propTypes = {
	children: PropTypes.node.isRequired,
	sizes: PropTypes.object.isRequired
};

export default Column;
