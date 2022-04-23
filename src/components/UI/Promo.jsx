import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../assets/css/slider.css'

import { useViewModal } from '../hooks/useViewModal'
import { useCloseModal } from '../hooks/useCloseModal'

import { DescriptionProducts } from './DescriptionProducts/DescriptionProducts'
import { Imagen } from './Imagen/Imagen'
import Mueble_Azul from '../../assets/images/muebles-promo/mueble-azul.png'
import Mueble_Azul_move from '../../assets/images/muebles-promo/mueble-azul-move.jpg'

export const Promo = () => {
    // como serializar relaciones

    const { mostrar_producto } = useViewModal()
    const { cerrar_producto } = useCloseModal()

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        initialSlide: 0,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <>
            <h3 className='titu-slider'>SLIDER-PROMOCIONES</h3>

            <Slider {...settings}>
                <div className='p-slider'>
                    <div className='product-box'>
                        <span className='p-descuento'>-20%</span>
                        <div className='p-img-container'>
                            <div className='p-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='p-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='p-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='p-box-text'>
                            <div className='producto-categoria'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='producto-titulo'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='precio'>
                                <span className='p-precio'>$1.809.900</span>
                                <button
                                    className='buy-btn'
                                    onClick={mostrar_producto}
                                >
                                    Compralo ahora!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-slider'>
                    <div className='product-box'>
                        <span className='p-descuento'>-20%</span>
                        <div className='p-img-container'>
                            <div className='p-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='p-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='p-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='p-box-text'>
                            <div className='producto-categoria'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='producto-titulo'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='precio'>
                                <span className='p-precio'>$1.809.900</span>
                                <button
                                    className='buy-btn'
                                    onClick={mostrar_producto}
                                >
                                    Compralo ahora!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-slider'>
                    <div className='product-box'>
                        <span className='p-descuento'>-20%</span>
                        <div className='p-img-container'>
                            <div className='p-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='p-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='p-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='p-box-text'>
                            <div className='producto-categoria'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='producto-titulo'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='precio'>
                                <span className='p-precio'>$1.809.900</span>
                                <button
                                    className='buy-btn'
                                    onClick={mostrar_producto}
                                >
                                    Compralo ahora!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-slider'>
                    <div className='product-box'>
                        <span className='p-descuento'>-20%</span>
                        <div className='p-img-container'>
                            <div className='p-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='p-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='p-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='p-box-text'>
                            <div className='producto-categoria'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='producto-titulo'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='precio'>
                                <span className='p-precio'>$1.809.900</span>
                                <button
                                    className='buy-btn'
                                    onClick={mostrar_producto}
                                >
                                    Compralo ahora!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-slider'>
                    <div className='product-box'>
                        <span className='p-descuento'>-20%</span>
                        <div className='p-img-container'>
                            <div className='p-img'>
                                <a href='/'>
                                    <Imagen
                                        clase='p-img-front'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                    <Imagen
                                        clase='p-img-back'
                                        url={Mueble_Azul_move}
                                        alt='Back'
                                    />
                                </a>
                            </div>
                        </div>

                        <div className='p-box-text'>
                            <div className='producto-categoria'>
                                <span>Sofá Turqueza</span>
                            </div>
                            <a href='/' className='producto-titulo'>
                                Sofá Esquinero Oslo Anti Rasguños 90x200x150
                                Turquesa
                            </a>
                            <div className='precio'>
                                <span className='p-precio'>$1.809.900</span>
                                <button
                                    className='buy-btn'
                                    onClick={mostrar_producto}
                                >
                                    Compralo ahora!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

            <div className='overlay' id='overlay'>
                <DescriptionProducts id='floatWindow' click={cerrar_producto} />
            </div>
        </>
    )
}
