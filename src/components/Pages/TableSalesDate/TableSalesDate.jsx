import accounting from 'accounting'
import React, {useState, useEffect} from 'react'
import '../../../assets/css/TableSalesDate.css'
import { MisPedidos } from '../../UI/MisPedidos/MisPedidos'
import { SideBar } from '../../UI/SideBar/SideBar'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'
import axios from 'axios'
import { useStateValue } from '../../hooks/StateProvider'

export const TableSalesDate = () => {

    const [pedido, setPedido] = useState()
    let idDelProducto
    let estadoPedido
    let confirmar = Boolean
    let colorModal="#fff"
    let url = "https://leon-ebanisteria.herokuapp.com/detail/pedido/"
    let idUser= localStorage.getItem('idUser')
    const [form2, setForm2] = useState({})
    const [idPedido, setIdPedido] = useState({})
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [{ buscador }, dispatch] = useStateValue()

    const obtenerMiPedido=async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/detail/pedido/" )
        const responseJSON =await response.json()
        console.log(responseJSON);
        setPedido(responseJSON)
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

        console.log(form2);

        setIdPedido(pedido)
        actualizarPedido()
    }

    const actualizarPedido = () =>{
        console.log(form2);
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

    useEffect(() => {
        setPedido(buscador)
    }, [buscador])
    

    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                
                <p>Cancelar pedido?</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
            <div className='mainTable-saleDate'>

                <h3 className='title-table-salesDate'>PEDIDOS EN PROCESO</h3>
                <SideBar url={"https://leon-ebanisteria.herokuapp.com/detail/pedido/?search="}/>
                <section className='section__table-salesDate'>
                    <table className='table-salesDate'>
                        {/* Cabecera de la tabla */}
                        <thead>
                            <tr className='thead'>
                                <th className="primerCol"></th>
                                <th scope="col">Código pedido</th>
                                <th scope="col">Nombre del producto</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Precio Pedido</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla, con la info de los productos */}
                        {!pedido ? "No existen pedidos" :
                        pedido.map((index,_)=>{
                            return(
                                <>
                                    <tbody>
                                        <tr>
                                            <td className="estadoPedido">
                                            {index.estadoPedido==="CAN"
                                                ?<div className="nuevo">

                                                </div>
                                                :""
                                            }
                                            </td>
                                            <td>{index.idPedidosPendientes}</td>
                                            <td>
                                            {index.idProducto.map((index,_)=>{
                                                    return(
                                                        <p>{index.nombre}</p>
                                                    )
                                                })}
                                            </td>
                                            <td>{index.fechaPedido}</td>
                                            <td>
                                            {index.idPersona.map((index,_)=>{
                                                return(
                                                    <>  <p>{index.id}</p>
                                                        <p>{index.name} {index.last_name}</p>
                                                        <p>{index.email}</p>
                                                    </>
                                                )
                                            })}
                                            </td>
                                            <td>
                                            {index.idProducto.map((index,_)=>{
                                                return(
                                                    <>
                                                    <span id="price-total-table">{accounting.formatMoney(index.valor, '$')}</span><br/>
                                                    </>
                                                )
                                            })}
                                            </td>
                                            {index.estadoPedido==="CAN"
                                                ? <td className='xPedido xPedido22'>-</td>
                                                :<td>
                                                        <div className="eliminarP2">
                                                            <button className='delete-btn' onClick={()=>eliminarPedido(index)} title="Cancelar pedido"> 
                                                                <i className="fa-solid fa-xmark xPedido xPedido2"> Cancelar Pedido</i>
                                                            </button>
                                                        </div> 
                                                    </td>
                                            }
                                            
                                        </tr>
                                        
                                    </tbody>
                                                               
                                </>
                            )
                        })}
                        </table> 
                </section>
            </div>
        </>
    )
}
