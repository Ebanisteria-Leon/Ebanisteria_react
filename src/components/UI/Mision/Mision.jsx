import React,{useEffect} from 'react'
import '../../../assets/css/Mision.css'
import { Imagen } from '../Imagen/Imagen'

import onda from '../../../assets/images/onda2.svg'
import Silla1 from '../../../assets/images/Mision/Silla.png'
import Silla2 from '../../../assets/images/Mision/silla2.png'
import { UseMision } from '../../hooks/UseMision'

export const Mision = () => {

    const {ejecutarEffect} = UseMision()

    useEffect(() => {
        ejecutarEffect()
    }, [])


    return (
        <>
        {/* <UseMision/> */}
            <section className='mainMision'>

                <img src={onda} alt='' className='onda' />

                <div className='contenedorMision'>
                    
                    <div className="container_triangulo">
                        <div className="triangulo triangulo1"></div>
                        <div className="triangulo triangulo2"></div>
                        <div className="triangulo triangulo3"></div>
                    </div>
                    <div className='banner2'>
                        <div className='banner__icon-micro'>
                            <Imagen id={'img_micro'} url={Silla1} />
                        </div>
                        <div className='banner__icon-numeral'>
                            <Imagen id={'img_numeral'} url={Silla2} />
                        </div>
                        <div className='banner__text'>
                            <h2>Misión</h2>
                            <p>
                                Proveer a nuestros usuarios una asesoría
                                ajustada a sus necesidades ofreciendo excelentes
                                servicios de ebanistería con soluciones
                                innovadoras, productos elegantes, de calidad y
                                amigables con el medio ambiente
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
