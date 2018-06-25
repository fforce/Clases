import React from 'react';

const Listado = (props) => {
	const items = props.items.map((item, index) => <li className="list-group-item" key={index}> {item} </li>);
	return <ul className="list-group list-group-flush"> {items} </ul>;
};

export default Listado;
