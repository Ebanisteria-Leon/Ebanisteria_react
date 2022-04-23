import React from 'react'
import '../../../assets/css/TableOrders.css'

import { SideBar } from '../../UI/SideBar/SideBar';

export const TableOrders = () => {
    return (
        <>
            <div className='mainTable-orders'>
                <h3 className='title-table-orders'>Tabla de pedidos</h3>

                <SideBar />
                <section className='section__table-orders'>
                    <table className='table-orders'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Pedidos Pendientes</th>
                                <th scope='col'>Inactivo</th>
                                <th scope='col'>Por entregar</th>
                                <th scope='col'>Entregado</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Silla color marlon</td>
                                <td>
                                    <i className='fas fa-times-circle'></i>
                                </td>
                                <td>
                                    <i className='fa-solid fa-circle-exclamation'></i>
                                </td>
                                <td>
                                    <i className='fa-solid fa-circle-check'></i>
                                </td>
                            </tr>

                            <tr>
                                <th scope='row'>2</th>
                                <td>Silla color marlon</td>
                                <td>
                                    <i className='fas fa-times-circle'></i>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                            </tr>

                            <tr>
                                <th scope='row'>3</th>
                                <td>Silla color marlon</td>
                                <td>
                                </td>
                                <td>
                                    <i className='fa-solid fa-circle-exclamation'></i>
                                </td>
                                <td>
                                </td>
                            </tr>

                            <tr>
                                <th scope='row'>4</th>
                                <td>Silla color marlon</td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                    <i className='fa-solid fa-circle-check'></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}
