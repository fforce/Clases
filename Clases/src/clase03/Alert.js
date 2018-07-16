import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class Alert extends Component {
// 	render () {
// 		const { children, alertType } = this.props;
// 		return (
// 			<div className={`alert alert-${alertType}`}>
// 				{children}
// 			</div>
// 		);
// 	}
// }

const Alert = ({ children, alertType }) => {
	return (
		<div className={`alert alert-${alertType}`}>
			{children}
		</div>
	);
};

Alert.propTypes = {
	children: PropTypes.node.isRequired,
	alertType: PropTypes.oneOf(['success', 'warning', 'danger', 'info'])
};

Alert.defaultProps = {
	alertType: 'info'
};

export default Alert;
