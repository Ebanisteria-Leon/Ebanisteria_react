import accounting from 'accounting';
import React from 'react'
import { Imagen } from '../Imagen/Imagen';

export const ModalFiltros = ({url, titulo}) => {
    console.log(url);
    
    const cerrarEditor = () =>{
        const overlay = document.querySelector('.overlayFiltro')
        const container = document.querySelector('.modalFiltro')
    
        overlay.style.visibility="hidden"
        overlay.style.opacity="0"
        container.style.opacity="0"
        container.style.transform="scale(0.6)"
    }

    return (
    <div className="modalFiltro">
        <div className='close'>
            <button className='buttonClose' onClick={cerrarEditor}>
                <i className='fas fa-times-circle'></i>
            </button>
        </div>
        <h2>{titulo}</h2>
        <table className='table-products'>
            <thead>
                <tr>
                    <th scope='col'>Imagen</th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Categoria</th>
                    <th scope='col'>Descripcion</th>
                    <th scope='col'>Color</th>
                    <th scope='col'>Precio</th>
                </tr>
            </thead>
            {!url ? "No existen productos con este estado" :
            url.map((index,_)=>{
            return(
                <tbody>
                <tr>
                    <td>
                        <Imagen
                            clase='img-table'
                            url={index.imagen}
                            alt='Front'
                        />
                    </td>
                    <td>{index.nombre}</td>
                    <td>{index.idCategoria} </td>
                    <td>
                        {index.descripcion}
                    </td>
                    <td>{index.color}</td>
                    <td>
                        <span className='priceProducts-table'>
                            {accounting.formatMoney(index.valor, "$")}
                        </span>
                    </td>
                </tr>
            </tbody>
            )
            })}
        </table>
        </div>
  )
}
