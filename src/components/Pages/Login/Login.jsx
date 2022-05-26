import React, {useEffect, useState} from 'react'

import '../../../assets/css/Login.css'
import aos from "aos";
import "aos/dist/aos.css";
import Logo from '../../../assets/images/logo/logoSolo.png'
import axios from 'axios'

import { NavLink } from 'react-router-dom'

import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { Imagen } from '../../UI/Imagen/Imagen'

export const Login = () => {

    const [state, setState] = useState({
        form:{
          "username":"",
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
    
    }

      const manejadorBoton=()=>{
        let url="http://127.0.0.1:8000/login/"
        axios.post(url, state.form)
        .then(response => {
          console.log(response);
            if(response.data.status === "ok"){

            }else{
              setState({
                error:true,
                errorMsg:response.data.Message
              })
            }
        }).catch(error =>{
          console.log(error);
          setState({
            error:true,
            errorMsg:"Error al conectar con el API"
          })
        })
      }

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
                        <form className='formLogin' onSubmit={manejadorSubmit}>
                            <div className='txt_field'>
                                <input type='text' id='nombre' autoComplete='off' name="username" required autoFocus onChange={manejadorChange}/>
                                <label className='labelForm' for='nombre'>
                                    Nombre De Usuario
                                </label>
                                <span></span>
                            </div>

                            <div className='txt_field'>
                                <input type='password' id='email' name="password" required onChange={manejadorChange}/>
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
                                <button className='btnSubmit' onClick={manejadorBoton}>
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
