import React,{useState, useEffect} from 'react'
import '../../../assets/css/Products.css'
import Mueble_Azul from '../../../assets/images/muebles-promo/mueble-azul.png'
import Mueble_Azul_move from '../../../assets/images/muebles-promo/mueble-azul-move.jpg'
import accounting from 'accounting'

import { useViewModal } from '../../hooks/useViewModal'

import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { DescriptionProducts } from '../../UI/DescriptionProducts/DescriptionProducts'
import { Imagen } from '../../UI/Imagen/Imagen'
import { ContadorCarrito } from '../../UI/ContadorCarrito/ContadorCarrito'
import { ProductosApi } from '../../services/ProductosApi'

export const Products = () => {
    const { mostrar_producto } = useViewModal()
    const [todos] = ProductosApi()
    console.log(todos);


    return (
        <>
        <ContadorCarrito cantidad={"20"}/>
            <div className='mainProducts'>
                <Barra />
                <Header />

                <h3 className='title-category'>Productos nuevos</h3>

                <section className='section__products'>
                        {!todos ? 'No existen productos' : 
                        todos.map((productos, index)=>{
                            return(
                                <div key={index} className='product-card'>
                                <div className='product-img-container'>
                                    <div className='product-img'>
                                        <div className='linkImg' onClick={mostrar_producto}>
                                            <Imagen clase='product-img-front' url={productos.image} alt='Front'/>
                                            <Imagen clase='product-img-back' url={Mueble_Azul_move} alt='Back'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='product-box-text'>
                                    <div className='product-category'>
                                        <span>{productos.name}</span>
                                    </div>
                                    <p className='product-title'>
                                        {productos.gender}
                                    </p>
                                    <div className='price'>
                                        <span className='product-price'>
                                            {accounting.formatMoney(1809900, "$")}
                                        </span>
                                    </div>
                                </div>

                                <div className='product-btn'>
                                    <button
                                        className='buy-btn'
                                        onClick={mostrar_producto}
                                    >
                                        <i className='fas fa-shopping-cart'></i>
                                        Compralo ahora!
                                    </button>
                                </div>
                                </div>
                            )
                        })}

                </section>

                <div className='overlay' id='overlay'>
                    <DescriptionProducts
                        id='floatWindow'
                        click={mostrar_producto}
                    />
                </div>
            </div>
        </>
    )
}
