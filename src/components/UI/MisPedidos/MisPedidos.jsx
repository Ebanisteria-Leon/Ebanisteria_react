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
    const [idPedido, setIdPedido] = useState()

    const obtenerMiPedido=async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/detail/pedido/?idPersona__id=" + idUser)
        const responseJSON =await response.json()
        console.log(responseJSON);
        setUsuario(responseJSON)
    }

    const cambiarEstado = () =>{
        confirmar= true
        eliminarPedido(idPedido)
    }

    const eliminarPedido = async (id) =>{
        setIdPedido(id)
        let url= "https://leon-ebanisteria.herokuapp.com/detail/pedido/"
        let endpoint = url+id+'/'
        cambiarEstadoModalEmail(!estadoModalEmail)
        if (confirmar === true) {
            console.log(idPedido);
            // setUsuario({
            //     ...usuario,
            //     estadoPedido: "CA"
            // })
            // await axios.update(url, usuario)
            // .then((res)=>{
            //     console.log(res);
            // })
            // .catch(err=>{
            //     console.log(err);
            // })
            
            await axios.delete(endpoint)
            .then((res) =>{
                console.log(res);
                obtenerMiPedido()
            })
            .catch(err=>{
                console.log(err);
                
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
            <div className='pedido-tabla'>
                <div className="box_tabla">
                    <table className="tabla-producto tabla_pedido">
                        <thead className="cabecera-producto">
                            <tr>
                                <th>Cantidad de productos</th>
                                <th>Productos</th>
                                <th>Estado</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="cuerpo-producto">
                            {usuario?.length === 0 
                            ? <p className='pNoExiste'>No tienes pedidos actualmente</p>
                            :usuario.map((pedido,_)=>{
                                return(
                                    <tr>
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
                                    </td>
                                    <td>
                                        <div className="boxTotalProducts">
                                            <p>{pedido.fechaPedido}</p>
                                            <div className="eliminarP2">
                                                <button className='delete-btn' onClick={()=>eliminarPedido(pedido.idPedidosPendientes)} title="Cancelar pedido"> 
                                                    <i className="fa-solid fa-xmark xPedido"> Cancelar Pedido</i>
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
    </div>
  )
}
