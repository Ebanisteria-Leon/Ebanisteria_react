import React, {useEffect, useState} from 'react'
import '../../../assets/css/Email.css'

import emailjs from '@emailjs/browser';

import { NavLink } from 'react-router-dom';
import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import Logo from '../../../assets/images/logo/logoSoloNegro.png'
import { Imagen } from '../../UI/Imagen/Imagen'
import { Modal } from '../../UI/Modal/Modal';

export const Email = () => {
    let inputNombre
    let inputEmail
    let inputMensaje

    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)

    const sendEmail =(event)=>{
        event.preventDefault()

        emailjs.sendForm('service_qadbv1m', 'template_3kt88hq', event.target, 'CI4r5lnQa9QLwrcCF')
        .then(response => {
            console.log(response)
            cambiarEstadoModalEmail(!estadoModalEmail)
            inputNombre.value=""
            inputEmail.value=""
            inputMensaje.value=""
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        inputNombre = document.querySelector("#nombre")
        inputEmail = document.querySelector("#email")
        inputMensaje = document.querySelector("#mensaje")
    }, [])
    

    return (
        <>
            <Modal
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
            >
                <p>Se envió el correo correctamente!</p>
            </Modal>
        <div className='mainEmail'>
            <Barra/>
            <Header/>
            <div className='fondo_contacto'>
                <div className='container_contacto'>
                    <div className='box_contacto'>
                        <div className='box_contacto2'>
                            <div className="contacto_logo">
                                <Imagen url={Logo}/>
                            </div>
                            <div className="contacto_info">
                            <h2>EBANISTERÍA LEÓN</h2>
                                <p><i className="fa fa-solid fa-map"></i> Calarcá calle 20 #5 / Colombia</p>
                                <p><i className="fa fa-solid fa-phone"></i> : 7384576 / <i className="fa fa-solid fa-mobile"></i> : 3156973456</p>
                            </div>
                            <div className="contacto_logos">
                                <h2>Contáctanos por nuestras redes!</h2>
                                <div className="redes_contacto">
                                    
                                    <NavLink to=""><i id="icono_contacto-fb" className="fab fa-facebook"></i></NavLink>
                                    <NavLink to=""><i id="icono_contacto-wp" className="fab fa-whatsapp"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box_form'>
                        <form className='formEmail' onSubmit={sendEmail} >
                            <div className='txt_field'>
                                <input type='text' name="user_name" id='nombre' autoComplete='off'required autoFocus/>
                                <label className='labelForm' for='nombre'>Nombre</label>
                                <span></span>
                            </div>
                            <div className='txt_field'>
                                <input type='email' name="user_email" id='email' required/>
                                <label className='labelForm'for='email'>Email</label>
                                <span></span>
                            </div>
                            <div className='txt_field'>
                                <textarea name="user_message" id="mensaje" cols="30" rows="10" placeholder='Mensaje' required></textarea>
                            </div>
                            <div className='divbtn'>
                                <button className='btnSubmit'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
