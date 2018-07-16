import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
	constructor (props) {
		super(props);
		this.state = {
			count: props.initialValue
		};
	}

	handleIncrement = () => this.setState(state => ({count: state.count + 1}));

	handleDecrement = () => this.setState(state => ({count: state.count - 1}));

	render () {
		return (
			<React.Fragment>
				<h1>{this.state.count}</h1>
				<button className="btn btn-danger" onClick={this.handleIncrement}> Incrementar </button>
				<button className="btn btn-danger" onClick={this.handleDecrement}> Decrementar </button>
			</React.Fragment>
		);
	}
}

Counter.propTypes = {
	initialValue: PropTypes.number.isRequired
};

export default Counter;
