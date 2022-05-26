import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import '../../../assets/css/Register.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
// import Logo from '../../../assets/images/logo/logoSolo.png'
// import { Imagen } from '../../UI/Imagen/Imagen'

export const Register = () => {

    const [state, setState] = useState({
        form:{
          "username":"",
          "name":"",
          "last_name":"",
          "email":"",
          "password":"",
        },
        error:false,
        errorMsg:""
      })

    useEffect(() => {
        aos.init({
            duration: 1000,
        })
    }, [])

    const manejadorSubmit=(e)=>{
        e.preventDefault()
    }

    const manejadorChange = async (e)=>{
        await setState({
            form:{
                ...state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(state);
        // await setState({
        //   form:{
        //     ...state.form,
        //     [e.target.name]: e.target.value
        //   }
        // })
    }

    const manejadorBoton=()=>{
        let url="http://127.0.0.1:8000/users/usuario/"
        axios.post(url, state.form)
        .then(response => {
          console.log(response);
            if(response.data.status === "ok"){
              setState({
                error:false,
                errorMsg:"Usuario registrado con éxito"
              })
            }else{
              setState({
                error:true,
                errorMsg:response.data.Message
              })
            }
        }).catch(error =>{
          console.log("error");
          setState({
            error:true,
            errorMsg:"Error al conectar con el API"
          })
        })
      }



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

                        <form className='formRegister' onSubmit={manejadorSubmit}>
                            <div className='txt_field_register'>
                                <input
                                    type='text'
                                    id='nombreUsuario'
                                    autoComplete='off'
                                    required
                                    name='username'
                                    onChange={manejadorChange}
                                />
                                <label className='labelForm' for='nombreUsuario'>
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
                                    name="name"
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
                                    name="last_name"
                                    onChange={manejadorChange}
                                />
                                <label className='labelForm' for='apellido'>
                                    Apellidos
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input type='email' id='email' name="email" required onChange={manejadorChange}/>
                                <label className='labelForm' for='email'>
                                    Email
                                </label>
                                <span></span>
                            </div>
                            <div className='txt_field_register'>
                                <input type='password' id='password' name="password" required onChange={manejadorChange}/>
                                <label className='labelForm' for='password'>
                                    Contaseña
                                </label>
                                <span></span>
                            </div>
                            <div className='divbtn_register'>
                                <button className='btnSubmit' onClick={manejadorBoton}>
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
