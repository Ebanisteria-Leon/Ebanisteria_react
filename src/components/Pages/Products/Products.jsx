import React,{useState, useEffect} from 'react'
import '../../../assets/css/Products.css'
import Mueble_Azul from '../../../assets/images/muebles-promo/mueble-azul.png'

import { useViewModal } from '../../hooks/useViewModal'
import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { DescriptionProducts } from '../../UI/DescriptionProducts/DescriptionProducts'
import { ContadorCarrito } from '../../UI/ContadorCarrito/ContadorCarrito'
import { ProductCard } from '../../UI/ProductCard/ProductCard'
import { useStateValue } from '../../hooks/StateProvider'
import ClipLoader from "react-spinners/ClipLoader";



export const Products = () => {
    const { ocultar_producto } = useViewModal()

    let url="https://rickandmortyapi.com/api/character/"

    const [todos, setTodos] = useState()

    const fetchApi=async(url)=>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.results)
    }

    useEffect(()=>{
        fetchApi(url)
    },[])

    const [{basket}, dispatch] = useStateValue()


    return (
        <>
        
            <div className='mainProducts'>
                <Barra />
                <Header />

                <h3 className='title-category'>Productos nuevos</h3>
                <ContadorCarrito />

                <section className='section__products'>
                        {!todos ? <ClipLoader color='#dcaa47'/> : 
                        todos.map((productos)=><ProductCard key={productos.id} productos={productos}/>)}
                </section>

                <div className='overlay' id='overlay'>
                    <DescriptionProducts
                        id='floatWindow'
                        click={ocultar_producto}
                    />
                </div>
            </div>
        </>
    )
}
