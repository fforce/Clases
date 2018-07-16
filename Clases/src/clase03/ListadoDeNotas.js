import React, { Component } from 'react';
// import React from 'react';
import Nota from './Nota';
import PropTypes from 'prop-types';

class ListadoDeNotas extends Component {
	render () {
		const { children } = this.props;
		const notasFinales = this.props.notas.map((nota, i) => <Nota key={i} titulo={nota.titulo} texto={nota.texto} btnTxt={nota.btnTxt} />);
		return (
			<React.Fragment>
				{children}
				{notasFinales.length ? notasFinales : 'No hay notas para mostrar'}
			</React.Fragment>
		);
	}
}

// const ListadoDeNotas = props => (
// 	<div>
// 		{props.children}
// 		{props.notas.map((nota, i) => <Nota key={i} titulo={nota.titulo} texto={nota.texto} />)}
// 	</div>
// );
ListadoDeNotas.propTypes = {
	notas: PropTypes.array.isRequired
};

export default ListadoDeNotas;
