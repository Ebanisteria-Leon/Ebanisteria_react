import React, { useEffect, useState } from 'react'

import '../../../assets/css/Login.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import Logo from '../../../assets/images/logo/logoSolo.png'
import axios from 'axios'

import { NavLink, useNavigate } from 'react-router-dom'

import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { Imagen } from '../../UI/Imagen/Imagen'
import { Modal } from '../../UI/Modal/Modal'

export const Login = () => {
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    let colorModal = ''
    let colorModal2 = ''

    const [state, setState] = useState({
        form: {
            username: '',
            password: '',
        },
        error: false,
        errorMsg: '',
    })

    useEffect(() => {
        aos.init({
            duration: 1000,
        })
    }, [])


    const manejadorSubmit = (e) => {
        e.preventDefault()
    }

    const manejadorChange = async (e) => {
        await setState({
            form: {
                ...state.form,
                [e.target.name]: e.target.value,
            },
            
        })
        console.log(state.form);
    }

    let history = useNavigate()
    
    const manejadorBoton = () => {
        let url = 'https://leon-ebanisteria.herokuapp.com/login/'
        axios
            .post(url, state.form)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    const rol = response.data.user.rolUser
                    const username = response.data.user.username
                    const imagenU = response.data.user.image
                    const name= response.data.user.name
                    const apellido= response.data.user.last_name
                    const idUser= response.data.user.id

                    localStorage.setItem('rolUser', rol)
                    localStorage.setItem('username', username)
                    localStorage.setItem('imagenUsuario', imagenU )
                    localStorage.setItem('nombre', name )
                    localStorage.setItem('apellido', apellido )
                    localStorage.setItem('idUser', idUser )

                    if (rol === 'Cliente'){
                        cambiarEstadoModalEmail(!estadoModalEmail)
                        setState({
                            error: false,
                            errorMsg: 'has iniciado sesión correctamente!',
                        })
                        setTimeout(() => {
                            history('/')
                            window.location.reload(true)
                        }, 3000);
                    }else if(rol === "Admin"){
                        history('/Admin')
                        window.location.reload(true)
                    }
                }
            })
            .catch((error) => {
                console.log(error)
                cambiarEstadoModalEmail(!estadoModalEmail)
                const inputNombre = document.getElementById('nombre')
                const inputEmail = document.getElementById('email')

                inputNombre.value = ''
                inputEmail.value = ''
                setState({
                    error: true,
                    errorMsg: 'las credenciales son incorrectas',
                })
            })
    }

    const handleGoogleLogin = () =>{

    }

    return (
        <div className='mainLogin'>
            {state.error === true ?(
                <Modal
                    estado={estadoModalEmail}
                    cambiarEstado={cambiarEstadoModalEmail}
                    color={colorModal="#FF5733"}
                >
                    <p>{state.errorMsg}</p>
                </Modal>
            )
            :(
                <Modal
                    estado={estadoModalEmail}
                    cambiarEstado={cambiarEstadoModalEmail}
                    color={colorModal2="#008F39"}
                >
                    <p>{state.errorMsg}</p>
                </Modal>
            )
            }
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
                        <form className='formLogin' onSubmit={manejadorSubmit}>
                            <div className='txt_field'>
                                <input
                                    type='text'
                                    id='nombre'
                                    autoComplete='off'
                                    name='username'
                                    required
                                    autoFocus
                                    onChange={manejadorChange}
                                />
                                <label className='labelForm' for='nombre'>
                                    Nombre De Usuario
                                </label>
                                <span></span>
                            </div>

                            <div className='txt_field'>
                                <input
                                    type='password'
                                    id='email'
                                    name='password'
                                    required
                                    onChange={manejadorChange}
                                />
                                <label className='labelForm' for='email'>
                                    Contraseña
                                </label>
                                <span></span>
                            </div>

                            <div className='recuperar'>
                                <NavLink to='/RecoverPass'>
                                    <a href='/RecoverPass'>
                                        Cambiar contraseña{' '}
                                    </a>
                                </NavLink>
                            </div>

                            <div className='divbtn'>
                                <button
                                    className='btnSubmit'
                                    onClick={manejadorBoton}
                                >
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
