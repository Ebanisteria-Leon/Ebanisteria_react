import React, {useState, useEffect} from 'react'
import '../../../assets/css/ContadorCarrito.css'
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
    let nombreUsuario = localStorage.getItem("nombre")
    let rolUser = localStorage.getItem('rolUser')
    let fechaPedidos
    let confirmar = Boolean
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [{basket}, dispatch] = useStateValue()
    const [mostrar, setMostrar] = useState(true)
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    const [form, setForm] = useState({
        fechaPedido: "",
        estadoPedido: "PE",
        idComprobante: 1,
        idTipoPago: 1,
        idPersona: [Number(idUsuario)],
        idProducto: []
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

    const generarFecha=()=>{
        let fecha = new Date()
        let meses = fecha.getUTCMonth() + 1
        let day = fecha.getUTCDate()
        let year = fecha.getUTCFullYear()
        let fechaCompleta = year + "-" + meses + "-" + day
        console.log(fechaCompleta);
        fechaPedidos= fechaCompleta
    }

    const manejadorSubmit =(e) =>{
        e.preventDefault()
        handleChange()
        crearPedido()
    }

    const cambiarEstado = () =>{
        confirmar= true
        crearPedido()
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
    const cerrarPedido = () =>{
        const overlay = document.querySelector('.overlayPedido')
        const container = document.querySelector('.boxPedido')

        overlay.style.visibility="hidden"
        overlay.style.opacity="0"
        container.style.opacity="0"
        container.style.transform="scale(0.6)"
        limpiarCarro()
    }

    const crearPedido = async () =>{
        cambiarEstadoModalEmail(!estadoModalEmail)
        if (confirmar === true) {
            let url= "https://leon-ebanisteria.herokuapp.com/detail/pedido/"
            await axios.post(url, form)
            .then(res=>{
                generarPedido()
            })
            .catch(err=>{
                console.log(err);
            })
        }
        
    }

    const handleChange = (e) =>{
        generarFecha()
        setForm({
            ...form,
            fechaPedido: fechaPedidos
        })
        console.log(form);
    }

    const setearProducto = () =>{
        for (let index = 0; index < basket.length; index++) {
                form.idProducto.push(basket[index].idProducto)
        }
    }

    useEffect(() => {
        let boton= document.querySelector('.verificar')
        if(rolUser===null || rolUser===undefined){
            boton.disabled=true
            boton.style.background="#7a7a7a"
            boton.style.cursor="default"
        }
        setCantidad(
            basket.reduce((previus, current) => previus + current.quantity, 0)
        )
        setTotal(
            basket.reduce((amount, item) => amount + item.valor * item.quantity, 0)
        )
        setearProducto()
    }, [basket])

    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>Quieres confirmar tu pedido?</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
            <button className="contadorCarrito" onClick={mostrarCarrito}>
                    <img src={imgCarrito} alt="" />
                    <p>{cantidad}</p>
            </button>

            <div className="box-carrito">
                <div className="tituPAgregados">
                    <h4>PRODUCTOS AGREGADOS</h4>
                    {rolUser===null &&
                        <p className='parrafoAdvertencia'>Regístrate para realizar el pedido</p>
                    }
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
                        <button className="botonTotal verificar" onClick={manejadorSubmit}>Verificar</button>
                </div>
            </div>

            <div className="overlayPedido">
                <div className="boxPedido">
                    <div className='close'>
                        <button className='buttonClose' onClick={cerrarPedido}>
                            <i className='fas fa-times-circle'></i>
                        </button>
                    </div>
                    <h2>PEDIDO REALIZADO CON ÉXITO!!</h2>
                    <i className="fa-solid fa-circle-check pedidoRealizado"></i> <br />
                    <p>Señor/a <b>{nombreUsuario}</b> su pedido se ha realizado correctamente, 
                    conserve porfavor este código: <b>{idUsuario}</b>. <br /><br />
                    Pronto será contactado para obtener detalles de su pedido.</p>
                    <p>Para más información comuniquese a esta linea telefónica: <br /> <b>+57 3134765432.</b></p>
                </div>
            </div>
        </>
    )
}
