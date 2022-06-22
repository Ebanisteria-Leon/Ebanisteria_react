import React, {useEffect, useState} from 'react'
import '../../../assets/css/DescriptionProducts.css'
import '../../../assets/css/CerrarModal.css'

import { useCounter } from '../../hooks/useCounter'

import { Imagen } from '../Imagen/Imagen'
import img1 from '../../../assets/images/muebles-promo/mueble-azul.png'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import { Modal } from '../Modal/Modal'
import accounting from 'accounting'
import ReactImageZoom from 'react-image-zoom';
import ReactDOM from 'react-dom';



export const DescriptionProducts = ({ id, click}) => {

    const [dataId, setDataId] = useState({})
    const { counter, add, remove } = useCounter()
    const [{tempdata, basket}, dispatch] = useStateValue()
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)

    const addToCar = () =>{
        dispatch({
            type:actionTypes.ADD_TO_BASKET,
            item: {
                idProducto:dataId.idProducto,
                nombre:dataId.nombre,
                imagen:dataId.imagen,
                valor:dataId.valor,
                descripcion:dataId.descripcion,
                quantity:counter
            }
            
        })
        cambiarEstadoModalEmail(!estadoModalEmail)
        const boxCarrito = document.querySelector('.box-carrito')
        boxCarrito.style.opacity='1'
        boxCarrito.style.zIndex='2'
        boxCarrito.style.transform='scale(1)'
    }

    useEffect(() => {
        fetch("https://leon-ebanisteria.herokuapp.com/api/producto/" + tempdata)
        .then(response => response.json())
        .then(data => {
            setDataId(data)
        });
    }, [tempdata])

    if(dataId.imagen === undefined){
        dataId.imagen = img1
    }
    
    const props = {
        width: 400, 
        height: 500, 
        zoomWidth: 500, 
        zoomPosition: "right",
        img: dataId.imagen
    };

    return (
        <>
            <div className='mainDescriptionProducts' id={id}>
                
                {!dataId ? "espera" :
                    <>
                    <div className='productsImage' id='contenedor_img'>
                            {/* <Imagen clase='products_img' url={dataId.imagen} /> */}
                            <ReactImageZoom {...props} />
                        </div>

                        <div className='productsInfo'>
                            <div className='productsInfo_name'>
                                <h2>{dataId.nombre}</h2>
                                <h3>{dataId.fechaInicio}</h3>
                            </div>

                            <div className='productsInfo_description'>
                                <h3>{accounting.formatMoney(dataId.valor, "$")}</h3>
                                <div className='descripction_pagragh'>
                                    <span className='paragraph-span'>
                                        Dimensiones:
                                        <p className='paragraph-p'><b>Alto: </b> {dataId.alto}</p>
                                        <p className='paragraph-p'><b>Ancho: </b> {dataId.ancho}</p>
                                        <p className='paragraph-p'><b>Largo: </b> {dataId.largo}</p>
                                    </span>

                                    <span className='paragraph-span'>
                                        Color:
                                        <p className='paragraph-p'>{dataId.color}</p>
                                    </span>

                                    <span className='paragraph-span'>
                                        Descripción:
                                        <p className='paragraph-p'>
                                            {dataId.descripcion}
                                        </p>
                                    </span>
                                </div>
                            </div>

                            <div className='productsActions'>
                                <div className='addProducts'>
                                    <button
                                        className='buttonProducts addProducts_add'
                                        onClick={add}
                                    >
                                        <i className='fas fa-plus'></i>
                                    </button>
                                    <div className='addProducts_count'>
                                        <span id='counter'>{counter}</span>
                                    </div>
                                    <button
                                        className='buttonProducts addProducts_remove'
                                        onClick={remove}
                                    >
                                        <i className='fas fa-minus'></i>
                                    </button>
                                </div>

                                <div className='buyProducts'>
                                    <button className='buttonProducts_buy' onClick={addToCar}>
                                        <i className='fas fa-shopping-cart'></i>
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                }

                <div className='close'>
                    <button className='buttonClose' onClick={click}>
                        <i className='fas fa-times-circle'></i>
                    </button>
                </div>
            </div>
        </>
    )
}
