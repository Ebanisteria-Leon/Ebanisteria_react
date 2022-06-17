import React, { useEffect, useState } from 'react'
import '../../../assets/css/TableOrders.css'

import { SideBar } from '../../UI/SideBar/SideBar'

export const TableOrders = () => {

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
            <div className='mainTable-orders'>
                <h3 className='title-table-orders'>Pedidos por estado</h3>

                <SideBar />
                <section className='section__table-orders'>
                    <table className='table-orders'>
                        <thead>
                            <tr>
                                <th scope='col'>Inactivo</th>
                                <th scope='col'>Por entregar</th>
                                <th scope='col'>Entregado</th>
                            </tr>
                        </thead>
                            {!pedido ? "No existen pedidos" :
                            pedido.map((index, key) => {
                                return (
                                    <>
                                    <tbody>
                                        <tr key={key}>
                                        {index.estadoPedido === "CAN" 
                                            ?<th>PENDIENTE</th>
                                            :<th>0</th>
                                        }
                                        {index.estadoPedido === "PE" &&
                                            <th>PENDIENTE</th>
                                        }
                                        {index.estadoPedido === "EN"
                                            ?<th>PENDIENTE</th>
                                            :<th>0</th>
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
