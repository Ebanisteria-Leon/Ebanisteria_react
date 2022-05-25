import React from 'react'

export const ModalProducto = ({children, estado, cambiarEstado, color}) => {
    let contenido 

    const cerrarModal = () =>{
        contenido = document.querySelector('.contenido_modal')
        contenido.style.top='-100px'
        cambiarEstado(true)
        setTimeout(()=>{
            cambiarEstado(false)
        },300)
    }

    if(estado === true){
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
                <button className='cancelar' onClick={cerrarModal}><i class="fa-solid fa-xmark"></i></button>
                    {children}
                </div>
            </div>
        }  
        </>
    )
}
