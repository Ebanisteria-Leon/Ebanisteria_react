import React from 'react'
import '../../../assets/css/DescripcionCarrito.css'
import { Imagen } from '../Imagen/Imagen'
import accounting from 'accounting'
import { useViewModal } from '../../hooks/useViewModal'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'


export const MostrarProductos = ({productos : {id, name, image, gender, quantity}}) => {

  const [{basket}, dispatch] = useStateValue()


    const eliminarProducto = ( all = false) =>{
      if(all===false){
        dispatch({
          type: actionTypes.REMOVE_ONE_FROM_CART,
          id: id,
        })
      }else{
        dispatch({
          type: actionTypes.REMOVE_ALL_FROM_CART,
          id: id,
        })
      }
    }


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
          <button className='delete-btn' onClick={()=>eliminarProducto(false)} > 
            <i className='fas fa-trash'></i>
          </button>
          <button className='delete-btn' onClick={()=>eliminarProducto(true)} > 
            <i class="fa-solid fa-trash-arrow-up"></i>
          </button>
        </div>
    </div>
  )
}
