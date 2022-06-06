import React from 'react'
import accounting from 'accounting'

export const Total = ({precioTotal, pTotal}) => {
  console.log(precioTotal);
  return (
    <div className="contenedorTotal">
        <p>Productos totales : {pTotal}</p>
        <div className="total">
        <p>Total</p>
        <p>{accounting.formatMoney(precioTotal, "$")}</p>
        </div>
    </div>
  )
}
