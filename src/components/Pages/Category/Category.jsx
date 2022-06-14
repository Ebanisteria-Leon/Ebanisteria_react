import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../../../assets/css/Category.css'

import { Barra } from '../../UI/Barra/Barra'
import { Header } from '../../Layouts/Header/Header'

export const Category = () => {

    // useEffect(() => {
    //     let token= localStorage.getItem("token")
    //     console.log(token);
    // }, [])
    

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
                            <h2 className='nameCategory'>Camas</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image5'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Salas exteriores</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image6'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Bibliotecas</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image7'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Escritorios</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image8'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Mesas de centro</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image9'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Mesas de noche</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image10'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Bancas</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image11'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Repisas</h2>
                            <button className='linkCategory'>Ver mas!</button>
                        </div>
                    </div>
                </section>

                <section className='section__links'>
                    <ul className='linksProducts'>
                        <li><NavLink to='/Products'>Productos</NavLink></li>
                        <li><NavLink to='/Products'>Productos Nuevos</NavLink></li>
                        <li><NavLink to='/Products'>Productos No Destacados</NavLink></li>
                        <li><NavLink to='/Products'>Productos Destacados</NavLink></li>
                    </ul>
                </section>

            </div>
        </>
    )
}
