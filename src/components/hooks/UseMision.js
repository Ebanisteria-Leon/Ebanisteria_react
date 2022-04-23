import {useEffect} from 'react'

export const UseMision = () => {
    useEffect(() => {
        ejecutarEffect()
    }, [])

    const ejecutarEffect = () => {
        console.log("entro")
        let elemento1 = document.getElementById('img_micro')
        let elemento2 = document.getElementById('img_numeral')
        let elemento3 = document.getElementById('img_micro2')
        let elemento4 = document.getElementById('img_numeral2')

        window.onscroll = function () {
            let posicion =
                window.pageYOffset || document.documentElement.scrollTop

            elemento1.style.bottom = posicion * 0.1 + 'px'
            elemento2.style.top = posicion * 0.1 + 'px'
            elemento3.style.bottom = posicion * 0.1 + 'px'
            elemento4.style.top = posicion * 0.1 + 'px'
        }
    }

    return ejecutarEffect
}

