import React,{useState, useEffect} from 'react'
import { useViewModal } from '../../hooks/useViewModal'
import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { DescriptionProducts } from '../../UI/DescriptionProducts/DescriptionProducts'
import { ProductoAgregado } from '../../UI/ProductoAgregado/ProductoAgregado'
import { Total } from '../../UI/Total/Total'


export const ProductosAgregados = () => {

  const { mostrar_producto } = useViewModal()

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

  return (
    <>
            <div className='mainProducts'>
                <Barra />
                <Header />

                <h3 className='title-category'>Productos Agregados</h3>
                <Total/>

                <section className='section__products'>
                        {!todos ? 'No existen' : 
                        todos.map((productos)=><ProductoAgregado key={productos.id} productos={productos}/>)}
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
