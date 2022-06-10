import React from 'react'
import '../../../assets/css/Header.css'
import { NavLink } from 'react-router-dom'
import { Logout } from '../../helpers/logout/Logout'

export const Header = () => {
    const rol = localStorage.getItem('rolUser')
    const username = localStorage.getItem('username')

    return (
        <div className='header'>
            <header>
                {rol ? (
                    <>
                        <div className='perfil__header'>
                            <ul className='perfil__details'>
                                <li>
                                    <h3 className='perfil__username'>{username}</h3>
                                </li>
                                <li>
                                    <NavLink to='/'>
                                        <i className='fa fa-solid fa-user'></i>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <></>
                )}
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
                                    <NavLink to='/' onClick={Logout}>
                                        Cerrar sesión
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {rol === 'Admin' ? (
                            <>
                                <li>
                                    <NavLink to='/Admin'>Admin</NavLink>
                                </li>
                            </>
                        ) : (
                            <></>
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
