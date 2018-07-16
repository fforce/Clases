import React, { Component } from 'react';

class Titular extends Component {
	render () {
		const cssH1 = {
			color: '#9d2a29',
			textAlign: 'center',
			fontStyle: 'italic'
		};
		const cssP = {
			color: '#53e26a',
			textAlign: 'justify',
			fontWeight: 'bold'
		};
		return (
			<React.Fragment>
				<h1 style={cssH1}>{this.props.titleH1}</h1>
				<p style={cssP}>{this.props.textP}</p>
			</React.Fragment>
		);
	}
}

export default Titular;
