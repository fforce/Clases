import React, { Component } from 'react';
import InputText from './InputText';
import Desplegable from './Desplegable';

class Formulario extends Component {
	render () {
		return (
			<form>
				<InputText labelText="Nombre" />
				<br />
				<InputText labelText="Apellido" />
				<br />
				<InputText labelText="Correo electrónico" />
				<br />
				<Desplegable />
				<br />
				<button type="submit">ENVIAR</button>
			</form>
		);
	}
}

export default Formulario;
