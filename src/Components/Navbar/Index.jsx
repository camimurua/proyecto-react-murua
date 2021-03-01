import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/Index";
import './styleNavbar.css';

import {useContext} from 'react';
import {GlobalContext} from '../../Context/CartContext';

const NavbarComponent = () => {

    const { list } = useContext(GlobalContext);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Tienda de Celulares</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/categoria/motorola">
                            MOTOROLA</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/categoria/samsung">
                            SAMSUNG</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/categoria/lg">
                            LG</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/carrito">
                                <CartWidget cantidadTotal={list.cantidadTotal}/>
                        </NavLink>
                    </li>  
                </ul>
        </div>
    </nav>
  </>  
  );
}

export default NavbarComponent;