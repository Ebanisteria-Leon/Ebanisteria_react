import React, { useEffect } from 'react'
import '../../../assets/css/Footer.css'

import aos from 'aos'
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const Footer = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
        })
    }, [])

    return (
        <footer data-aos='fade-up'>
            <div className='informacion_superior-footer'>
                <ul
                    data-aos='fade-up'
                    data-aos-anchor-placement='bottom-bottom'>
                    <li>
                        <h3>Mas Información</h3>
                    </li>
                    <li>
                        <a href='#'>Términos y condiciones</a>
                    </li>
                    <li>
                        <a href='#'>Política de privacidad</a>
                    </li>
                </ul>
                <ul
                    data-aos='fade-up'
                    data-aos-anchor-placement='bottom-bottom'>
                    <li>
                        <h3>Contáctanos</h3>
                    </li>
                    <li>
                        <p>Calle 15 #10-22</p>
                    </li>
                    <li>
                        <p>Circasia - Quindio</p>
                    </li>
                </ul>
            </div>
            <div className='contenedor_inferior-footer'>
                <ul>
                    <li>
                        <h3>Síguenos</h3>
                    </li>
                    <div className='contenedor_redes-footer'>
                        <li>
                            <a href='#'>
                            <i className="fa-brands fa-instagram"></i>Instagram
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className='fab fa-facebook'></i> Facebook
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className='fab fa-whatsapp'></i> Whatsapp
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </footer>
    )
}
