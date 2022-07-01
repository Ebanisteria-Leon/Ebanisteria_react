import React,{useState, useEffect} from 'react'
import '../../../assets/css/ProductosAgregados.css'
import { useViewModal } from '../../hooks/useViewModal'
import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { DescriptionProducts } from '../../UI/DescriptionProducts/DescriptionProducts'
import { ProductoAgregado } from '../../UI/ProductoAgregado/ProductoAgregado'
import { Total } from '../../UI/Total/Total'
import { useStateValue } from '../../hooks/StateProvider'
import { actionTypes } from '../../hooks/reducer'
import { getBasketTotal } from '../../hooks/reducer'
import { Imagen } from '../../UI/Imagen/Imagen'
import accounting from 'accounting'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'
import axios from 'axios'




export const ProductosAgregados = () => {

    const { mostrar_producto } = useViewModal()
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const [{basket}, dispatch] = useStateValue()
    let idUsuario = localStorage.getItem("idUser")
    let nombreUsuario = localStorage.getItem("nombre")
    let rolUser = localStorage.getItem("rolUser")
    let fechaPedidos
    let confirmar = Boolean
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [form, setForm] = useState({
        fechaPedido: "",
        estadoPedido: "PE",
        idComprobante: 1,
        idTipoPago: 1,
        idPersona: [Number(idUsuario)],
        idProducto: []
    })

    const eliminarProducto = (id) =>{
            dispatch({
                type: actionTypes.REMOVE_ONE_FROM_CART,
                idProducto: id,
            })
    }

    const manejadorSubmit =(e) =>{
        e.preventDefault()
        handleChange()
        crearPedido()
    }

    const handleChange = (e) =>{
        generarFecha()
        setForm({
            ...form,
            fechaPedido: fechaPedidos
        })
    }

    const generarFecha=()=>{
        let fecha = new Date()
        let meses = fecha.getUTCMonth() + 1
        let day = fecha.getUTCDate()
        let year = fecha.getUTCFullYear()
        let fechaCompleta = year + "-" + meses + "-" + day
        fechaPedidos= fechaCompleta
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
        window.location.reload()
    }
    const cambiarEstado = () =>{
        confirmar= true
        crearPedido()
    }
    const setearProducto = () =>{
        for (let index = 0; index < basket.length; index++) {
                form.idProducto.push(basket[index].idProducto)
        }
    }

    useEffect(() => {
        let boton= document.querySelector('.verificar')
        if(rolUser===null || rolUser===undefined || basket.length===0){
            boton.disabled=true
            boton.style.background="#7a7a7a"
            boton.style.cursor="default"
        }else{
            boton.disabled=false
            boton.style.background="#CA9A2F"
            boton.style.cursor="pointer"
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
            <div className='mainProductsAgregados'>
                <Barra />
                <Header />
                <div className="titu-miCarrito">
                        <h3 className='title-carrito'>MI CARRITO</h3>
                </div>
                <div className="contenedorPago">
                    <section className='section__products2'>
                        <div className='productos-tabla'>
                            <div className="box_tabla">
                                <table className="tabla-producto">
                                    <thead className="cabecera-producto">
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="cuerpo-producto">
                                        {basket?.length === 0 
                                        ? <p className='pNoExiste'>No existen productos agregados a tu carrito</p>
                                        :basket.map((productos,_)=>{
                                            return(
                                                <tr>
                                                <td>
                                                    <div className="descripcion-productoAgregado">
                                                        <Imagen clase='img-table' url={productos.imagen} alt='Front'/>
                                                        <div className="descripcion2">
                                                            <p>{productos.nombre}</p>
                                                            <p>{accounting.formatMoney(productos.valor, "$")}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{productos.quantity}X</p>
                                                </td>
                                                <td>
                                                    <div className="boxTotalProducts">
                                                        {accounting.formatMoney(productos.valor*productos.quantity, "$")}
                                                        <div className="eliminarP">
                                                            <button className='delete-btn' onClick={()=>eliminarProducto(productos.idProducto)} title="Eliminar unidad"> 
                                                                <i className="fa-solid fa-xmark xProducto"></i>
                                                            </button>
                                                        </div> 
                                                    </div>
                                                </td>
                                            </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <div className="cart-pago">
                        <h2>Detalles de compra</h2>
                        <Total precioTotal={total} pTotal={cantidad}/>
                        <button className="botonTotal verificar" onClick={manejadorSubmit}>Verificar</button>
                        {rolUser===null &&
                            <p className='parrafoAdvertencia'>Regístrate para realizar el pedido</p>
                        }
                    </div>
                </div>

                <div className='overlay' id='overlay'>
                    <DescriptionProducts
                        id='floatWindow'
                        click={mostrar_producto}
                    />
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
