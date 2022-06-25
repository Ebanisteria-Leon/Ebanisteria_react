import React, {useState, useEffect} from 'react'
import { Imagen } from '../Imagen/Imagen'
import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.png'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import { useViewModal } from '../../hooks/useViewModal'
import { Modal } from '../Modal/Modal'
import accounting from 'accounting'





export const ProductCardPromo = ({productos : {idProducto, valorDescuento, productoExtra, fechaInicio, fechaFinalizacion, estadoPromocion, tiempoPromocion, quantity}, descuento}) => {
    let idProductos
    const [{basket}, dispatch] = useStateValue()
    const { mostrar_producto } = useViewModal()
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [producto, setProducto] = useState({})
    const mostrar_producto2 = () => {
        idProductos = producto.idProducto
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
                idProducto:producto.idProducto,
                nombre:producto.nombre,
                imagen:producto.imagen,
                valor:descuento,
                calificacion:producto.calificacion,
                quantity:1
            },
        })
        cambiarEstadoModalEmail(!estadoModalEmail)
        const boxCarrito = document.querySelector('.box-carrito')
        boxCarrito.style.opacity='1'
        boxCarrito.style.zIndex='2'
        boxCarrito.style.transform='scale(1)'
    }

    const obtenerProducto = async () =>{
        let idDelProducto
        idProducto.map((index,_)=>{
            idDelProducto = index.idProducto
        })

        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/" + idDelProducto)       
        const responseJSON =await response.json()
        console.log(responseJSON);
        setProducto(responseJSON)
    }

    useEffect(() => {
        obtenerProducto()
    }, [])
    

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
                <span className='p-descuento'>-{valorDescuento}%</span>
                <div className='p-img-container'>
                    <div className='linkImg' onClick={mostrar_producto2}>
                            <Imagen clase='p-img-front' url={producto.imagen} alt='Front' />
                            <Imagen clase='p-img-back' url={producto.imagen2} alt='Back' />
                    </div>
                </div>

                <div className='p-box-text'>
                    <div className='producto-categoria'>
                        <span>{producto.nombre}</span>
                    </div>
                    <a href='#' className='producto-titulo'>
                        {fechaInicio}
                    </a>
                    <div className='precio'>
                        <div className="conjuntoPrecio">
                        <span className='p-precioActual'>{accounting.formatMoney(producto.valor, "$")}</span><br />
                        <span className='p-precio'>{accounting.formatMoney((producto.valor-descuento), "$")}</span>
                        </div>
                        <button
                            className='buy-btn'
                            onClick={addToCar}
                        >
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}
