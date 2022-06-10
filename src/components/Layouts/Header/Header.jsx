import React from 'react'
import '../../../assets/css/Header.css'
import { NavLink } from 'react-router-dom'
import { Logout } from '../../helpers/logout/Logout'

export const Header = () => {
    const rol = localStorage.getItem('rolUser')

    return (
        <div className='header'>
            <header>
                <nav className='nav__header'>
                    <ul className='nav__links'>
                        <li>
                            <NavLink to='/'>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Products'>Productos</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Category'>Categorias</NavLink>
                        </li>
                        {!rol ? (
                            <>
                                <li>
                                    <NavLink to='/Login'>
                                        Iniciar sesion
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Register'>
                                        Registrarse
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to='/Logout' onClick={Logout}>
                                        Cerrar sesión
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <li>
                            <NavLink to='/Contactanos'>Contactanos</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
