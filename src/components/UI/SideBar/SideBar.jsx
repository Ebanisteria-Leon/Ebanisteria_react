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
                data: data.data,
            })
        })
    }

    const obtenerUsuario = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/users/usuario/" + idUser)
        const responseJSON =await response.json()
        setUsuario(responseJSON)
    }

    const mostrarMas = () =>{
        const ul = document.querySelector('.ulDeMas')
        const vermas = document.querySelector('.vermas')
        const vermas2 = document.querySelector('.vermas2')

        ul.style.opacity="1"
        ul.style.visibility="visible"
        ul.style.right="-84px"
        vermas.style.display="none"
        vermas2.style.display="block"
    }

    const mostrarMenos = () =>{
        const ul = document.querySelector('.ulDeMas')
        const vermas = document.querySelector('.vermas')
        const vermas2 = document.querySelector('.vermas2')

        ul.style.opacity="0"
        ul.style.visibility="hidden"
        ul.style.right="0px"
        vermas.style.display="block"
        vermas2.style.display="none"
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
                            <div className='logo_name'>Ebanister??a Le??n</div>
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

                <div className="navAdmin">
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
                        <NavLink to='/Admin' className="casa" activeclassname='active'>
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
                            <span className='links_name'>Pedidos</span>
                        </NavLink>
                        <span className='tooltip'>Pedidos</span>
                    </li>

                    <li>
                        <NavLink to='/Admin/TableOrders'>
                            <i className='fa-solid fa-cart-shopping '></i>
                            <span className='links_name'>Estado Pedidos</span>
                        </NavLink>
                        <span className='tooltip'>Estado Pedidos</span>
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
                            <span className='links_name'>Categor??as</span>
                        </NavLink>
                        <span className='tooltip'>Categor??as</span>
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
                                Agregar categor??a
                            </span>
                        </NavLink>
                        <span className='tooltip'>Add categor??a</span>
                    </li>

                    <p className="vermas" onClick={mostrarMas}>Ver M??s</p>
                    <p className="vermas2" onClick={mostrarMenos}>Ver Menos</p>

                    <ul className='nav_list ulDeMas'>
                        <li className="liDeMas" >
                            <NavLink to='/Admin/AgregarPromocion'>
                                <i className='fa-solid fa-file-circle-plus'></i>
                                <span className='links_name'>
                                    Agregar promoci??n
                                </span>
                            </NavLink>
                            <span className='tooltip'>Add promocion</span>
                        </li>
                        <li className="liDeMas" >
                            <NavLink to='/Admin/TablePromociones'>
                                <i className='fa-solid fa-folder '></i>
                                <span className='links_name'>
                                    Promociones
                                </span>
                            </NavLink>
                            <span className='tooltip'>Promociones</span>
                        </li>
                    </ul>
                </ul>
                </div>

                <div className='profile_content'>
                    <div className='profile'>
                        <div className='profile_details'>
                            <NavLink to='/perfilUsuario'>
                            <img src={usuario.image} alt='Profile_img' />
                            </NavLink>
                            <div className='name_job'>
                                <div className='name'>{usuario.username}</div>

                                <div className='job'>{rol} ebanisteria</div>
                            </div>
                        </div>
                        <NavLink to='/'>
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
