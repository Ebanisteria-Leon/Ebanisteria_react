import { useState, useEffect } from 'react'

export const useSidebar = () => {
    const [estado, setEstado] = useState(true)

    const cambiar_sidebar = () =>{
        setEstado(!estado)
    }

    useEffect(() => {
        const btnEstado = document.querySelector('.sidebar')

        if(!estado){
            btnEstado.classList.add('active')
        }else{
            btnEstado.classList.remove('active')
        }
    }, [estado])

    return{
        cambiar_sidebar
    }
}