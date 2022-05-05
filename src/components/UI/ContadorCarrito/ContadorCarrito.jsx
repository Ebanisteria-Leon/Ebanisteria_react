import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../../hooks/StateProvider'
import { getBasketTotal } from '../../hooks/reducer'
import { MostrarProductos } from '../MostrarProductos/MostrarProductos';
import imgCarrito from '../../../assets/images/iconos/shopping-cart.png'
import { Total } from '../Total/Total';
// import { fab } from '@fortawesome/free-brands-svg-icons'

export const ContadorCarrito = ({cantidad}) => {

    const [mostrar, setMostrar] = useState(true)
    const [{basket}, dispatch] = useStateValue()
    
    const mostrarCarrito = () =>{
        const boxCarrito = document.querySelector('.box-carrito')
        setMostrar(!mostrar)
        console.log(boxCarrito);

        if(mostrar){
            boxCarrito.style.opacity='1'
        }else{
            boxCarrito.style.opacity='0'
        }
    }

    return (
        <>
            <bottom className="contadorCarrito" onClick={mostrarCarrito}>
                <img src={imgCarrito} alt="" />
                <div className="contador">
                    <p>{cantidad}</p>
                </div>
            </bottom>
            <div className="box-carrito">
                <div className="tituPAgregados">
                    <h4>PRODUCTOS AGREGADOS</h4>
                </div>
                <div className="productos-agregados">
                    {!basket ? 'No Tienes ningún producto agregado' : 
                    basket.map((productos)=><MostrarProductos key={productos.id} productos={productos}/>)}
                </div>
                <div className="pTotal">
                    <Total precioTotal={getBasketTotal(basket)} pTotal={basket?.length}/>
                </div>
                <NavLink to="/Productos-agregados">
                    <button>Ver mis productos</button>
                </NavLink>
            </div>
        
        </>
    )
}