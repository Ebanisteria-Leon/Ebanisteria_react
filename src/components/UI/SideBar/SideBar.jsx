import React from 'react'
import '../../../assets/css/Sidebar.css'
import logoDash from '../../../assets/images/logo.png'
import foto from '../../../assets/images/85535657.jpg'

import { useSidebar } from '../../hooks/useSidebar'

import { NavLink } from 'react-router-dom'

export const SideBar = () => {

    const { cambiar_sidebar } = useSidebar()

    return (
        <>
            <div className='sidebar' id='sidebar'>
                <div className='logo_content'>
                    <div className='logo'>
                        <img src={logoDash} alt='Logo_ebanisterialeon' />
                        <div className='logo_name'>Ebanisteria Leon</div>
                    </div>
                    <button
                        id='btn'
                        className='btnSidebar'
                        onClick={cambiar_sidebar}
                    >
                        <i className='fa-solid fa-bars '></i>
                    </button>
                </div>

                <ul className='nav_list'>
                    <li>
                        <i
                            id='btn'
                            onClick={cambiar_sidebar}
                            className='fa-solid fa-magnifying-glass '
                        ></i>
                        <input type='text' placeholder='Buscar' />
                        <span className='tooltip'>Buscar</span>
                    </li>

                    <li>
                        <NavLink to='/'>
                            <i className='fa-solid fa-house '></i>
                            <span className='links_name'>Inicio</span>
                        </NavLink>
                        <span className='tooltip'>Inicio</span>
                    </li>

                    <li>
                        <NavLink to='/Admin/TableRol'>
                            <i className='fa-solid fa-user-group '></i>
                            <span className='links_name'>Usuarios</span>
                        </NavLink>
                        <span className='tooltip'>Usuarios</span>
                    </li>

                    <li>
                        <a href='https://mail.google.com/mail/u/5/#inbox'>
                            <i className='fa-solid fa-envelope '></i>
                            <span className='links_name'>Mensajes</span>
                        </a>
                        <span className='tooltip'>Mensajes</span>
                    </li>

                    <li>
                        <NavLink to='/Admin/TableSalesDate'>
                            <i className='fa-solid fa-chart-pie '></i>
                            <span className='links_name'>Analiticas</span>
                        </NavLink>
                        <span className='tooltip'>Analiticas</span>
                    </li>

                    <li>
                        <NavLink to='/Admin/TableProducts'>
                            <i className='fa-solid fa-folder '></i>
                            <span className='links_name'>Productos</span>
                        </NavLink>
                        <span className='tooltip'>Productos</span>
                    </li>

                    <li>
                        <NavLink to='/Admin/TableOrders'>
                            <i className='fa-solid fa-cart-shopping '></i>
                            <span className='links_name'>Ordenes</span>
                        </NavLink>
                        <span className='tooltip'>Ordenes</span>
                    </li>

                    <li>
                        <NavLink to='/Admin/AgregarProducto'>
                            <i className='fa-solid fa-file-circle-plus'></i>
                            <span className='links_name'>Agregar producto</span>
                        </NavLink>
                        <span className='tooltip'>Add producto</span>
                    </li>

                    <li>
                        <NavLink to='/clients'>
                            <i className='fa-solid fa-gear'></i>
                            <span className='links_name'>Configuracion</span>
                        </NavLink>
                        <span className='tooltip'>Configuracion</span>
                    </li>
                </ul>

                <div className='profile_content'>
                    <div className='profile'>
                        <div className='profile_details'>
                            <img src={foto} alt='Profile_img' />
                            <div className='name_job'>
                                <div className='name'>Gojan Holguin</div>

                                <div className='job'>Admin ebanisteria</div>
                            </div>
                        </div>
                        <i
                            className='fa-solid fa-arrow-right-from-bracket'
                            id='log_out'
                        ></i>
                    </div>
                </div>
            </div>
        </>
    )
}
