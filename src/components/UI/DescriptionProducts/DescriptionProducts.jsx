import React from 'react'
import '../../../assets/css/DescriptionProducts.css'
import '../../../assets/css/CerrarModal.css'

import { useCounter } from '../../hooks/useCounter'

import { Imagen } from '../Imagen/Imagen'
import img1 from '../../../assets/images/muebles-promo/mueble-azul.png'

export const DescriptionProducts = ({ id, click }) => {
    const { counter, add, remove } = useCounter()

    return (
        <>
            <div className='mainDescriptionProducts' id={id}>
                <div className='productsImage' id='contenedor_img'>
                    <Imagen clase='products_img' url={img1} />
                </div>

                <div className='productsInfo'>
                    <div className='productsInfo_name'>
                        <h2>Mesa de noche prepaga de 2 cajones</h2>
                        <h3>Prepaid 2 Drawer Nightstand</h3>
                    </div>

                    <div className='productsInfo_description'>
                        <h3>$ 828.370</h3>
                        <div className='descripction_pagragh'>
                            <span className='paragraph-span'>
                                Dimensiones:
                                <p className='paragraph-p'>
                                    Largo: 15.8 Pulgadas
                                </p>
                                <p className='paragraph-p'>
                                    Ancho: 20.5 Pulgadas
                                </p>
                                <p className='paragraph-p'>Alto: 27 Pulgadas</p>
                            </span>

                            <span className='paragraph-span'>
                                Color:
                                <p className='paragraph-p'>Negro mate</p>
                            </span>

                            <span className='paragraph-span'>
                                Descripcion:
                                <p className='paragraph-p'>
                                    Madera natural lacada acabados en laminado
                                    negro profundo
                                </p>
                                <p className='paragraph-p'>
                                    Fabricado de madera compuesta
                                </p>
                                <p className='paragraph-p'>
                                    Composicion: de carbono con un resplado
                                    robusto
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className='productsActions'>
                        <div className='addProducts'>
                            <button
                                className='buttonProducts addProducts_add'
                                onClick={add}
                            >
                                <i className='fas fa-plus'></i>
                            </button>
                            <div className='addProducts_count'>
                                <span id='counter'>{counter}</span>
                            </div>
                            <button
                                className='buttonProducts addProducts_remove'
                                onClick={remove}
                            >
                                <i className='fas fa-minus'></i>
                            </button>
                        </div>

                        <div className='buyProducts'>
                            <button className='buttonProducts_buy'>
                                <i className='fas fa-shopping-cart'></i>
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                </div>

                <div className='close'>
                    <button className='buttonClose' onClick={click}>
                        <i className='fas fa-times-circle'></i>
                    </button>
                </div>
            </div>
        </>
    )
}
