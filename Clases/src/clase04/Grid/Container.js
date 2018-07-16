import React from 'react';

// class Container extends Component {
// 	render () {
// 		const { children, cssClass } = this.props;
// 		return (
// 			<div className={cssClass}>
// 				{children}
// 			</div>
// 		);
// 	}
// }

const Container = ({ children, cssClass }) => <div className={cssClass}> {children} </div>;

Container.defaultProps = {
	cssClass: 'container'
};

export default Container;
