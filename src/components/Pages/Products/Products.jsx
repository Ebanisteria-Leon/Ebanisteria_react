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
import { BuscadorProductos } from '../../UI/BuscadorProductos/BuscadorProductos'
import Slider from 'react-slick'



export const Products = () => {
    var settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };

    const { ocultar_producto } = useViewModal()
    const [{ buscador }, dispatch] = useStateValue()

    const [todos, setTodos] = useState([])
    const [categoria, setCategoria] = useState()
    const [tituCategoria, setTituCategoria] = useState("")

    const fetchApi=async()=>{
        setTituCategoria("")
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/")
        const responseJSON = await response.json()
        setTodos(responseJSON.results)
    }

    const obtenerCategoria=async(categoria)=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/?search=" + categoria)
        const responseJSON = await response.json()
        setTodos(responseJSON.results)
    }

    const capturarCategoria = (e) =>{
        let categoriaBoton= e.target.value
        setTituCategoria(categoriaBoton)
        obtenerCategoria(categoriaBoton)
    }

    useEffect(()=>{
        fetchApi()
    },[])

    useEffect(() => {
    setTodos(buscador)
    }, [buscador])



    return (
        <>
        
            <div className='mainProducts'>
                <Barra />
                <Header />
                <BuscadorProductos/>
                <ContadorCarrito />

                <h3 className='title-category'>Productos nuevos</h3>
                <div className="botones-filtro">
                <Slider {...settings}>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria0" onClick={fetchApi}>Todos</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria1" value="Sofás" onClick={capturarCategoria}>Sofás</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria2" value="Camas" onClick={capturarCategoria}>Camas</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria3" value="Sala exterior" onClick={capturarCategoria}>Sala exterior</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria4" value="Bibliotecas" onClick={capturarCategoria}>Bibliotecas</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria5" value="Escritorios" onClick={capturarCategoria}>Escritorios</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria7" value="Mesas de centro" onClick={capturarCategoria}>Mesas de centro</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria8" value="Mesas de noche" onClick={capturarCategoria}>Mesas de noche</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria9" value="Sillas" onClick={capturarCategoria}>Sillas</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria10" value="Bancas" onClick={capturarCategoria}>Bancas</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria11" value="Mesas de comedor" onClick={capturarCategoria}>Mesas de comedor</button>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria12" value="Repisas" onClick={capturarCategoria}>Repisas</button>
                    </div>
                </Slider>
                </div>
                <h2 className='title-category2'>{tituCategoria}</h2>
                <section className='section__products'>
                        {todos.length===0 
                        ? (
                            <>
                                <ClipLoader color='#dcaa47'/>
                            </>
                        )
                        : 
                        todos.map((productos,key)=><ProductCard key={key} productos={productos}/>)}
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
