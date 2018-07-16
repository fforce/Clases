import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import React from 'react';

class Nota extends Component {
	render () {
		const { titulo, texto, btnTxt } = this.props;
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{titulo}</h5>
					<p className="card-text">{texto}</p>
					<a href="#a" className="btn btn-primary">{btnTxt}</a>
				</div>
			</div>
		);
	}
}

// const Nota = ({ titulo, texto }) => (
// 	<React.Fragment>
// 		<h3>{titulo}</h3>
// 		<p>{texto}</p>
// 	</React.Fragment>
// );

Nota.propTypes = {
	titulo: PropTypes.string.isRequired,
	texto: PropTypes.string.isRequired
};

Nota.defaultProps = {
	titulo: '=== Sin título suministrado ===',
	texto: '=== Sin texto suministrado ===',
	btnTxt: 'Click'
};

export default Nota;
