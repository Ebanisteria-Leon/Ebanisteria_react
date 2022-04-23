import '../../../assets/css/Main.css'
import React from 'react'
import { Promo } from '../../UI/Promo'
import { Galeria } from '../../UI/Galeria/Galeria'

import Logo from '../../../assets/images/logo/Ebanisteria.png'

export const Main = () => {
    return (
        <>
            <div className='banner'>
                <div className='titulo'>
                    <img src={Logo} alt='' />
                </div>
            </div>
            <main data-scroll-section>
                {/* <!-- Seccion de las promociones --> */}
                <Promo />

                {/* <!-- Seccion de galería --> */}
                <Galeria />
            </main>
        </>
    )
}
