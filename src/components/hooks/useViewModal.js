import { useState, useEffect } from 'react'

export const useViewModal = () => {
    const [verModal, setVerModal] = useState(true)

    const mostrar_producto = () => {
        setVerModal(!verModal)
    }

    useEffect(() => {
        const overlay = document.getElementById('overlay')
        const floatWindow = document.getElementById('floatWindow')

        if (!verModal) {
            overlay.classList.add('active')
            floatWindow.classList.add('active')
        }
    }, [verModal])

    return{
        mostrar_producto
    }
}