import React from 'react'
import '../../../assets/css/Vision.css'
import Cama1 from '../../../assets/images/Vision/cama1.png'
import Cama2 from '../../../assets/images/Vision/cama2.png'
import OndaNegra from '../../../assets/images/ondaNegra.svg'
import { Imagen } from '../Imagen/Imagen'

export const Vision = () => {

  return (
    <section className='mainVision'>
        

        <div className="contenedorVision">
            <div className="banner22">
                <div className="banner__icon-numeral2">
                    <Imagen id={"img_numeral2"} url={Cama2}/>
                </div>
                <div className="banner__icon-micro2">
                    <Imagen id={"img_micro2"} url={Cama1}/>
                </div>
                <div className="banner__text">
                    <h2>Visión</h2>
                    <p>Ser la ebanistería referencia en el municipio de Circasia para el año 2028 en temas de asesoría y adquisición de muebles con el fin de brindar soluciones a las personas en sus hogares, oficinas y lugares de ocio</p>
                </div>
            </div>
        </div>
        <img src={OndaNegra} alt="" className='onda2' />
        </section>
        
  )
}
