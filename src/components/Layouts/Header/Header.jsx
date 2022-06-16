import React, {useState, useEffect} from 'react'
import '../../../assets/css/Header.css'
import { NavLink } from 'react-router-dom'
import { Logout } from '../../helpers/logout/Logout'

export const Header = () => {
    const rol = localStorage.getItem('rolUser')
    let idUser = localStorage.getItem('idUser')
    const [usuario, setUsuario] = useState({})

    const obtenerUsuario = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/users/usuario/" + idUser)
        const responseJSON =await response.json()
        setUsuario(responseJSON)
    }


    useEffect(() => {
        obtenerUsuario()
    }, [])

    return (
        <div className='header'>
            <header>
                {rol ? (
                    <>
                        <div className='perfil__header'>
                            <ul className='perfil__details'>
                                <li className="li_header">
                                    <div className="titu_usuario">
                                        <h3 className='perfil__username'>
                                            {usuario.username}
                                        </h3>
                                    </div>
                                    <NavLink to='/PerfilUsuario' className="access">
                                        <img src={usuario.image} alt="" />
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
                        <li>
                            <NavLink to='/Contactanos'>Contactanos</NavLink>
                        </li>

                        {rol === 'Admin' ? (
                            <>
                                <li>
                                    <NavLink to='/Admin'>Administración</NavLink>
                                </li>
                            </>
                        ) : (
                            <></>
                        )}

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
                    </ul>
                </nav>
            </header>
        </div>
    )
}
