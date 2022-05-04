import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../../hooks/StateProvider'
import { getBasketTotal } from '../../hooks/reducer'
import { MostrarProductos } from '../MostrarProductos/MostrarProductos';
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
            boxCarrito.style.zIndex='200'
        }else{
            boxCarrito.style.opacity='0'
            boxCarrito.style.zIndex='0'
        }
    }

    return (
        <>
            <bottom className="contadorCarrito" onClick={mostrarCarrito}>
                <img src="../../../assets/images/iconos/shopping-cart.png" alt="" />
                <div className="contador">
                    <p>{cantidad}</p>
                </div>
            </bottom>
            <div className="box-carrito">
                {!basket ? 'No Tienes ningún producto agregado' : 
                basket.map((productos)=><MostrarProductos key={productos.id} productos={productos}/>)}
            </div>
        <NavLink to="/Productos-agregados">
        </NavLink>
        </>
    )
}
