import React, {useState, useEffect} from 'react'
import '../../../assets/css/ContadorCarrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../../hooks/StateProvider'
import { getBasketTotal } from '../../hooks/reducer'
import { actionTypes } from '../../hooks/reducer'
import { MostrarProductos } from '../MostrarProductos/MostrarProductos';
import imgCarrito from '../../../assets/images/iconos/shopping-cart.png'
import { Total } from '../Total/Total';
import axios from 'axios';
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'

export const ContadorCarrito = () => {

    let idUsuario = localStorage.getItem("idUser")
    let fechaPedidos
    let confirmar = Boolean
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [{basket}, dispatch] = useStateValue()
    const [mostrar, setMostrar] = useState(true)
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    const [form, setForm] = useState({
        fechaPedido: "15/06/2022",
        estadoPedido: "PE",
        idComprobante: null,
        idTipoPago: null,
        idPersona: Number(idUsuario),
        idProducto: basket
    })

    const limpiarCarro =()=>dispatch({
        type: actionTypes.CLEAR_CART
    })
    
    const mostrarCarrito = () =>{
        const boxCarrito = document.querySelector('.box-carrito')
        setMostrar(!mostrar)

        if(mostrar){
            boxCarrito.style.opacity='1'
            boxCarrito.style.zIndex='2'
            boxCarrito.style.transform='scale(1)'
        }else{
            boxCarrito.style.opacity='0'
            boxCarrito.style.zIndex='-1'
            boxCarrito.style.transform='scale(0.6)'
        }
    }

    
    const [tipoPago, setTipoPago] = useState()
    const [comprobante, setComprobante] = useState()

    const obtenerTipoDePago = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/detail/tipoPago/")
        const responseJSON = await response.json()
        setTipoPago(responseJSON.results)
    }

    const obtenerComprobante = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/detail/comprobantePago/")
        const responseJSON = await response.json()
        setComprobante(responseJSON.results)
    }

    const generarPedido = () =>{
        const overlay = document.querySelector('.overlayPedido')
        const container = document.querySelector('.boxPedido')

        overlay.style.visibility="visible"
        overlay.style.opacity="1"
        container.style.opacity="1"
        container.style.transform="scale(1)"
        generarFecha()
    }

    const generarFecha=()=>{
        let fecha = new Date()
        let meses = fecha.getUTCMonth() + 1
        let day = fecha.getUTCDate()
        let year = fecha.getUTCFullYear()
        let fechaCompleta = day + "/" + meses + "/" + year
        console.log(fechaCompleta);
        fechaPedidos= fechaCompleta
    }

    const cerrarPedido = () =>{
        const overlay = document.querySelector('.overlayPedido')
        const container = document.querySelector('.boxPedido')

        overlay.style.visibility="hidden"
        overlay.style.opacity="0"
        container.style.opacity="0"
        container.style.transform="scale(0.6)"
    }

    const manejadorSubmit =(e) =>{
        e.preventDefault()
        crearPedido()
    }

    const cambiarEstado = () =>{
        confirmar= true
        crearPedido()
    }

    const crearPedido = async () =>{
        cambiarEstadoModalEmail(!estadoModalEmail)
        if (confirmar === true) {
            let url= "https://leon-ebanisteria.herokuapp.com/detail/pedido/"
            await axios.post(url, form)
            .then(res=>{
                console.log(res);
            })
        }
        
    }

    const handleChange = (e) =>{
        let comprobante = document.getElementById('selectComprobante')
        let tipoPago = document.getElementById('selectTipoPago')

        setForm({
            ...form,
            idComprobante: Number(comprobante.value),
            idTipoPago: Number(tipoPago.value),
            idProducto: basket,
            fechaPedido: fechaPedidos
        })
        console.log(form);
        console.log(comprobante.value);
    }
    const manejadorBoton =() =>{

    }

    useEffect(() => {
        setCantidad(
            basket.reduce((previus, current) => previus + current.quantity, 0)
        )
        setTotal(
            basket.reduce((amount, item) => amount + item.valor * item.quantity, 0)
        )
    }, [basket])

    useEffect(() => {
        obtenerTipoDePago()
        obtenerComprobante()
    }, [])

    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>Confirmar cambios?</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
            <button className="contadorCarrito" onClick={mostrarCarrito}>
                    <img src={imgCarrito} alt="" />
                    <p>{cantidad}</p>
            </button>

            <div className="box-carrito">
                <div className="tituPAgregados">
                    <h4>PRODUCTOS AGREGADOS</h4>
                </div>
                <div className="productos-agregados">
                    {basket.length===0 ? 'No hay productos agregados' : 
                    basket.map((productos,_)=><MostrarProductos key={productos.id} productos={productos}/>)}
                </div>
                <div className="pTotal">
                    <div className="boxLimpiar">
                        <button onClick={limpiarCarro} className="limpiarCarrito">Limpiar carrito</button>
                    </div>
                    <Total precioTotal={total} pTotal={cantidad}/>
                </div>
                <div className="botonesPAgregados">
                    <NavLink to="/Productos-agregados">
                        <button className="Bver">Mi carrito</button>
                    </NavLink>
                        <button className="botonTotal" onClick={generarPedido}>Verificar</button>
                </div>
            </div>

            <div className="overlayPedido">
                <div className="boxPedido">
                    <div className='close'>
                    <button className='buttonClose' onClick={cerrarPedido}>
                        <i className='fas fa-times-circle'></i>
                    </button>
                    </div>
                    <h2>Realizar Pedido</h2>
                <form className='formAgregar22' onSubmit={manejadorSubmit}>
                <div className="select_agregar">
                    <select id="selectTipoPago" onChange={handleChange}>
                        <option value="">Tipo de pago</option>
                        {!tipoPago ? "" :
                        tipoPago.map((index, key)=>{
                            return (
                            <option value={index.idTipoPago} key={key}>{index.nombre}</option>
                            )
                    })}
                    </select>

                    <select id="selectComprobante" onChange={handleChange}>
                        <option value="">Comprobante de pago</option>
                        {!comprobante ? "" :
                        comprobante.map((index, key)=>{
                            return (
                            <option value={index.idComprobantePago} key={key}>{index.nombre}</option>
                            )
                    })}
                    </select>
                    </div>

                    <div className='divbtn'>
                        <button className='btnSubmit' onClick={manejadorBoton} > Realizar pedido </button>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}
