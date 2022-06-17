import accounting from 'accounting'
import React, {useState, useEffect} from 'react'
import '../../../assets/css/TableSalesDate.css'
import { MisPedidos } from '../../UI/MisPedidos/MisPedidos'
import { SideBar } from '../../UI/SideBar/SideBar'

export const TableSalesDate = () => {

    const [pedido, setPedido] = useState()

    const obtenerMiPedido=async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/detail/pedido/" )
        const responseJSON =await response.json()
        console.log(responseJSON);
        setPedido(responseJSON)
    }

    useEffect(() => {
        obtenerMiPedido()
    }, [])

    return (
        <>
            <div className='mainTable-saleDate'>

                <h3 className='title-table-salesDate'>PEDIDOS EN PROCESO</h3>
                <SideBar />
                <section className='section__table-salesDate'>
                    <table className='table-salesDate'>
                        {/* Cabecera de la tabla */}
                        <thead>
                            <tr className='thead'>
                                <th scope="col">Id pedido</th>
                                <th scope="col">Nombre del producto</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Precio Pedido</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla, con la info de los productos */}
                        {!pedido ? "No existen pedidos" :
                        pedido.map((index,_)=>{
                            return(
                                <>
                                    <tbody>
                                        <tr>
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
