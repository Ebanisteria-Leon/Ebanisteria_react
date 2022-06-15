import accounting from 'accounting'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Imagen } from '../Imagen/Imagen'

export const MisPedidos = () => {

    let idUser= localStorage.getItem('idUser')
    const [usuario, setUsuario] = useState([])

    const obtenerMiPedido=async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/detail/pedido/?idPersona__id=" + idUser)
        const responseJSON =await response.json()
        console.log(responseJSON.results);
        setUsuario(responseJSON.results)
    }

    const eliminarPedido = async (id) =>{
        let url= "https://leon-ebanisteria.herokuapp.com/detail/pedido/"
        let isDelete = window.confirm(
            `Estas seguro de eliminar tu pedido con el id ` + id
        )
        if(isDelete){
            let endpoint = url+id+'/'
            await axios.delete(endpoint)
            .then((res) =>{
                console.log(res);
                // window.location.reload()
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
    <div className="contenedorPago">
        <section className='section__products2'>
            <div className='pedido-tabla'>
                <div className="box_tabla">
                    <table className="tabla-producto">
                        <thead className="cabecera-producto">
                            <tr>
                                <th>Producto</th>
                                <th>Estado</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody className="cuerpo-producto">
                            {usuario?.length === 0 
                            ? <p className='pNoExiste'>No tienes pedidos actualmente</p>
                            :usuario.map((pedido,_)=>{
                                return(
                                    <tr>
                                    <td>
                                        <div className="descripcion-productoAgregado">
                                            <p>{pedido.idProducto.length}</p>
                                            {pedido.idProducto.map((index,_)=>{
                                                return(
                                                    <>
                                                        <Imagen clase='img-table' url={index.imagen} alt='Front'/>
                                                        <div className="descripcion2">
                                                            <p>{index.nombre}</p>
                                                            <p>{accounting.formatMoney(index.valor, "$")}</p>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </td>
                                    <td>
                                        <p>{pedido.estadoPedido}</p>
                                    </td>
                                    <td>
                                        <div className="boxTotalProducts">
                                            <p>{pedido.fechaPedido}</p>
                                            <div className="eliminarP">
                                                <button className='delete-btn' onClick={()=>eliminarPedido(pedido.idPedidosPendientes)} title="Eliminar unidad"> 
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
    </div>
  )
}
