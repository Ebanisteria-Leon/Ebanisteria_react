import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
// import { fab } from '@fortawesome/free-brands-svg-icons'

export const ContadorCarrito = ({cantidad}) => {
    return (
        <NavLink to="Productos-agregados">
            <bottom className="contadorCarrito">
                <FontAwesomeIcon icon={faCartShopping} />
                <p>{cantidad}</p>
            </bottom>
        </NavLink>
    )
}
