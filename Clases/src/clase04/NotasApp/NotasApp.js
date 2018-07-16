import React, {Component} from 'react';
import NotaList from './NotaList';
import Container, { Row, Column } from '../Grid';

class NotasApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notas: [],
			titulo:'',
			texto: ''
		};
	}

	handleChangeTitulo = event => {
		this.setState({ titulo: event.target.value })
	}

	// handleChangeTexto = event => {
	// 	this.setState(currentState => ({ texto: event.target.value }));
	// }

	// si el cambio de estado depende del estado actual... usa una función con la forma:
	// this.setState(currentState => newState)
	// this.setState(currentState => ({ texto: event.target.value }));

	handleChangeTexto = event => {
		this.setState({ texto: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault();
		const {titulo, texto, notas} = this.state;
		if (!texto.length) {
			alert('Debes escribir un texto');
			return;
		}
		const tituloNota = titulo.length ? titulo : 'Sin titulo';
		const nuevaNota = {
			titulo: tituloNota,
			texto: texto
		};
		this.setState(() => ({
			notas: [...notas, nuevaNota],
			titulo: '',
			texto: '',
		}));
	}

	handleOnClickDelete = nota => event => {
		const { notas } = this.state;
		const newNote = notas.filter(oldNote => oldNote !== nota);
		this.setState(() => ({
			notas: [...newNote],
			titulo: '',
			texto: '',
		}));
	}

	render() {
		return (
			<React.Fragment>
				<Container>
					<Row aditionalClasses="justify-content-center">
						<Column sizes={{lg: 4}}>
							<h1>Mis notas</h1>
						</Column>
					</Row>
					<Row aditionalClasses="justify-content-center">
						<Column sizes={{lg: 4}}>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<input
										className="form-control"
										placeholder="Titulo (opcional)"
										onChange={this.handleChangeTitulo}
										value={this.state.titulo}
									/>
									<br />
									<textarea
										className="form-control"
										placeholder="Escribe una nota (obligatorio)"
										onChange={this.handleChangeTexto}
										value={this.state.texto}
									/>
									<br />
									<input className="form-control btn btn-primary" type="submit" value="GUARDAR NOTA"/>
								</div>
							</form>
						</Column>
					</Row>
					<Row>
						<NotaList notas={this.state.notas} onClickDelete={this.handleOnClickDelete}/>
					</Row>
				</Container>
			</React.Fragment>
		);
	}

}

export default NotasApp;
