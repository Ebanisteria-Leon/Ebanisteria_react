import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { SideBar } from '../../UI/SideBar/SideBar'
import Cabinet from '../../../assets/images/IconsAdmin/cabinet.png'
import Destacados from '../../../assets/images/IconsAdmin/destacados.png'
import Estante from '../../../assets/images/IconsAdmin/estante.png'
import Shair from '../../../assets/images/IconsAdmin/shair.png'
import Sofa from '../../../assets/images/IconsAdmin/sofa.png'
import Armario from '../../../assets/images/IconsAdmin/armario.png'
import '../../../assets/css/MainAdmin.css'
import { ModalFiltros } from '../../UI/ModalFiltros/ModalFiltros'
import Audio from '../../../assets/audios/BienvenidoAdmin.mp3'

import '../../../assets/css/AdminPanel.css'

export const Admin = () => {
    const [dataDisponible, setDataDisponible] = useState([])
    const [dataNoDisponible, setDataNoDisponible] = useState([])
    const [dataDestacado, setDataDestacado] = useState([])
    const [dataNoDestacado, setDataNoDestacado] = useState([])
    const [dataNuevo, setDataNuevo] = useState([])
    const [dataPromocion, setDataPromocion] = useState([])
    let variable
    let variable2
    let variable3
    let variable4
    let variable5
    let variable6
    const [url, setUrl] = useState()
    const [titulo, setTitulo] = useState("")

    const abrirModal = () => {
        const overlay = document.querySelector('.overlayFiltro')
        const container = document.querySelector('.modalFiltro')

        overlay.style.visibility = 'visible'
        overlay.style.opacity = '1'
        container.style.opacity = '1'
        container.style.transform = 'scale(1)'
    }

    const obtenerDisponibles = () => {
        fetch(
            'https://leon-ebanisteria.herokuapp.com/api/producto/?estadoProducto=D'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataDisponible(data)
                setearUrl(data, 'PRODUCTOS DISPONIBLES')
                // abrirModal()
            })
    }
    const obtenerNoDisponibles = () => {
        fetch(
            'https://leon-ebanisteria.herokuapp.com/api/producto/?estadoProducto=ND'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataNoDisponible(data)
                setearUrl(data, 'PRODUCTOS NO DISPONIBLES')
            })
    }
    const obtenerDestacados = () => {
        fetch(
            'https://leon-ebanisteria.herokuapp.com/api/producto/?destacado=DE'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataDestacado(data)
                setearUrl(data, 'PRODUCTOS DESTACADOS')
            })
    }
    const obtenerNoDestacados = () => {
        fetch(
            'https://leon-ebanisteria.herokuapp.com/api/producto/?destacado=NDE'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataNoDestacado(data)
                setearUrl(data, 'PRODUCTOS NO DESTACADOS')
            })
    }
    const obtenerNuevos = () => {
        fetch(
            'https://leon-ebanisteria.herokuapp.com/api/producto/?tiempoProducto=NUE'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataNuevo(data)
                setearUrl(data, 'PRODUCTOS NUEVOS')
            })
    }
    const obtenerPromociones = () => {
        fetch(
            'https://leon-ebanisteria.herokuapp.com/api/producto/?estadoPromocion=ENP'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataPromocion(data)
                setearUrl(data, 'PRODUCTOS EN PROMOCI??N')
            })
    }
    variable = dataDisponible.length
    variable2 = dataNoDisponible.length
    variable3 = dataDestacado.length
    variable4 = dataNoDestacado.length
    variable5 = dataNuevo.length
    variable6 = dataPromocion.length

    const setearUrl = (data, titulo) => {
        setUrl(data)
        setTitulo(titulo)
    }

    useEffect(() => {
        obtenerDisponibles()
        obtenerNoDisponibles()
        obtenerDestacados()
        obtenerNoDestacados()
        obtenerNuevos()
        obtenerPromociones()
    }, [])

    return (
        <div className='mainAdmin'>
            {/* <audio src={Audio} autoPlay></audio> */}
            <div className='tituAdmin'>
                <h1>BIENVENIDO/A</h1>
                <h2>PANEL DE CONTROL</h2>
            </div>
            <div className='mainTablero'>
                <div
                    className='mainIcono'
                    onClick={() => {
                        obtenerDisponibles()
                        abrirModal()
                    }}
                >
                    <div className='conteo'>
                        <p>{variable}</p>
                    </div>
                    <div className='boxIcono'>
                        <img src={Sofa} alt='' />
                    </div>
                    <div className='pIcon'>
                        <p>Disponibles</p>
                        <i className='fa-solid fa-right-long'></i>
                    </div>
                </div>
                <div
                    className='mainIcono'
                    onClick={() => {
                        obtenerNoDisponibles()
                        abrirModal()
                    }}
                >
                    <div className='conteo'>
                        <p>{variable2}</p>
                    </div>
                    <div className='boxIcono'>
                        <img src={Estante} alt='' />
                    </div>
                    <div className='pIcon'>
                        <p>No disponibles</p>
                        <i className='fa-solid fa-right-long'></i>
                    </div>
                </div>
                <div
                    className='mainIcono'
                    onClick={() => {
                        obtenerDestacados()
                        abrirModal()
                    }}
                >
                    <div className='conteo'>
                        <p>{variable3}</p>
                    </div>
                    <div className='boxIcono'>
                        <img src={Destacados} alt='' />
                    </div>
                    <div className='pIcon'>
                        <p>Destacados</p>
                        <i className='fa-solid fa-right-long'></i>
                    </div>
                </div>
                <div
                    className='mainIcono'
                    onClick={() => {
                        obtenerNoDestacados()
                        abrirModal()
                    }}
                >
                    <div className='conteo'>
                        <p>{variable4}</p>
                    </div>
                    <div className='boxIcono'>
                        <img src={Cabinet} alt='' />
                    </div>
                    <div className='pIcon'>
                        <p>No destacados</p>
                        <i className='fa-solid fa-right-long'></i>
                    </div>
                </div>
                <div
                    className='mainIcono'
                    onClick={() => {
                        obtenerNuevos()
                        abrirModal()
                    }}
                >
                    <div className='conteo'>
                        <p>{variable5}</p>
                    </div>
                    <div className='boxIcono'>
                        <img src={Shair} alt='' />
                    </div>
                    <div className='pIcon'>
                        <p>Nuevos</p>
                        <i className='fa-solid fa-right-long'></i>
                    </div>
                </div>
                <div className='mainIcono' onClick={() => {
                        obtenerPromociones()
                        abrirModal()
                    }}>
                    <div className='conteo'>
                        <p>{variable6}</p>
                    </div>
                    <div className='boxIcono'>
                        <img src={Armario} alt='' />
                    </div>
                    <div className='pIcon'>
                        <p>Promoci??n</p>
                        <i className='fa-solid fa-right-long'></i>
                    </div>
                </div>
            </div>
            <SideBar />
            <div className='overlayFiltro'>
                <ModalFiltros url={url} titulo={titulo} />
            </div>
        </div>
    )
}
