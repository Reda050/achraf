import React from 'react';
import {Link} from 'react-router-dom'
class Navbar extends React.Component {
    render() {
        return(
            < nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/logo" className="navbar-brand">Bienvenue</Link>
            <div className="navbar-collabse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
            <Link id="liste" to="/Liste" className="nav-link">Liste des motos</Link>
            </li>
              <li className="navbar-item">
            <Link id="liste" to="/Liste2" className="nav-link">Liste des voitures</Link>
            </li>

             <li className="navbar-item">
             <Link to="/Ajout" className="nav-link">Ajout des motos </Link>
             </li>
              <li className="navbar-item">
             <Link to="/AjoutDeux" className="nav-link">Ajout des voitures</Link>
             </li> 
                         </ul>
            </div>
        </nav>    
        )
    }

}
export default Navbar;