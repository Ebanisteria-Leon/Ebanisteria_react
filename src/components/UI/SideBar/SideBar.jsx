import React, {useEffect, useState} from 'react'
import '../../../assets/css/Sidebar.css'
import logoDash from '../../../assets/images/logo.png'
import foto from '../../../assets/images/85535657.jpg'

import { useSidebar } from '../../hooks/useSidebar'
import { NavLink } from 'react-router-dom'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import { Logout } from '../../helpers/logout/Logout'

import axios from 'axios'

export const SideBar = ({ url }) => {
    const [{ buscador }, dispatch] = useStateValue()
    const { cambiar_sidebar } = useSidebar()
    const [usuario, setUsuario] = useState({})
    let idUser = localStorage.getItem('idUser')

    const capturarBuscador = () => {
        const buscador = document.getElementById('buscador')
        axios.get(url + buscador.value).then((data) => {
            dispatch({
                type: actionTypes.BUSCADOR,
                data: data.data.results,
            })
        })
    }

    const obtenerUsuario = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/users/usuario/" + idUser)
        const responseJSON =await response.json()
        setUsuario(responseJSON)
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])
    

    const username = localStorage.getItem('username')
    const rol = localStorage.getItem('rolUser')

    return (
        <>
            <div className='sidebar' id='sidebar'>
                <div className='logo_content'>
                    <NavLink to='/' className='redirectHome'>
                        <div className='logo'>
                            <img src={logoDash} alt='Logo_ebanisterialeon' />
                            <div className='logo_name'>Ebanistería León</div>
                        </div>
                    </NavLink>
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
                        <input
                            type='text'
                            placeholder='Buscar'
                            id='buscador'
                            onChange={capturarBuscador}
                        />
                        <span className='tooltip'>Buscar</span>
                    </li>

                    <li>
                        <NavLink to='/Admin'>
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
                        <NavLink to='/Admin/TableCategories'>
                            <i className='fa-solid fa-folder '></i>
                            <span className='links_name'>Categorías</span>
                        </NavLink>
                        <span className='tooltip'>Categorías</span>
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
                        <NavLink to='/Admin/AgregarCategoria'>
                            <i className='fa-solid fa-file-circle-plus'></i>
                            <span className='links_name'>
                                Agregar categoría
                            </span>
                        </NavLink>
                        <span className='tooltip'>Add categoría</span>
                    </li>
                </ul>

                <div className='profile_content'>
                    <div className='profile'>
                        <div className='profile_details'>
                            <img src={usuario.image} alt='Profile_img' />
                            <div className='name_job'>
                                <div className='name'>{usuario.username}</div>

                                <div className='job'>{rol} ebanisteria</div>
                            </div>
                        </div>
                        <NavLink to='/' onClick={Logout}>
                            <i
                                className='fa-solid fa-arrow-right-from-bracket'
                                id='log_out'
                            ></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
