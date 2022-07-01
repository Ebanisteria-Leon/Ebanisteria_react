import React from 'react'
import '../../../assets/css/Galeria.css'
import {logicaGaleria} from '../../hooks/useGaleria'

import img1 from '../../../assets/images/galeria/img1.jpg'
import img2 from '../../../assets/images/galeria/img2.jpg'
import img3 from '../../../assets/images/galeria/img3.jpg'
import img4 from '../../../assets/images/galeria/img4.jpg'
import img5 from '../../../assets/images/galeria/img5.jpg'
import img6 from '../../../assets/images/galeria/img6.jpg'
import img7 from '../../../assets/images/galeria/img7.jpg'
import img8 from '../../../assets/images/galeria/img8.jpg'
import img9 from '../../../assets/images/galeria/img9.jpg'
import img10 from '../../../assets/images/galeria/img10.jpg'
import img11 from '../../../assets/images/galeria/img11.jpg'
import img12 from '../../../assets/images/galeria/img12.jpg'
import img13 from '../../../assets/images/galeria/img13.jpg'
import img14 from '../../../assets/images/galeria/img14.jpg'
import img15 from '../../../assets/images/galeria/img15.jpg'
import img16 from '../../../assets/images/galeria/img16.jpg'
import img17 from '../../../assets/images/galeria/img17.jpg'
import img18 from '../../../assets/images/galeria/img18.jpg'
import img19 from '../../../assets/images/galeria/img19.jpg'
import img20 from '../../../assets/images/galeria/img20.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


export const Galeria = () => {

    const { mostrar, cerrarVentana, mostrarSlide } = logicaGaleria()

    return (
        <>
            <div className='overlay2'>
                <div className='slideshow' onClick={mostrar}>
                    <span className='btn_cerrar' onClick={cerrarVentana}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
                    <div className='botones adelante'>
                        <i className='fa fa-thin fa-angle-right'></i>
                    </div>
                    <div className='botones atras'>
                        <i className='fa fa-thin fa-angle-left'></i>
                    </div>
                    <img src={img1} alt='' id='img_slideshow' />
                </div>
            </div>
            <div className='titulo_galeria'>
                <h2>GALERÍA</h2>
            </div>
            <section className='galeria'>
                <div className='columna'>
                    <img
                        src={img1}
                        alt=''
                        data-img-mostrar='0'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img2}
                        alt=''
                        data-img-mostrar='1'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img3}
                        alt=''
                        data-img-mostrar='2'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img4}
                        alt=''
                        data-img-mostrar='3'
                        onClick={mostrarSlide}
                    />
                </div>
                <div className='columna'>
                    <img
                        src={img5}
                        alt=''
                        data-img-mostrar='4'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img6}
                        alt=''
                        data-img-mostrar='5'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img7}
                        alt=''
                        data-img-mostrar='6'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img8}
                        alt=''
                        data-img-mostrar='7'
                        onClick={mostrarSlide}
                    />
                </div>
                <div className='columna'>
                    <img
                        src={img9}
                        alt=''
                        data-img-mostrar='8'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img10}
                        alt=''
                        data-img-mostrar='9'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img11}
                        alt=''
                        data-img-mostrar='10'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img12}
                        alt=''
                        data-img-mostrar='11'
                        onClick={mostrarSlide}
                    />
                </div>
                <div className='columna'>
                    <img
                        src={img13}
                        alt=''
                        data-img-mostrar='12'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img14}
                        alt=''
                        data-img-mostrar='13'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img15}
                        alt=''
                        data-img-mostrar='14'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img16}
                        alt=''
                        data-img-mostrar='15'
                        onClick={mostrarSlide}
                    />
                </div>
                <div className='columna'>
                    <img
                        src={img17}
                        alt=''
                        data-img-mostrar='16'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img18}
                        alt=''
                        data-img-mostrar='17'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img19}
                        alt=''
                        data-img-mostrar='18'
                        onClick={mostrarSlide}
                    />
                    <img
                        src={img20}
                        alt=''
                        data-img-mostrar='19'
                        onClick={mostrarSlide}
                    />
                </div>
            </section>
        </>
    )
}
