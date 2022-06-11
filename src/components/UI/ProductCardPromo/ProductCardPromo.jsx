import React, {useState} from 'react'
import { Imagen } from '../Imagen/Imagen'
import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.png'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import { useViewModal } from '../../hooks/useViewModal'
import { Modal } from '../Modal/Modal'
import accounting from 'accounting'





export const ProductCardPromo = ({productos : {idProducto, nombre, imagen, imagen2, descripcion, valor, alto, ancho, largo, color, calificacion, fechaInicio, fechaFinalizacion, estadoProducto, idCategoria, quantity}}) => {

    let idProductos
    const [{basket}, dispatch] = useStateValue()
    const { mostrar_producto } = useViewModal()
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const mostrar_producto2 = () => {
        idProductos = idProducto
        dispatch({
            type: actionTypes.TEMP_DATA,
            id: idProductos,
        })
        mostrar_producto()
    }

    const addToCar = () =>{
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
        cambiarEstadoModalEmail(!estadoModalEmail)
        const boxCarrito = document.querySelector('.box-carrito')
        boxCarrito.style.opacity='1'
        boxCarrito.style.zIndex='2'
        boxCarrito.style.transform='scale(1)'
    }

    return (
        <>
        <Modal
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}    
            >
                <p>Se añadio al carrito correctamente</p>
        </Modal>
        <div className='p-slider'>
            <div className='product-box'>
                <span className='p-descuento'>-20%</span>
                <div className='p-img-container'>
                    <div className='linkImg' onClick={mostrar_producto2}>
                            <Imagen clase='p-img-front' url={imagen} alt='Front' />
                            <Imagen clase='p-img-back' url={imagen2} alt='Back' />
                    </div>
                </div>

                <div className='p-box-text'>
                    <div className='producto-categoria'>
                        <span>{nombre}</span>
                    </div>
                    <a href='/' className='producto-titulo'>
                        {fechaInicio}
                    </a>
                    <div className='precio'>
                        <span className='p-precio'>{accounting.formatMoney(valor, "$")}</span>
                        <button
                            className='buy-btn'
                            onClick={addToCar}
                        >
                            Compralo ahora!
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}
