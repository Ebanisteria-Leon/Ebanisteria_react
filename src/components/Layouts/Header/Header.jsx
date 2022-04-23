import React from 'react'
import '../../../assets/css/Header.css'
import { NavLink } from 'react-router-dom';

//import Logo from '../../../assets/images/logo/logo3.png'


export const Header = () => {
    return (
        <div className='header'>
            <header>
                <nav className='nav__header'>
                    <ul className='nav__links'>
                        <li><NavLink to='/'>Inicio</NavLink></li>
                        <li><NavLink to='/Products'>Productos</NavLink></li>
                        <li><NavLink to='/Category'>Categorias</NavLink></li>
                        <li><NavLink to='/Login'>Iniciar sesion</NavLink></li>
                        <li><NavLink to='/Register'>Registrarse</NavLink></li>
                        <li><NavLink to='/Email'>Contactanos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
