import React from 'react';
import {Link} from 'react-router-dom';


const MenuNav = () => {

return (
	<React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
          <Link to='/' className='nav-item nav-link' >Home  </Link>
					<Link to='/Planetas' className='nav-item nav-link'  > Planetas</Link>
					<Link to='/Contacto' className='nav-item nav-link' >Contacto  </Link>
      </div>
    </div>
  </nav>
</React.Fragment>
);
}

export default MenuNav;
