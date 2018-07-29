import React from 'react';
import { Column } from '../../clase04/Grid';


const PlanetaList = ({planetas, loadResidenteClick}) => {

console.log(planetas);

const planetasRender = planetas.map((item,i) =>
   <a className="nav-item nav-link" key={i} onClick={loadResidenteClick(item)} href="#">{item.titulo}</a>
)

return (
	<React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      {planetasRender}
      </div>
    </div>
  </nav>
</React.Fragment>
);
}

export default PlanetaList;
