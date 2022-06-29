import React, { useEffect } from 'react'
import '../../../assets/css/Footer.css'

import aos from 'aos'
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Whatsapp from '../../../assets/images/Redes/whatsapp.png'
import Facebook from '../../../assets/images/Redes/facebook.png'
import Instagram from '../../../assets/images/Redes/instagram.png'
import Github from '../../../assets/images/Redes/github.png' 



export const Footer = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
        })
    }, [])

    return (
        <>
        <div className="accesosRedes">
                <div className="red1 red">
                    <a href="https://wa.me/+573168839000" target={"_blank"}><img src={Whatsapp} alt="" /></a>
                </div>
                <div className="red2 red">
                    <a href="https://web.facebook.com/profile.php?id=100082539743285" target={"_blank"}><img src={Facebook} alt="" /></a>
                </div>
                <div className="red3 red">
                    <a href="https://www.instagram.com/ebanisterialeon/" target={"_blank"}><img src={Instagram} alt="" /></a>
                </div>
                <div className="red4 red">
                    <a href="https://github.com/Ebanisteria-Leon/Ebanisteria_react" target={"_blank"}><img src={Github} alt="" /></a>
                </div>
                
            </div>
        <footer>
            
            <div className='informacion_superior-footer'>
                <ul>
                    <li>
                        <h3>Más Información</h3>
                    </li>
                    <li>
                        <a href='#'>Términos y condiciones</a>
                    </li>
                    <li>
                        <a href='#'>Política de privacidad</a>
                    </li>
                </ul>
                <ul>
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
                            <i className="fa-brands fa-instagram"></i> Instagram
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
        </>
    )
}
