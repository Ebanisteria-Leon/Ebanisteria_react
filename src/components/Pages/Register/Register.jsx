import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import '../../../assets/css/Register.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { Modal } from '../../UI/Modal/Modal'

export const Register = () => {
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    let colorModal = '#FF5733'
    const [state, setState] = useState({
        form: {
            username: '',
            name: '',
            last_name: '',
            email: '',
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
    }

    const history = useNavigate()

    const manejadorBoton = () => {
        let url = 'http://127.0.0.1:8000/users/usuario/'
        axios
            .post(url, state.form)
            .then((response) => {
                if (response.data.status === 'ok') {
                    setState({
                        error: false,
                        errorMsg: 'Usuario registrado con éxito',
                    })
                    history('/Login')
                }
            })
            .catch((error) => {
                console.log('error')
                cambiarEstadoModalEmail(!estadoModalEmail)
                const inputNombre = document.getElementById('nombre')
                const inputEmail = document.getElementById('email')
                const inputUserName = document.getElementById('nombreUsuario')
                const inputApellido = document.getElementById('apellido')
                const inputPassword = document.getElementById('password')

                inputNombre.value = ''
                inputEmail.value = ''
                inputUserName.value = ''
                inputApellido.value = ''
                inputPassword.value = ''
                setState({
                    error: true,
                    errorMsg: 'No se ha podido registrar',
                })
            })
    }

    return (
        <div className='mainRegister'>
            {state.error === true && (
                <Modal
                    estado={estadoModalEmail}
                    cambiarEstado={cambiarEstadoModalEmail}
                    color={colorModal}
                >
                    <p>{state.errorMsg}</p>
                </Modal>
            )}
            <Barra />
            <Header />
            <div className='contenedor_boxRegister'>
                <div className='register_box' data-aos='fade-right'>
                    <div className='register'>
                        <div className='titu_register'>
                            <h2>REGISTRARSE</h2>
                        </div>

                        <form
                            className='formRegister'
                            onSubmit={manejadorSubmit}
                        >
                            <div className='txt_field_register'>
                                <input
                                    type='text'
                                    id='nombreUsuario'
                                    autoComplete='off'
                                    required
                                    name='username'
                                    onChange={manejadorChange}
                                />
                                <label
                                    className='labelForm'
                                    for='nombreUsuario'
                                >
                                    Nombre de usuario
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input
                                    type='text'
                                    id='nombre'
                                    autoComplete='off'
                                    required
                                    name='name'
                                    onChange={manejadorChange}
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
                                    name='last_name'
                                    onChange={manejadorChange}
                                />
                                <label className='labelForm' for='apellido'>
                                    Apellidos
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    required
                                    onChange={manejadorChange}
                                />
                                <label className='labelForm' for='email'>
                                    Email
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    required
                                    onChange={manejadorChange}
                                />
                                <label className='labelForm' for='password'>
                                    Contaseña
                                </label>
                                <span></span>
                            </div>
                            <div className='divbtn_register'>
                                <button
                                    className='btnSubmit'
                                    onClick={manejadorBoton}
                                >
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
