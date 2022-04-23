import React, { useEffect } from 'react'

import '../../../assets/css/RecoverPass.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom'

import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import Logo from '../../../assets/images/logo/logoSolo.png'
import { Imagen } from '../../UI/Imagen/Imagen'

export const RecoverPass = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
        })
    }, [])

    return (
        <div className='mainRecover'>
            <Barra />
            <Header />
            <div className='contenedor_boxRecover'>
                <div className='img_recover'></div>
                <div className='recover_box' data-aos='fade-left'>
                    <div className='recover'>
                        <div className='logo_recover'>
                            <Imagen url={Logo} />
                            <h2>Recuperar Contraseña</h2>
                        </div>

                        <form className='formRecover'>
                            <div className='txt_field'>
                                <input
                                    type='text'
                                    id='nombre'
                                    autoComplete='off'
                                    required
                                    autoFocus
                                />
                                <label className='labelForm' for='nombre'>
                                    Nombre
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field'>
                                <input type='password' id='password' required />
                                <label className='labelForm' for='password'>
                                    Contraseña
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field'>
                                <input
                                    type='password'
                                    id='passwordC'
                                    required
                                />
                                <label className='labelForm' for='passwordC'>
                                    Confirmar Contraseña
                                </label>
                                <span></span>
                            </div>
                            <div className='divbtn'>
                                <button className='btnSubmit'>
                                    Recuperar Contraseña
                                </button>
                            </div>
                            <div className='accesos_recover'>
                                <NavLink to='/Login'>
                                    <a href='/Login'>Iniciar sesión</a>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
