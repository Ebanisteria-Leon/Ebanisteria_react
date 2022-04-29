import React from 'react'
import accounting from 'accounting'

export const Total = ({precioTotal}) => {
  return (
    <div className="contenedor total">
        <p>Total : </p>
        <p>{accounting.formatMoney({precioTotal}, "$")}</p>
        <button className="botonTotal">Verificar</button>
    </div>
  )
}
