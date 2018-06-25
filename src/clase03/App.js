import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Listado from './Listado';
import ListadoDeNotas from './ListadoDeNotas';
import Alert from './Alert';
import Container from './Container';
import Row from './Row';
import Column from './Column';

const usuarios = ['Dario', 'Javier', 'Alejandro'];
const frutas = ['Manzana', 'Banana', 'Durazno'];
const notasArray = [
	{
		titulo: 'Cualquier cosa',
		texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		btnTxt: 'Ver más'
	},
	{
		titulo: 'Otra cosa',
		texto: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		btnTxt: 'Ver menos'
	},
	{
		titulo: 'Esta nota no tiene texto'
	},
	{
		texto: 'Esta nota no tiene titulo'
	}
];

class App extends Component {
	render () {
		return (
			<React.Fragment>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
				</div>
				<Container cssClass="container-fluid">
					<Row>
						<Column sizes={{sm: 6}}>
							<Listado items={usuarios} />
							<Listado items={frutas} />
							<Alert alertType="danger">Alerta</Alert>
							<Alert alertType="warning">Alerta</Alert>
							<Alert alertType="success">Alerta</Alert>
							<Alert>Info</Alert>
						</Column>
						<Column sizes={{sm: 6}}>
							<ListadoDeNotas notas={notasArray}>
								<h1>Mis Listas</h1>
							</ListadoDeNotas>
						</Column>
					</Row>
				</Container>

				<Container>
					<Row>
						<Column sizes={{sm: 6, md: 4}}>Columna de 6</Column>
						<Column sizes={{sm: 6, md: 4}}>Columna de 6</Column>
						<Column sizes={{md: 4}}>Columna de 6</Column>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

export default App;
