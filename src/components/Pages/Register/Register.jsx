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
    const [activa1, setActiva1] = useState(false)
    const [activa2, setActiva2] = useState(false)
    let colorModal = ''
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
        let url = 'https://leon-ebanisteria.herokuapp.com/users/usuario/'
        let password1 = document.querySelector('#password1')
        let password2 = document.querySelector('#password2')
        if(password1.value===password2.value){
            axios
            .post(url, state.form)
            .then((response) => {
                cambiarEstadoModalEmail(!estadoModalEmail)
                setState({
                    error: false,
                    errorMsg: response.data.message,
                })
                setTimeout(() => {
                    history('/Login')
                }, 3000);
            })
            .catch((error) => {
                console.log(error)
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
                    errorMsg: 'El nombre de usuario o el correo electrónico ya existen',
                })
            })
        }else{
            cambiarEstadoModalEmail(!estadoModalEmail)
            setState({
                form: {
                    ...state.form,
                },
                error: true,
                errorMsg: 'Las contraseñas no coinciden',
            })
        }
    }

    const mostrarContrasena=()=>{
        
        let tipo = document.getElementById("password1");
        if(tipo.type === "password"){
            tipo.type = "text";
            setActiva1(true)
        }else{
            tipo.type = "password";
            setActiva1(false)
        }
    }

    const mostrarContrasena2 = () =>{
        
        let tipo2 = document.getElementById("password2");

        if(tipo2.type === "password"){
            tipo2.type = "text";
            setActiva2(true)
        }else{
            tipo2.type = "password";
            setActiva2(false)
        }
    }


    return (
        <div className='mainRegister'>
            {state.error === true ?(
                <Modal
                    estado={estadoModalEmail}
                    cambiarEstado={cambiarEstadoModalEmail}
                    color={"#FF5733"}
                >
                    <p>{state.errorMsg}</p>
                </Modal>
            )
            :(
                <Modal
                    estado={estadoModalEmail}
                    cambiarEstado={cambiarEstadoModalEmail}
                    color={"#008F39"}
                >
                    <p>{state.errorMsg}</p>
                </Modal>
            )
            }
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
                                    id='password1'
                                    name='password'
                                    required
                                />
                                <label className='labelForm' for='password1'>
                                    Contaseña
                                </label>
                                {activa1===false 
                                    ?<i onClick={mostrarContrasena} className="fa-solid fa-eye ojoPassword"></i>
                                    :<i onClick={mostrarContrasena} class="fa-solid fa-eye-slash ojoPassword"></i>
                                }
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input
                                    type='password'
                                    id='password2'
                                    name='password'
                                    required
                                    onChange={manejadorChange}
                                />
                                <label className='labelForm' for='password2'>
                                    Confirmar contraseña
                                </label>
                                {activa2===false
                                    ?<i onClick={mostrarContrasena2} className="fa-solid fa-eye ojoPassword"></i>
                                    :<i onClick={mostrarContrasena2} class="fa-solid fa-eye-slash ojoPassword"></i>
                                }
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
