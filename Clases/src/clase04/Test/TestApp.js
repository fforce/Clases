import React, { Component } from 'react';
import TestList from './TestList';

class TestApp extends Component {
	constructor () {
		super();
		this.state = {
			textos: [
				{
					txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor earum expedita ea qui voluptatibus eaque laboriosam ullam incidunt. Deserunt, blanditiis, impedit? Rerum, nobis facilis doloremque culpa! Nam aliquid, quasi.'
				},
				{
					txt: 'Impedit? Rerum, nobis facilis doloremque culpa! Nam aliquid, quasi.'
				},
			]
		};
	}

	handleAlertar = texto => event => {
		alert(texto);
	}

	render () {
		const { textos } = this.state;
		return (
			<React.Fragment>
				<TestList theP={textos} handleAlert={this.handleAlertar} />
			</React.Fragment>
		);
	}
}

export default TestApp;
