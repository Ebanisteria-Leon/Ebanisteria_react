import React, {useState, useEffect} from 'react'
import '../../../assets/css/PerfilUsuario.css'

export const PerfilUsuario = () => {

    let nombre = localStorage.getItem('nombre')
    let apellido = localStorage.getItem('apellido')
    let nombreUsuario = localStorage.getItem('username')
    let imagenUsuario = localStorage.getItem('imagenUsuario')

    const perfilStyle = {
        backgroundImage: 'url(' + imagenUsuario + ')',
    };

    

    useEffect(() => {
        
    }, [])
    

    return (
        <section className='perfil-usuario'>
            <div className="contenedor-perfil">
                <div className="portada-perfil" style={perfilStyle}>
                    <div className="avatar-perfil">
                        <img src={imagenUsuario} alt="" />
                    </div>
                    <div className="datos-perfil">
                        <h4 className='titulo-usuario'>{nombreUsuario}</h4>
                        <p className="bio-usuario">{nombre} {apellido}</p>
                        <ul className="lista-perfil">
                            <li>73 seguidores</li>
                        </ul>
                    </div>
                    <div className="opciones-perfil">
                        <div className="custom-input-file2 perfil">
                            <input type="file" id="cambiarFoto" autoComplete="off" />
                            <p>Cambiar foto de perfil</p>
                        </div>
                    </div>
                </div>
                <div className="menu-perfil">
                    <ul>
                        <li><a href="">Mis pedidos</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
