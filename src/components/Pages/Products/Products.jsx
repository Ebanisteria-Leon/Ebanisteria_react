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
import { Paginacion } from '../../UI/Paginacion/Paginacion'



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
                initialSlide: 2,
                dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                }
            }
            ]
        };

    const { ocultar_producto } = useViewModal()
    const [{ buscador }, dispatch] = useStateValue()
    const [todos, setTodos] = useState([])
    const [categoria, setCategoria] = useState()
    const [tituCategoria, setTituCategoria] = useState("")
    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(10)
    let maximo = todos.length / porPagina
    let buscador2 = []

    const fetchApi=async()=>{
        setTituCategoria("")

        if(buscador2===null || buscador2===undefined || buscador2.length===0){
            const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/?ordering=-idProducto")
            const responseJSON = await response.json()
            setTodos(responseJSON)
        }
        
    }


    const fetchApi2=async()=>{
        setTituCategoria("")
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/?ordering=-idProducto")
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }

    const obtenerCategoria=async(categoria)=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/?search=" + categoria)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }

    const capturarCategoria = (e) =>{
        let categoriaBoton= e.target.textContent
        setTituCategoria(categoriaBoton)
        obtenerCategoria(categoriaBoton)
    }

    useEffect(()=>{
        buscador2= JSON.parse(localStorage.getItem('buscador'))
        if(buscador2===null || buscador2===undefined || buscador2.length===0){

        }else{
            setTodos(buscador2)
            }
        fetchApi()
        localStorage.removeItem('buscador')
    },[])

    useEffect(() => {
        if(buscador===null || buscador===undefined || buscador.length===0){

        }else{
            setTodos(buscador)
            setPagina(1)
        }
    }, [buscador])
    

    

    return (
        <>
        
            <div className='mainProducts'>
                <Barra />
                <Header />
                <BuscadorProductos/>
                <ContadorCarrito />

                <h3 className='title-category'>Productos</h3>
                <div className="botones-filtro">
                <Slider {...settings}>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria0"  title="Todos">Todos</button>
                    <div className="overlayBoton" onClick={fetchApi2}>Todos</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria1" value="Sofás" title="Sofás">Sofás</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Sofás</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria2" value="Camas"title="Camas">Camas</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Camas</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria3" value="Sala Exterior" title="Sala exterior">Sala exterior</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Sala exterior</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria4" value="Biblioteca" title="Bibliotecas">Biblioteca</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Biblioteca</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria5" value="Escritorios" title="Escritorios">Escritorios</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Escritorios</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria7" value="Mesas de centro" title="Mesas de centro">Mesas de centro</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Mesas de centro</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria8" value="Mesas de noche" title="Mesas de noche">Mesas de noche</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Mesas de noche</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria9" value="Sillas" title="Sillas">Sillas</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Sillas</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria10" value="Bancas" title="Bancas">Bancas</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Bancas</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria11" value="Mesas de comedor" title="Mesas de comedor">Mesas de comedor</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Mesas de comedor</div>
                    </div>
                    <div className='contenedorBoton' style={{ width: 200 }}>
                    <button className="botonCategoria12" value="Repisas" title="Repisas">Repisas</button>
                    <div className="overlayBoton" onClick={capturarCategoria}>Repisas</div>
                    </div>
                </Slider>
                </div>
                <h2 className='title-category2'>{tituCategoria}</h2>
                <div className="paginator">
                    <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}/>
                </div>
                <section className='section__products'>
                        {todos===null || todos===undefined || todos.length===0 ? <ClipLoader color='#dcaa47'/> : ""}
                        {todos===null || todos===undefined || todos.length===0 
                        ? (
                            <>
                                
                                <p className='parrafoNoHayPromo'><b>No existen Productos</b></p>
                            </>
                        )
                        : 
                        todos
                        .slice(
                            (pagina - 1) * porPagina, 
                            (pagina - 1) * porPagina + porPagina)
                        .map((productos,key)=>{
                            return(
                                <ProductCard key={key} productos={productos}/>
                            )
                        })}
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
