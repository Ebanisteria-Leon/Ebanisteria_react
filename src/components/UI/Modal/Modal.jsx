import React, {useState, useEffect} from 'react'
import '../../../assets/css/Modal.css'

export const Modal = ({children, estado, cambiarEstado, color}) => {
    
    let contenido 
    console.log(color);

    const mostrarModal = ()=>{
        const timer = setTimeout(()=>{
            contenido.style.top='-100px'
            cambiarEstado(false) 
        }, 4000 )

        setTimeout(()=>{
            contenido.style.top='-100px'
        }, 3000 )
        return () => clearTimeout(timer)
    }

    if(estado===true){
        mostrarModal()
        setTimeout(()=>{
            contenido = document.querySelector('.contenido_modal')
            contenido.style.top='20px'
            contenido.style.background=color
            contenido.style.color='#fff'
        }, 100 )
    }

    return (
        <>
        {estado &&
            <div className="overlay_modal">
                <div className="contenido_modal">
                    {children}
                </div>
            </div>
        }  
        </>
    )
}
