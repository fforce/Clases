import React, { Component } from 'react';

class InputText extends Component {
	render () {
		return (
			<React.Fragment>
				<label>{this.props.labelText}:</label>
				<input type="text" />
			</React.Fragment>
		);
	}
}

export default InputText;
