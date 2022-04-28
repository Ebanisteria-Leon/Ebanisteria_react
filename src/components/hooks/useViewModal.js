import { useState, useEffect } from 'react'

export const useViewModal = () => {
    const [verModal, setVerModal] = useState(true)

    const mostrar_producto = () => {
        setVerModal(!verModal)
        console.log(verModal);
    }

    useEffect(() => {
        console.log("cambia");
        const overlay = document.getElementById('overlay')
        const floatWindow = document.getElementById('floatWindow')

        if (verModal===false) {
            console.log("cambia2");
            overlay.classList.add('active')
            floatWindow.classList.add('active')
        }else{
            overlay.classList.remove('active')
            floatWindow.classList.remove('active')
        }
    }, [verModal])

    return{
        mostrar_producto
    }
}