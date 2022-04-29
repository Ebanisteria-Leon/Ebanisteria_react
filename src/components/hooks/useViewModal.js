import { useState, useEffect } from 'react'

export const useViewModal = () => {
    const [verModal, setVerModal] = useState(true)

    const mostrar_producto = () => {
        setVerModal(!verModal)
        console.log("muestra", verModal);
    }

    useEffect(() => {
        const overlay = document.getElementById('overlay')
        const floatWindow = document.getElementById('floatWindow')

        if (verModal===false) {
            console.log("Muestra if");
            overlay.classList.add('active')
            floatWindow.classList.add('active')
        }else{
            console.log("Oculta if");
            overlay.classList.remove('active')
            floatWindow.classList.remove('active')
        }
    }, [verModal])

    return{
        mostrar_producto
    }
}