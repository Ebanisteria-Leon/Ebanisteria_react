import React, { useState } from 'react'
import accounting from 'accounting'
import { Imagen } from '../../UI/Imagen/Imagen'
import { useViewModal } from '../../hooks/useViewModal'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import { Modal } from '../Modal/Modal'

import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.jpg'


export const ProductCard = ({productos : {id, name, image, gender}}) => {

    const { mostrar_producto } = useViewModal()

    const [{basket}, dispatch] = useStateValue()
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)

    // mandara o disparará los datos del objeto que hayamos clickeado y en reducer escuchará esta acción
    const addToCar = () =>{
        dispatch({
            type:actionTypes.ADD_TO_BASKET,
            item: {
                id,
                name,
                image,
                gender
            }
        })
        cambiarEstadoModalEmail(!estadoModalEmail)
        const contadorCarrito = document.querySelector('.contadorCarrito')
        console.log(contadorCarrito);
        contadorCarrito.style.left='0'

    }

    return (
        <>
            <Modal
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}    
            >
                <p>Se añadio al carrito correctamente</p>
            </Modal>
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
                        onClick={addToCar}
                    >
                        <i className='fas fa-shopping-cart'></i>
                        Compralo ahora!
                    </button>
                </div>
            </div>
        </>
    )
}
