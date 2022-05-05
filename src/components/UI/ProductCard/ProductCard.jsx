import React, { useState } from 'react'
import accounting from 'accounting'
import { Imagen } from '../../UI/Imagen/Imagen'
import { useViewModal } from '../../hooks/useViewModal'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import { Modal } from '../Modal/Modal'
// import { Rating } from 'react-simple-star-rating'

import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.png'


export const ProductCard = ({productos : {id, name, image, gender}}) => {

    const { mostrar_producto } = useViewModal()
    if(id> 5){
        id=5
    }
    const stars = Array(id).fill(0)
    const stars2 = Array(5).fill(0)

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
        const boxCarrito = document.querySelector('.box-carrito')
        boxCarrito.style.opacity='1'

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
                    <div className='price'>
                        <span className='product-price'>
                            {accounting.formatMoney(1809900, "$")}
                        </span>
                        <div className="stars">
                            {stars.map((_, index)=>{
                                return(
                                    <i class="fa-solid fa-star" key={index}></i>
                                )
                            })}
                        </div>
                        <div className="stars2">
                            {stars2.map((_, index)=>{
                                return(
                                    <i class="fa-solid fa-star star-grey" key={index}></i>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className='product-btn'>
                    <button className='buy-btn' onClick={addToCar} >
                        <i className='fas fa-shopping-cart'></i>
                    </button>
                    <button className='ver-btn' onClick={mostrar_producto} >
                        <i class="fa-solid fa-eye"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
