import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../../hooks/StateProvider'
import { getBasketTotal } from '../../hooks/reducer'
import { MostrarProductos } from '../MostrarProductos/MostrarProductos';
// import { fab } from '@fortawesome/free-brands-svg-icons'

export const ContadorCarrito = ({cantidad}) => {

    const [{basket}, dispatch] = useStateValue()
    
    const mostrarCarrito = () =>{

    }

    return (
        <>
            <bottom className="contadorCarrito" onClick={mostrarCarrito}>
                <FontAwesomeIcon icon={faCartShopping} />
                <p>{cantidad}</p>
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
