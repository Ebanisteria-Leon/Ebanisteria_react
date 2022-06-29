import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../../../assets/css/Category.css'

import { Barra } from '../../UI/Barra/Barra'
import { Header } from '../../Layouts/Header/Header'
import axios from 'axios'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'


export const Category = () => {
    
    const [{ buscador }, dispatch] = useStateValue()
    const buscadorLocal = localStorage.getItem('buscador')
    const buscadorLocal2=JSON.parse(buscadorLocal)

    const mandarCategoria = (e) =>{
        // localStorage.clear()
        let valorBusqueda = e.target.value
        axios.get("https://leon-ebanisteria.herokuapp.com/api/producto/?search=" + valorBusqueda)
        .then((data) => {
            dispatch({
                type: actionTypes.BUSCADOR,
                data: data.data,
            })
        })
    }

    useEffect(() => {
        console.log("hola");
        localStorage.setItem("buscador", JSON.stringify(buscador))
        if(buscador.length>0){
            window.location.href="/products"
        }
    }, [buscador])
    

    return (
        <>
            <div className='mainCategory'>
                <Barra />
                <Header />

                <h3 className='title-page-category'>Categorías Disponibles</h3>

                <section className='section__category'>
                    <div className='cardCategory image1'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Sillas</h2>
                            <button className='linkCategory' value="sillas" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image2'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Comedores</h2>
                            <button className='linkCategory' value="mesas de comedor" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image3'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Sofás</h2>
                            <button className='linkCategory' value="sofás" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image4'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Camas</h2>
                            <button className='linkCategory' value="camas" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image5'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Salas exteriores</h2>
                            <button className='linkCategory' value="sala exterior" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image6'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Biblioteca</h2>
                            <button className='linkCategory' value="biblioteca" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image7'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Escritorios</h2>
                            <button className='linkCategory' value="escritorios" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image8'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Mesas de centro</h2>
                            <button className='linkCategory' value="mesas de centro" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image9'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Mesas de noche</h2>
                            <button className='linkCategory' value="Mesas de noche" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image10'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Bancas</h2>
                            <button className='linkCategory' value="Bancas" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
                        </div>
                    </div>

                    <div className='cardCategory image11'>
                        <div className='contentCard'>
                            <h2 className='nameCategory'>Repisas</h2>
                            <button className='linkCategory' value="Repisas" onClick={(e)=>mandarCategoria(e)}>Ver mas!</button>
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
