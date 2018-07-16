import React from 'react';
import { Column } from '../../clase04/Grid';
import './Reloj.css'

const Reloj = ({titulo, hora, onClickSelected, selected}) => (

	<Column sizes={{lg: 3}}>
		<div className="card">
			<div className="card-header" onClick={onClickSelected} >
				{titulo}			
			</div>
			<div className={selected ? "card-body selected": "card-body"}>{hora.toLocaleTimeString()}</div>
		</div>
	</Column>
);


export default Reloj;
