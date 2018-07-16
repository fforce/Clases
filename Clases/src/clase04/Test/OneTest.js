import React from 'react';

const OneTest = ({ texto, handleAlert }) => {
	return (
		<React.Fragment>
			<p>{texto}</p>
			<button className="btn btn-info" onClick={handleAlert(texto)}>haceme click</button>
		</React.Fragment>
	);
};

export default OneTest
