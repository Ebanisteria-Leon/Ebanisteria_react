import { useState, useEffect } from "react";

export const useCloseModal = () => {
    const [cerrarModal, setCerrarModal] = useState(true)

    const cerrar_producto = () => {
        setCerrarModal(!cerrarModal)
    }

    useEffect(() => {
        const overlay = document.getElementById('overlay')
        const floatWindow = document.getElementById('floatWindow')

        if (!cerrarModal) {
            overlay.classList.remove('active')
            floatWindow.classList.remove('active')
        }
    }, [cerrarModal])

    return{
        cerrar_producto
    }
}