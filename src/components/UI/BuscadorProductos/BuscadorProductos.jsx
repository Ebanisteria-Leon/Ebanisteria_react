import axios from 'axios'
import React from 'react'
import '../../../assets/css/BuscadorProducto.css'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'

export const BuscadorProductos = () => {

    const [{ buscador }, dispatch] = useStateValue()

    const capturarBuscador = () => {
        const buscador = document.getElementById('buscadorP')
        axios.get("https://leon-ebanisteria.herokuapp.com/api/producto/?search=" + buscador.value)
        .then((data) => {
            dispatch({
                type: actionTypes.BUSCADOR,
                data: data.data,
            })
        })
        console.log(buscador);
    }

    return (
    <div className="boxBuscador">
        <input id="buscadorP" type="text" placeholder='Buscar productos' required onChange={capturarBuscador}/>
        <div className="btnB">
            <i className="fa-solid fa-magnifying-glass lupa"></i>
        </div>
    </div>
    )
}
