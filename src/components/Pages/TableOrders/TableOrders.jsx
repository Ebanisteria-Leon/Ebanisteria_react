import React, { useEffect, useState } from 'react'
import '../../../assets/css/TableOrders.css'

import { SideBar } from '../../UI/SideBar/SideBar'

export const TableOrders = () => {

    const url = 'https://rickandmortyapi.com/api/character?page=2'

    const [pedidos, setPedidos] = useState([])

    const fetchApi = async (url) => {
        const res = await fetch(url)
        const resJson = await res.json()
        setPedidos(resJson.results)
    }

    useEffect(() => {
        fetchApi(url)
    }, [])
    

    return (
        <>
            <div className='mainTable-orders'>
                <h3 className='title-table-orders'>Tabla de pedidos</h3>

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

                        <tbody>
                            {pedidos.map((index, key) => {
                                return (
                                    <tr key={key}>
                                        <th>{index.name}</th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}
