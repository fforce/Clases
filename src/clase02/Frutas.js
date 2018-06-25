import React, { Component } from 'react';

const frutas = ['Manzana', 'Naranja', 'Pera', 'Limón', 'Banana'];
const frutasSinCitrico = frutas.filter(fruta => (fruta !== 'Naranja' && fruta !== 'Limón') ? fruta : null).map((fruta, indice) => <li key={indice}> {fruta} </li>);

class Frutas extends Component {
	render () {
		return (
			<React.Fragment>
				<h1>Listado de Frutas</h1>
				<ul>
					{frutasSinCitrico}
				</ul>
			</React.Fragment>
		);
	}
}

export default Frutas;
