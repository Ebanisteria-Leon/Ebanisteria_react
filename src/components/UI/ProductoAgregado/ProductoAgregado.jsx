import React from 'react'
import accounting from 'accounting'
import { Imagen } from '../../UI/Imagen/Imagen'
import { useViewModal } from '../../hooks/useViewModal'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'


import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.jpg'

export const ProductoAgregado = ({productos : {idProducto, nombre, imagen, descripcion, valor, alto, ancho, largo, color, calificacion, fechaInicio, fechaFinalizacion, estadoProducto, idCategoria, quantity}}) => {

    const { mostrar_producto } = useViewModal()
    const [{basket}, dispatch] = useStateValue()

    const eliminarProducto = ( all = false) =>{
        if(all===false){
          dispatch({
            type: actionTypes.REMOVE_ONE_FROM_CART,
            id: idProducto,
          })
        }else{
          dispatch({
            type: actionTypes.REMOVE_ALL_FROM_CART,
            id: idProducto,
          })
        }
      }


    return (
    <div className='product-card'>
        <div className='product-img-container'>
            <div className='product-img'>
                <div className='linkImg' onClick={mostrar_producto}>
                    <Imagen clase='product-img-front' url={imagen} alt='Front'/>
                    <Imagen clase='product-img-back' url={Mueble_Azul_move} alt='Back'/>
                </div>
            </div>
        </div>

        <div className='product-box-text'>
            <div className='product-category'>
                <span>{nombre}</span>
                </div>
            <p className='product-title'>
                {fechaInicio} X{quantity}
            </p>
            <div className='price'>
                <span className='product-price'>
                    {accounting.formatMoney(valor * quantity, "$")}
                </span>
            </div>
        </div>

        <div className='product-btn'>
            <button
                className='buy-btn'
                onClick={eliminarProducto}
            >
                <i className='fas fa-trash'></i> 
            </button>
        </div>
    </div>
    )
}
