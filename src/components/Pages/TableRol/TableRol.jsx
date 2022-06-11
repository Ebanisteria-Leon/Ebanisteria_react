import React from 'react'
import '../../../assets/css/TableRol.css'

import { SideBar } from '../../UI/SideBar/SideBar'

export const TableRol = () => {

const rol = localStorage.getItem('rolUser')
const username = localStorage.getItem('username')

    return (
        <>
            <div className='mainTable-assingRol'>
                <h3 className='title-table-assingRol'>ASIGNAR ROL</h3>
                <SideBar />
                <section className='section__table-assingRol'>
                    <table className='table-assingRol'>
                        <thead>
                            <tr>
                                <th scope='col'>
                                    Listado de usuarios de produccion
                                </th>
                                <th scope='col'>Rol</th>
                                <th scope='col'>Acciones</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla, coff la info de los productos */}
                        <tbody>
                            <tr>
                                <td>{username}</td>
                                <td>{rol}</td>
                                <td>
                                    <label className='lbl'>
                                        <input
                                            type='checkbox'
                                            className='switch'
                                        />
                                        <span>
                                            <i className='fas fa-check on'></i>
                                            <i className='fas fa-times off'></i>
                                        </span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td>Cleopatra Medina</td>
                                <td>Cleopatra Medina</td>
                                <td>
                                    <label className='lbl'>
                                        <input
                                            type='checkbox'
                                            className='switch'
                                        />
                                        <span>
                                            <i className='fas fa-check on'></i>
                                            <i className='fas fa-times off'></i>
                                        </span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td>Sumaira Gonzales</td>
                                <td>Sumaira Gonzales</td>
                                <td>
                                    <label className='lbl'>
                                        <input
                                            type='checkbox'
                                            className='switch'
                                        />
                                        <span>
                                            <i className='fas fa-check on'></i>
                                            <i className='fas fa-times off'></i>
                                        </span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td>Valentina Torres</td>
                                <td>Valentina Torres</td>
                                <td>
                                    <label className='lbl'>
                                        <input
                                            type='checkbox'
                                            className='switch'
                                        />
                                        <span>
                                            <i className='fas fa-check on'></i>
                                            <i className='fas fa-times off'></i>
                                        </span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td>Cristian Angulo</td>
                                <td>Cristian Angulo</td>
                                <td>
                                    <label className='lbl'>
                                        <input
                                            type='checkbox'
                                            className='switch'
                                        />
                                        <span>
                                            <i className='fas fa-check on'></i>
                                            <i className='fas fa-times off'></i>
                                        </span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td>Victor Callejas</td>
                                <td>Victor Callejas</td>
                                <td>
                                    <label className='lbl'>
                                        <input
                                            type='checkbox'
                                            className='switch'
                                        />
                                        <span>
                                            <i className='fas fa-check on'></i>
                                            <i className='fas fa-times off'></i>
                                        </span>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}
