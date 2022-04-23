import React from 'react'
import '../../../assets/css/Click.css'
import Logo from '../../../assets/images/logo/logoSoloNegro.png'

export const Click = () => {
  return (
    <div className="clicks">
        <div className="contenedor_clicks">
            <p>ESTÁS A UN SOLO CLICK DE OBTENER LO QUE DESEAS</p>
            <div className="logo_click">
            <img src={Logo} alt="" />
            </div>
        </div>
    </div>
  )
}
