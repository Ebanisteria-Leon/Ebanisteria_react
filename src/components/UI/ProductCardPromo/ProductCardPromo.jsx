import React, {useState} from 'react'
import { Imagen } from '../Imagen/Imagen'
import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.png'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import { useViewModal } from '../../hooks/useViewModal'
import { Modal } from '../Modal/Modal'





export const ProductCardPromo = ({productos : {id, name, image, gender, status, created}}) => {

    let idProducto
    const [{basket}, dispatch] = useStateValue()
    const { mostrar_producto } = useViewModal()
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const mostrar_producto2 = () =>{
        idProducto=id
        dispatch({
            type:actionTypes.TEMP_DATA,
            id: idProducto
        })
        mostrar_producto()
    }

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
                            <Imagen clase='p-img-front' url={image} alt='Front' />
                            <Imagen clase='p-img-back' url={Mueble_Azul_move} alt='Back' />
                    </div>
                </div>

                <div className='p-box-text'>
                    <div className='producto-categoria'>
                        <span>{name}</span>
                    </div>
                    <a href='/' className='producto-titulo'>
                        {created}
                    </a>
                    <div className='precio'>
                        <span className='p-precio'>$1.809.900</span>
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
