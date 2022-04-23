import React from 'react'

export const Production = () => {
    return (

        <>
            <section>
                <h2>Produccion</h2>
                
                <article className='box_production'>

                    {/* Caja para pedidos en proceso */}
                    <a href='/' className='boxes'>Pedidos en Proceso</a>

                    {/* Caja para pedidos terminados */}
                    <a href='/' className='boxes'>Pedidos Terminados</a>

                    {/* Caja para despacho de pedidos */}
                    <a href='/' className='boxes'>Despacho de Pedidos</a>

                    {/* Caja para orden de produccion */}
                    <a href='/' className='boxes'>Orden de Produccion</a>

                    {/* Caja para cancelacion de pedidos */}
                    <a href='/' className='boxes'>Cancelacion de pedidos</a>

                </article>
            </section>
        </>
    )
}
