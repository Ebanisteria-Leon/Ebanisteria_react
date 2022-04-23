import React, {useEffect} from 'react'

import '../../../assets/css/Login.css'
import aos from "aos";
import "aos/dist/aos.css";
import Logo from '../../../assets/images/logo/logoSolo.png'

import { NavLink } from 'react-router-dom'

import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { Imagen } from '../../UI/Imagen/Imagen'

export const Login = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
        })
    }, [])

    return (
        <div className='mainLogin'>
            <Barra />
            <Header />
            <div className='contenedor_boxLogin'>
                <div className='img_login'></div>
                <div className='login_box' data-aos='fade-left'>
                    <div className='login'>
                        <div className='logo_login'>
                            <Imagen url={Logo} />
                            <h2>INICIO DE SESIÓN</h2>
                        </div>
                        <form className='formLogin'>
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
                                <input type='password' id='email' required />
                                <label className='labelForm' for='email'>
                                    Contraseña
                                </label>
                                <span></span>
                            </div>
                            <div className='recuperar'>
                                <NavLink to='/RecoverPass'>
                                    <a href='/RecoverPass'>
                                        ¿Olvidaste tu contraseña?{' '}
                                    </a>
                                </NavLink>
                            </div>
                            <div className='divbtn'>
                                <button className='btnSubmit'>
                                    Iniciar Sesión
                                </button>
                            </div>
                            <div className='accesos'>
                                <p>¿No tienes cuenta? </p>
                                <NavLink to='/Register'>
                                    <a href='/Register'> Regístrate</a>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
