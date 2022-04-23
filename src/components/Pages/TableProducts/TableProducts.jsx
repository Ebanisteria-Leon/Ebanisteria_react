import React from 'react'
import '../../../assets/css/TableProduct.css'
import Mueble_Azul from '../../../assets/images/muebles-promo/mueble-azul.png'

import { Imagen } from '../../UI/Imagen/Imagen'
import { SideBar } from '../../UI/SideBar/SideBar'

export const TableProducts = () => {
    return (
        <>
            <div className='mainTable-products'>
                <h3 className='title-table-products'>PRODUCTOS</h3>
                <SideBar />
                <section className='section__table-products'>
                    <table className='table-products'>
                        {/* Cabecera de la tabla */}
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Categoria</th>
                                <th scope='col'>Descripcion</th>
                                <th scope='col'>Color</th>
                                <th scope='col'>Precio</th>
                                <th scope='col'>Imagen</th>
                                <th scope='col'>Acciones</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla, coff la info de los productos */}
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Silla Madera obscura</td>
                                <td>Sillas</td>
                                <td>
                                    Silla en madera obscura, con respaldo hecho
                                    en espuma comoda
                                </td>
                                <td>Café obscuro</td>
                                <td>
                                    $
                                    <span className='priceProducts-table'>
                                        1.200.000
                                    </span>
                                </td>
                                <td>
                                    <Imagen
                                        clase='img-table'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                </td>
                                <td>
                                    <div className='buttonsTable-actions'>
                                        <button className='btnAction-table update-products'>
                                            <i className='fas fa-edit'></i>
                                        </button>
                                        <button className='btnAction-table delete-products'>
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Silla Madera obscura</td>
                                <td>Sillas</td>
                                <td>
                                    Silla en madera obscura, con respaldo hecho
                                    en espuma comoda
                                </td>
                                <td>Café obscuro</td>
                                <td>
                                    $
                                    <span className='priceProducts-table'>
                                        1.200.000
                                    </span>
                                </td>
                                <td>
                                    <Imagen
                                        clase='img-table'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                </td>
                                <td>
                                    <div className='buttonsTable-actions'>
                                        <button className='btnAction-table update-products'>
                                            <i className='fas fa-edit'></i>
                                        </button>
                                        <button className='btnAction-table delete-products'>
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Silla Madera obscura</td>
                                <td>Sillas</td>
                                <td>
                                    Silla en madera obscura, con respaldo hecho
                                    en espuma comoda
                                </td>
                                <td>Café obscuro</td>
                                <td>
                                    $
                                    <span className='priceProducts-table'>
                                        1.200.000
                                    </span>
                                </td>
                                <td>
                                    <Imagen
                                        clase='img-table'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                </td>
                                <td>
                                    <div className='buttonsTable-actions'>
                                        <button className='btnAction-table update-products'>
                                            <i className='fas fa-edit'></i>
                                        </button>
                                        <button className='btnAction-table delete-products'>
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Silla Madera obscura</td>
                                <td>Sillas</td>
                                <td>
                                    Silla en madera obscura, con respaldo hecho
                                    en espuma comoda
                                </td>
                                <td>Café obscuro</td>
                                <td>
                                    $
                                    <span className='priceProducts-table'>
                                        1.200.000
                                    </span>
                                </td>
                                <td>
                                    <Imagen
                                        clase='img-table'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                </td>
                                <td>
                                    <div className='buttonsTable-actions'>
                                        <button className='btnAction-table update-products'>
                                            <i className='fas fa-edit'></i>
                                        </button>
                                        <button className='btnAction-table delete-products'>
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}
