import React, { Component } from 'react';

class Desplegable extends Component {
	render () {
		return (
			<select>
				<option value="Arg">Argentina</option>
				<option value="Bra">Brasil</option>
				<option value="Col">Colombia</option>
				<option value="Uru">Uruguay</option>
			</select>
		);
	}
}

export default Desplegable;
