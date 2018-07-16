import React from 'react';
import OneAlert from './OneAlert';

const AlertApp = ({ laFuncion }) => {
	return (
		<React.Fragment>
			<OneAlert text="1er elemento" elPaseDeLaFuncionFinal={laFuncion('1er elemento')} />
			<br />
			<OneAlert text="2do elemento" elPaseDeLaFuncionFinal={laFuncion('2do elemento')} />
		</React.Fragment>
	);
};

export default AlertApp;
