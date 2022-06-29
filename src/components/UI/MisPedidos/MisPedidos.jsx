import accounting from 'accounting'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Imagen } from '../Imagen/Imagen'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'


export const MisPedidos = () => {

    let idUser= localStorage.getItem('idUser')
    const [usuario, setUsuario] = useState([])
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    let confirmar = Boolean
    let colorModal="#fff"
    let idDelProducto
    let estadoPedido
    let idUsuario = localStorage.getItem("idUser")
    const [idPedido, setIdPedido] = useState({})
    const [form2, setForm2] = useState({})
    let url = "https://leon-ebanisteria.herokuapp.com/detail/pedido/"

    const obtenerMiPedido=async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/detail/pedido/?idPersona__id="+ idUser + "&ordering=-idPedidosPendientes")
        // const response = await fetch("https://leon-ebanisteria.herokuapp.com/detail/pedido/?idPersona__id="+ idUser)         
        const responseJSON =await response.json()
        console.log(response);
        setUsuario(responseJSON)
    }

    const cambiarEstado = () =>{
        confirmar= true
        eliminarPedido(idPedido)
    }

    const eliminarPedido = async (pedido) =>{
        pedido.idProducto.map((index,_)=>{
            return(
                idDelProducto=index.idProducto
            )
        })
        setForm2(pedido)
        let estadoPedidos

        if(pedido.estadoPedido==="PE"){
            estadoPedidos="CAN"
            estadoPedido = estadoPedidos
        }

        setForm2({
            ...pedido,
            estadoPedido: estadoPedidos,
            idProducto: [idDelProducto],
            idPersona: [Number(idUser)]
        })

        setIdPedido(pedido)
        actualizarPedido()
    }

    const actualizarPedido = () =>{
        cambiarEstadoModalEmail(!estadoModalEmail) 
        if(confirmar === true){
            let endpoint = url+form2.idPedidosPendientes+'/'
            axios.put(endpoint, form2)
            .then((res) => {
                obtenerMiPedido()
            })
        }
    }

    useEffect(() => {
        obtenerMiPedido()
    }, [])
    

  return (
    <div className="contenedorPago contenedorPedido">
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                
                <p>Cancelar pedido?</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
        <section className='section__products2 section_tablaPedido'>
            {estadoPedido === "CAN"
            && <p>No tienes pedidos</p>
            }
            <div className='pedido-tabla'>
                <div className="box_tabla">
                    <table className="tabla-producto tabla_pedido">
                        <thead className="cabecera-producto">
                            <tr>
                                <th>Código de pedido</th>
                                <th>Cantidad de productos</th>
                                <th>Productos</th>
                                <th>Estado</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="cuerpo-producto">

                            {usuario?.length === 0 
                            ? <p className='pNoExiste'>No tienes pedidos actualmente</p>
                            :usuario.map((pedido,_)=>{
                                return(
                                    pedido.estadoPedido === "PE" 
                                    ?<tr>
                                        <td className='cantidadProductos'>
                                            <p>{pedido.idPedidosPendientes}</p>
                                        </td>
                                        <td className='cantidadProductos'>
                                            <p>{pedido.idProducto.length}</p>
                                        </td>
                                        <td className='box_producto_pedido'>
                                            <div className="descripcion-productoAgregado producto-pedido">
                                                {pedido.idProducto.map((index,_)=>{
                                                    return(
                                                        <>
                                                            <div className="productoPedido">
                                                                <Imagen clase='img-table' url={index.imagen} alt='Front'/>
                                                                <div className="descripcion2">
                                                                    <p>{index.nombre}</p>
                                                                    <p>{accounting.formatMoney(index.valor, "$")}</p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </td>
                                        <td className='estadoProducto'>
                                            {pedido.estadoPedido==="PE"&&
                                                <p>Pendiente</p>
                                            }
                                            {pedido.estadoPedido==="CAN"&&
                                                <p>Cancelado</p>
                                            }
                                        </td>
                                        <td>
                                            <div className="boxFechaPedido">
                                                <p>{pedido.fechaPedido}</p>
                                                
                                            </div>
                                        </td>
                                        <td>
                                            <div className="eliminarP2">
                                                <button className='delete-btn' onClick={()=>eliminarPedido(pedido)} title="Cancelar pedido"> 
                                                    <i className="fa-solid fa-xmark xPedido"> Cancelar Pedido</i>
                                                </button>
                                            </div> 
                                        </td>
                                    </tr>
                            : ""
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
  )
}
