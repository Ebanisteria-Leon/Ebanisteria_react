import React from 'react'
import accounting from 'accounting'
import { Imagen } from '../../UI/Imagen/Imagen'
import { useViewModal } from '../../hooks/useViewModal'

import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.jpg'

export const ProductCard = ({productos : {id, name, image, gender}}) => {

    const { mostrar_producto } = useViewModal()

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
                {gender}
            </p>
            <div className='price'>
                <span className='product-price'>
                    {accounting.formatMoney(1809900, "$")}
                </span>
            </div>
        </div>

        <div className='product-btn'>
            <button
                className='buy-btn'
                onClick={mostrar_producto}
            >
                <i className='fas fa-shopping-cart'></i>
                Compralo ahora!
            </button>
        </div>
    </div>
    )
}
