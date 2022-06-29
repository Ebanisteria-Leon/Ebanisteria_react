import React from 'react'
import '../../../assets/css/Click.css'
import Logo from '../../../assets/images/logo/logoSoloNegro.png'

export const Click = () => {

  const iFrame ={
    iframeSource : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.869236367593!2d-75.63947818467439!3d4.617406643658497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388b7690c49835%3A0xe651a2c254a05e01!2sCl.%2010%20%2310-50%2C%20Circasia%2C%20Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1656506565607!5m2!1ses!2sco" width="1100" height="780" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  }

  return (
    <div className="clicks">
        <div className="contenedor_clicks">
            <p>LA EXCELENTE CALIDAD DE NUESTRA MATERIA PRIMA EQUIVALE A LA LARGA VIDA DE NUESTROS PRODUCTOS</p>
            <div className="logo_click">
            <img src={Logo} alt="" />
            </div>
        </div>
        <div className="direccionGoogle" dangerouslySetInnerHTML={{__html: iFrame.iframeSource}}>
          
        </div>
        <div className="contenedor_clicks2">
            <h2>ENCUENTRANOS</h2>
            <div className='contacto_infoHome'>
                <p><i className='fa fa-solid fa-map'></i> Circasia calle 10 #10-50 / Colombia</p>
                <p><i className='fa fa-solid fa-phone'></i> : 7384576 / <i className='fa fa-solid fa-mobile'></i> : 3006066409</p>
            </div>
        </div>
        
    </div>
  )
}
