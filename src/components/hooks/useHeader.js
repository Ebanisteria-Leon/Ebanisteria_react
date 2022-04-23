import { useState, useEffect } from 'react'

export const useHeader = () => {
    
    const [estado, setEstado] = useState(true)
    const [estado2, setEstado2] = useState(false)

    const cambiar_barra=() =>{
        setEstado(!estado)
        setEstado2(!estado2)
    }

    useEffect(() => {
        const menuBtn = document.querySelector('.menu-btn')

        if(!estado){
            menuBtn.classList.add('open')
        }else{
            menuBtn.classList.remove('open')
        }

        const menu = document.querySelector('.header')

        if(!estado2){
            menu.classList.remove('open_header')
        }else{
            menu.classList.add('open_header')
        }

    }, [estado, estado2])

    return {
        cambiar_barra
    }
}