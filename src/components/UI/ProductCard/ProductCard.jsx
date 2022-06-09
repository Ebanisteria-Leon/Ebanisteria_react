import React, { useState } from 'react'
import accounting from 'accounting'
import { Imagen } from '../../UI/Imagen/Imagen'
import { useViewModal } from '../../hooks/useViewModal'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import { Modal } from '../Modal/Modal'
// import { Rating } from 'react-simple-star-rating'

import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.png'
import { DescriptionProducts } from '../DescriptionProducts/DescriptionProducts'

export const ProductCard = ({
    productos: { idProducto, nombre, imagen, imagen2, descripcion, valor, alto, ancho, largo, color, calificacion, fechaInicio, fechaFinalizacion, estadoProducto, idCategoria, tiempoProducto, destacado },
}) => {
    let idProductos
    let colorModal = '#008F39'
    const { mostrar_producto } = useViewModal()
    const mostrar_producto2 = () => {
        idProductos = idProducto
        dispatch({
            type: actionTypes.TEMP_DATA,
            id: idProductos,
        })
        mostrar_producto()
    }

    const stars = Array(calificacion).fill(0)
    const stars2 = Array(calificacion).fill(0)

    const [{ basket }, dispatch] = useStateValue()
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)

    // mandara o disparará los datos del objeto que hayamos clickeado y en reducer escuchará esta acción
    const addToCar = () => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                idProducto,
                nombre,
                imagen,
                valor,
                calificacion
            },
        })
        localStorage.setItem("producto", JSON.stringify(basket))
        cambiarEstadoModalEmail(!estadoModalEmail)
        const boxCarrito = document.querySelector('.box-carrito')
        boxCarrito.style.opacity = '1'
        boxCarrito.style.zIndex = '2'
        boxCarrito.style.transform = 'scale(1)'
    }

    return (
        <>
            <Modal
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}
            >
                <p>Se añadio al carrito correctamente</p>
            </Modal>
            <div className='product-card'>
                {tiempoProducto==="NUE"
                    ?<div className="nuevoP">

                    </div>
                    :""
                }
                <div className='product-img-container'>
                    <div className='product-img'>
                        <div className='linkImg' onClick={mostrar_producto2}>
                            <Imagen
                                clase='product-img-front'
                                url={imagen}
                                alt='Front'
                            />
                            <Imagen
                                clase='product-img-back'
                                url={imagen2}
                                alt='Back'
                            />
                        </div>
                    </div>
                </div>

                <div className='product-box-text'>
                    <div className='price'>
                        <span className='product-price'>
                            {accounting.formatMoney(valor, '$')}
                        </span>
                        <div className='stars'>
                            {stars.map((_, index) => {
                                return (
                                    <i class='fa-solid fa-star' key={index}></i>
                                )
                            })}
                        </div>
                        <div className='stars2'>
                            {stars2.map((_, index) => {
                                return (
                                    <i
                                        class='fa-solid fa-star star-grey'
                                        key={index}
                                    ></i>
                                )
                            })}
                        </div>
                    </div>
                    <div className='product-category'>
                        <span>{nombre}</span>
                    </div>
                </div>

                <div className='product-btn'>
                    <button className='buy-btn' onClick={addToCar}>
                        <i className='fas fa-shopping-cart'></i>
                    </button>
                    <button className='ver-btn' onClick={mostrar_producto2}>
                        <i class='fa-solid fa-eye'></i>
                    </button>
                </div>
            </div>
        </>
    )
}
