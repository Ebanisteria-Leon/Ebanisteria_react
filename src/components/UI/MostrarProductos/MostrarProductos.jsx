import React from 'react'
import '../../../assets/css/DescripcionCarrito.css'
import { Imagen } from '../Imagen/Imagen'
import accounting from 'accounting'
import { useViewModal } from '../../hooks/useViewModal'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'


export const MostrarProductos = ({productos : {id, name, image, gender, quantity}}) => {

  const [{basket}, dispatch] = useStateValue()


    const eliminarProducto = () => dispatch({
        type: actionTypes.REMOVE_ITEM,
        id: id
    })

  return (
    <div className='producto'>
        <div className="pImg">
            <Imagen clase='product-img-front' url={image} alt='Front'/>
        </div>
        <div className="conjunto">
          <div className="pName">
              <p>{name}</p>
          </div>
          <span className='product-price'>
            {accounting.formatMoney(1809900, "$")} X {quantity} = {accounting.formatMoney(1809900 * quantity, "$")}
          </span>
        </div>
        <div className="eliminarP">
          <button className='delete-btn' onClick={eliminarProducto} > 
          <i className='fas fa-trash'></i>
          </button>
        </div>
    </div>
  )
}
