import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Column extends Component {
	render () {
		const { children, sizes } = this.props;
		let sm = sizes.sm ? `col-sm-${sizes.sm}` : '';
		let md = sizes.md ? `col-md-${sizes.md}` : '';
		let lg = sizes.lg ? `col-lg-${sizes.lg}` : '';
		return (
			// <div className={sizes.reduce((ac, sz) => `${ac} ${sz}`)}>
			<div className={`${sm} ${md} ${lg}`}>
				{children}
			</div>
		);
	}
}

Column.propTypes = {
	children: PropTypes.node.isRequired,
	sizes: PropTypes.object.isRequired
	// cssClass: PropTypes.string.isRequired
};

export default Column;
