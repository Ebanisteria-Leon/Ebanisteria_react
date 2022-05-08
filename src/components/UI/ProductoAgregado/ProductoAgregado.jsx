import React from 'react'
import accounting from 'accounting'
import { Imagen } from '../../UI/Imagen/Imagen'
import { useViewModal } from '../../hooks/useViewModal'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'


import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.jpg'

export const ProductoAgregado = ({productos : {id, name, image, gender, quantity}}) => {

    const { mostrar_producto } = useViewModal()
    const [{basket}, dispatch] = useStateValue()


    const eliminarProducto = () => dispatch({
        type: actionTypes.REMOVE_ITEM,
        id: id
    })

    return (
    <div className='product-card'>
        <div className='product-img-container'>
            <div className='product-img'>
                <div className='linkImg' onClick={mostrar_producto}>
                    <Imagen clase='product-img-front' url={image} alt='Front'/>
                    <Imagen clase='product-img-back' url={Mueble_Azul_move} alt='Back'/>
                </div>
            </div>
        </div>

        <div className='product-box-text'>
            <div className='product-category'>
                <span>{name}</span>
                </div>
            <p className='product-title'>
                {gender} X{quantity}
            </p>
            <div className='price'>
                <span className='product-price'>
                    {accounting.formatMoney(1809900 * quantity, "$")}
                </span>
            </div>
        </div>

        <div className='product-btn'>
            <button
                className='buy-btn'
                onClick={eliminarProducto}
            >
                <i className='fas fa-trash'></i>
                Eliminar
            </button>
        </div>
    </div>
    )
}
