import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../assets/css/Category.css'

import { Barra } from '../../UI/Barra/Barra'
import { Header } from '../../Layouts/Header/Header'

export const Category = () => {
    return (
        <>
            <div className='mainCategory'>
                <Barra />
                <Header />

                <h3 className='title-page-category'>Categorias Agregadas</h3>

                <section className='section__category'>
                    <div className='cardCategory image1'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Sillas</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image2'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Comedores</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image3'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Sofás</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image4'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Habitaciones</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image5'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Diseño de interiores</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>
                </section>

                <section className='section__links'>
                    <ul className='linksProducts'>
                        <li><NavLink to='/Products'>Productos</NavLink></li>
                        <li><NavLink to='/Products'>Productos Nuevos</NavLink></li>
                        <li><NavLink to='/Products'>Productos Mas Vendidos</NavLink></li>
                        <li><NavLink to='/Products'>Productos Mejor Calificados</NavLink></li>
                    </ul>
                </section>

            </div>
        </>
    )
}
