import React from 'react'
import '../../../assets/css/Products.css'
import Mueble_Azul from '../../../assets/images/muebles-promo/mueble-azul.png'
import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.jpg'

import { useViewModal } from '../../hooks/useViewModal'
import { useCloseModal } from '../../hooks/useCloseModal'

import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { DescriptionProducts } from '../../UI/DescriptionProducts/DescriptionProducts'
import { Imagen } from '../../UI/Imagen/Imagen'

export const Products = () => {
    const { mostrar_producto } = useViewModal()
    const { cerrar_producto } = useCloseModal()

    return (
        <>
            <div className='mainProducts'>
                <Barra />
                <Header />

                <h3 className='title-category'>Productos nuevos</h3>

                <section className='section__products'>
                    <div className='product-card'>
                        <div className='product-img-container'>
                            <div className='product-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='product-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='product-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='product-box-text'>
                            <div className='product-category'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='product-title'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='price'>
                                <span className='product-price'>
                                    $1.809.900
                                </span>
                            </div>
                        </div>

                        <div className='product-btn'>
                            <button
                                className='buy-btn'
                                onClick={mostrar_producto}
                            >
                                <i className='fas fa-shopping-cart'></i>
                                Compralo ahora!
                            </button>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-img-container'>
                            <div className='product-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='product-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='product-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='product-box-text'>
                            <div className='product-category'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='product-title'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='price'>
                                <span className='product-price'>
                                    $1.809.900
                                </span>
                            </div>
                        </div>

                        <div className='product-btn'>
                            <button
                                className='buy-btn'
                                onClick={mostrar_producto}
                            >
                                <i className='fas fa-shopping-cart'></i>
                                Compralo ahora!
                            </button>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-img-container'>
                            <div className='product-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='product-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='product-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='product-box-text'>
                            <div className='product-category'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='product-title'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='price'>
                                <span className='product-price'>
                                    $1.809.900
                                </span>
                            </div>
                        </div>

                        <div className='product-btn'>
                            <button
                                className='buy-btn'
                                onClick={mostrar_producto}
                            >
                                <i className='fas fa-shopping-cart'></i>
                                Compralo ahora!
                            </button>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-img-container'>
                            <div className='product-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='product-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='product-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='product-box-text'>
                            <div className='product-category'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='product-title'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='price'>
                                <span className='product-price'>
                                    $1.809.900
                                </span>
                            </div>
                        </div>

                        <div className='product-btn'>
                            <button
                                className='buy-btn'
                                onClick={mostrar_producto}
                            >
                                <i className='fas fa-shopping-cart'></i>
                                Compralo ahora!
                            </button>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-img-container'>
                            <div className='product-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='product-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='product-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='product-box-text'>
                            <div className='product-category'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='product-title'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='price'>
                                <span className='product-price'>
                                    $1.809.900
                                </span>
                            </div>
                        </div>

                        <div className='product-btn'>
                            <button
                                className='buy-btn'
                                onClick={mostrar_producto}
                            >
                                <i className='fas fa-shopping-cart'></i>
                                Compralo ahora!
                            </button>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='product-img-container'>
                            <div className='product-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='product-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='product-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='product-box-text'>
                            <div className='product-category'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='product-title'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='price'>
                                <span className='product-price'>
                                    $1.809.900
                                </span>
                            </div>
                        </div>

                        <div className='product-btn'>
                            <button
                                className='buy-btn'
                                onClick={mostrar_producto}
                            >
                                <i className='fas fa-shopping-cart'></i>
                                Compralo ahora!
                            </button>
                        </div>
                    </div>
                </section>

                <div className='overlay' id='overlay'>
                    <DescriptionProducts
                        id='floatWindow'
                        click={cerrar_producto}
                    />
                </div>
            </div>
        </>
    )
}
