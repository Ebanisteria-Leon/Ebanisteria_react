import React, {useState, useEffect} from 'react'
import '../../../assets/css/ContadorCarrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../../hooks/StateProvider'
import { getBasketTotal } from '../../hooks/reducer'
import { actionTypes } from '../../hooks/reducer'
import { MostrarProductos } from '../MostrarProductos/MostrarProductos';
import imgCarrito from '../../../assets/images/iconos/shopping-cart.png'
import { Total } from '../Total/Total';
// import { fab } from '@fortawesome/free-brands-svg-icons'

export const ContadorCarrito = () => {

    const [mostrar, setMostrar] = useState(true)
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    const [{basket}, dispatch] = useStateValue()
    const limpiarCarro =()=>dispatch({
        type: actionTypes.CLEAR_CART
    })
    
    const mostrarCarrito = () =>{
        const boxCarrito = document.querySelector('.box-carrito')
        setMostrar(!mostrar)

        if(mostrar){
            boxCarrito.style.opacity='1'
            boxCarrito.style.zIndex='2'
            boxCarrito.style.transform='scale(1)'
        }else{
            boxCarrito.style.opacity='0'
            boxCarrito.style.zIndex='-1'
            boxCarrito.style.transform='scale(0.6)'
        }
    }

    useEffect(() => {
        setCantidad(
            basket.reduce((previus, current) => previus + current.quantity, 0)
        )
        setTotal(
            basket.reduce((amount, item) => amount + item.valor * item.quantity, 0)
        )
    }, [basket])
    

    return (
        <>
            <button className="contadorCarrito" onClick={mostrarCarrito}>
                    <img src={imgCarrito} alt="" />
                    <p>{cantidad}</p>
            </button>
            <div className="box-carrito">
                <div className="tituPAgregados">
                    <h4>PRODUCTOS AGREGADOS</h4>
                </div>
                <div className="productos-agregados">
                    {basket.length===0 ? 'No hay productos agregados' : 
                    basket.map((productos,_)=><MostrarProductos key={productos.id} productos={productos}/>)}
                </div>
                <div className="pTotal">
                    <div className="boxLimpiar">
                        <button onClick={limpiarCarro} className="limpiarCarrito">Limpiar carrito</button>
                    </div>
                    <Total precioTotal={total} pTotal={cantidad}/>
                </div>
                <div className="botonesPAgregados">
                    <NavLink to="/Productos-agregados">
                        <button className="Bver">Mi carrito</button>
                    </NavLink>
                    <NavLink to="/Payment">
                        <button className="botonTotal">Verificar</button>
                    </NavLink>
                </div>
            </div>
        
        </>
    )
}
