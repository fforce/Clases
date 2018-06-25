import React from 'react';
import OneTest from './OneTest';

const TestList = ({ theP, handleAlert }) => {
	return (
		<div>
			{
				theP.map((text, i) => (
					<OneTest key={i} texto={text.txt} handleAlert={handleAlert} />
				))
			}
		</div>
	);
};

export default TestList;
