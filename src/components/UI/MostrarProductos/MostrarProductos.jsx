import React from 'react'
import '../../../assets/css/DescripcionCarrito.css'
import { Imagen } from '../Imagen/Imagen'
import accounting from 'accounting'
import { useViewModal } from '../../hooks/useViewModal'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'


export const MostrarProductos = ({productos: {idProducto, nombre, imagen, descripcion, valor, alto, ancho, largo, color, calificacion, fechaInicio, fechaFinalizacion, estadoProducto, idCategoria, quantity}}) => {

  const [{basket}, dispatch] = useStateValue()


    const eliminarProducto = ( all = false) =>{
      if(all===false){
        dispatch({
          type: actionTypes.REMOVE_ONE_FROM_CART,
          idProducto: idProducto,
        })
      }else{
        dispatch({
          type: actionTypes.REMOVE_ALL_FROM_CART,
          idProducto: idProducto,
        })
      }
    }


  return (
    <div className='producto'>
        <div className="pImg">
            <Imagen clase='product-img-front' url={imagen} alt='Front'/>
        </div>
        <div className="conjunto">
          <div className="pName">
              <p>{nombre}</p>
          </div>
          <span className='product-price'>
            {accounting.formatMoney(valor, "$")} X {quantity} = {accounting.formatMoney(valor * quantity, "$")}
          </span>
        </div>
        <div className="eliminarP">
          <button className='delete-btn' onClick={()=>eliminarProducto(false)} title="Eliminar unidad"> 
            <i className='fas fa-trash'></i>
          </button>
          <button className='delete-btn' onClick={()=>eliminarProducto(true)} title="Eliminar todos"> 
            <i class="fa-solid fa-trash-arrow-up"></i>
          </button>
        </div>
    </div>
  )
}
