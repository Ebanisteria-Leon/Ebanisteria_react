import React from 'react'
import '../../../assets/css/TableSalesDate.css'

import { SideBar } from '../../UI/SideBar/SideBar'

export const TableSalesDate = () => {
    return (
        <>
            <div className='mainTable-saleDate'>

                <h3 className='title-table-salesDate'>VENTAS POR FECHA</h3>
                <SideBar />
                <section className='section__table-salesDate'>
                    <table className='table-salesDate'>
                        {/* Cabecera de la tabla */}
                        <thead>
                            <tr>
                                <th colSpan={2}>Nombre: </th>
                                <th colSpan={2}>
                                    <input type='text' className='inputSearch-table' />
                                    <button className='btnSearch-table'>
                                        <i className="fas fa-search"></i>
                                    </button>
                                </th>
                            </tr>
                            <tr className='thead'>
                                <th scope="col">Nombre del producto</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla, con la info de los productos */}
                        <tbody>
                            <tr>
                                <td>Silla</td>
                                <td>20/08/2020</td>
                                <td>$ <span id="price-total-table">2000000</span></td>
                            </tr>
                            
                            <tr>
                                <td>Comedor pino</td>
                                <td>15/08/2020</td>
                                <td>$ <span id="price-total-table">4300000</span></td>
                            </tr>

                            <tr>
                                <td>Habitacion 412</td>
                                <td>22/11/2020</td>
                                <td>$ <span id="price-total-table">2000000</span></td>
                            </tr>

                            <tr>
                                <td>Silla 111</td>
                                <td>12/11/2021</td>
                                <td>$ <span id="price-total-table">3200000</span></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}
