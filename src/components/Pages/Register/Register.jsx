import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import '../../../assets/css/Register.css'
import aos from 'aos'
import 'aos/dist/aos.css'

import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
// import Logo from '../../../assets/images/logo/logoSolo.png'
// import { Imagen } from '../../UI/Imagen/Imagen'

export const Register = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
        })
    }, [])

    return (
        <div className='mainRegister'>
            <Barra />
            <Header />
            <div className='contenedor_boxRegister'>
                <div className='register_box' data-aos='fade-right'>
                    <div className='register'>
                        <div className='titu_register'>
                            <h2>REGISTRARSE</h2>
                        </div>

                        <form className='formRegister'>
                            <div className='txt_field_register'>
                                <input
                                    type='text'
                                    id='documento'
                                    autoComplete='off'
                                    required
                                    autoFocus
                                />
                                <label className='labelForm' for='documento'>
                                    Documento
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input
                                    type='text'
                                    id='nombre'
                                    autoComplete='off'
                                    required
                                />
                                <label className='labelForm' for='nombre'>
                                    Nombres
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input
                                    type='text'
                                    id='apellido'
                                    autoComplete='off'
                                    required
                                />
                                <label className='labelForm' for='apellido'>
                                    Apellidos
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input type='email' id='email' required />
                                <label className='labelForm' for='email'>
                                    Email
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input type='password' id='password' required />
                                <label className='labelForm' for='password'>
                                    Contaseña
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input
                                    type='password'
                                    id='passwordR'
                                    required
                                />
                                <label className='labelForm' for='passwordR'>
                                    Confirmar Contraseña
                                </label>
                                <span></span>
                            </div>
                            <div className='divbtn_register'>
                                <button className='btnSubmit'>
                                    Registrarse
                                </button>
                            </div>
                        </form>
                        <div className='accesos'>
                            <p>¿Ya tienes una cuenta? </p>
                            <NavLink to='/Login'>
                                <a href='/Login'> Iniciar Sesión</a>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='img_register'></div>
            </div>
        </div>
    )
}
