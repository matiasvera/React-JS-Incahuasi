import React from 'react';
import "./styles.css";
import CartWidget from '../CartWidget/CartWidget';

const Nav = () => {
    return (
        <nav className="nav">
            <h1 className="titulo">Incahuasi Expediciones</h1>
            <ul className="navContainer">
                <li className="list"><a href="replace">Actividades</a></li>
                <li className="list"><a href="replace">Quienes Somos</a></li>
                <li className="list"><a href="replace">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
            
        
    )
}

export default Nav
