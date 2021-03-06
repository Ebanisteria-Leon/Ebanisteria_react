import { useState, useEffect } from 'react'

export const useViewModal = () => {
    const [verModal1, setVerModal] = useState(false)
    const [verModal2, setVerModal2] = useState(false)


    const mostrar_producto = () => {
        setVerModal(!verModal1)
    }

    const ocultar_producto = () => {
        setVerModal2(!verModal2)
    }

    useEffect(() => {
        const overlay = document.getElementById('overlay')
        const floatWindow = document.getElementById('floatWindow')

        if (verModal1 === true) {
            setVerModal(!verModal1)
            overlay.classList.add('active')
            floatWindow.classList.add('active')
        }else if(verModal2 === true){
            setVerModal2(!verModal2)
            overlay.classList.remove('active')
            floatWindow.classList.remove('active')
        }
    }, [verModal1, verModal2])

    return{
        mostrar_producto,
        ocultar_producto
    }
}