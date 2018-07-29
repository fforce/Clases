import React from 'react';
import { Column } from '../../clase04/Grid';
import './Reloj.css'

const Reloj = ({titulo, hora, onClickSelected, classSelected}) => (

//Como ya se que recibo "props" las destructuro para usarlas

	<Column sizes={{lg: 3}}>
		<div className="card">
			<div className="card-header" onClick={onClickSelected} >
				{titulo}
			</div>
			<div className={ "card-body " + classSelected }>{hora.toLocaleTimeString()}</div>
		</div>
	</Column>
);

/*
const Reloj = ({titulo, hora, onClickSelected, classSelected}) => {

//Como ya se que recibo "props" las destructuro para usarlas
//esta es la forma de hacerlo si tengo q agregar logica

return (
	<Column sizes={{lg: 3}}>
		<div className="card">
			<div className="card-header" onClick={onClickSelected} >
				{titulo}
			</div>
			<div className={ "card-body " + classSelected }>{hora.toLocaleTimeString()}</div>
		</div>
	</Column>
	el hijo ejecuta el click, el padre toma el evento, y llama al evento del padre
	con una funcion anonima () => eventoprop(item)
)
}*/


export default Reloj;
