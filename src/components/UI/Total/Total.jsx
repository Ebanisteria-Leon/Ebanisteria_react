import React from 'react'
import accounting from 'accounting'

export const Total = ({precioTotal, pTotal}) => {
  return (
    <div className="contenedor total">
        <p>Productos totales : {pTotal}</p>
        <p>{accounting.formatMoney({precioTotal}, "$")}</p>
        <button className="botonTotal">Verificar</button>
    </div>
  )
}
