import React from 'react';
import { Column } from '../../clase04/Grid';


const ResidentesList = ({residentes}) => {

console.log(residentes);

const residentesRender = residentes.map((item,i) =>
   <li key={i} href="#" >{item}</li>
)

return (
	<React.Fragment>

    <ul>
      {residentesRender}
    </ul>

</React.Fragment>
);
}

export default ResidentesList;
