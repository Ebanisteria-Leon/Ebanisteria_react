import React, {useState, useEffect} from 'react'
import '../../../assets/css/PerfilUsuario.css'
import { NavLink } from 'react-router-dom'
import { EditarPerfilUsuario } from '../../UI/EditarPerfilUsuario/EditarPerfilUsuario'
import axios from 'axios'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'
import { MisPedidos } from '../../UI/MisPedidos/MisPedidos'
import { CambiarConstrasena } from '../../UI/CambiarContrasena/CambiarConstrasena'
import { Logout } from '../../helpers/logout/Logout'
import { Modal } from '../../UI/Modal/Modal';


export const PerfilUsuario = () => {

    let idUser = localStorage.getItem('idUser')
    const [mostrarEdit, setMostrarEdit] = useState(true)
    const [mostrarEdit2, setMostrarEdit2] = useState(false)
    const [mostrarEdit3, setMostrarEdit3] = useState(false)
    let setearImg
    let colorModal="#fff"
    const [texto, setTexto] = useState("")
    const [usuario, setUsuario] = useState({})
    const [ejecutar, setEjecutar] = useState(false)
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [estadoModalEmail2, cambiarEstadoModalEmail2] = useState(false)
    let confirmar = Boolean

    const perfilStyle = {
        backgroundImage: 'url(' + usuario.image + ')',
    };

    const obtenerUsuario = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/users/usuario/" + idUser)
        const responseJSON =await response.json()
        setUsuario(responseJSON)
    }

    const setearImagen = (e) =>{
        setearImg=e.target.files[0]
        uploadImage()
    }

    const cambiarEstado = () =>{
        const aceptar = document.querySelector('.aceptar')
        if(usuario.image){
            aceptar.disabled=true
        }else{
            aceptar.disabled=false
        }
        confirmar= true
        putImage()
    }

    const uploadImage = () => {
        
        const data = new FormData()
        data.append("file", setearImg)
        data.append("upload_preset", "ebanisteria")
        data.append("cloud_name","Ebanisteria")
        fetch("  https://api.cloudinary.com/v1_1/Ebanisteria/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
            let imagen= data.url
            console.log(imagen);
            setUsuario({
                ...usuario,
                image: imagen
            })
            if(usuario){
                setEjecutar(true)
            }
        })
        .catch(err => {
            setTexto("No se ha podido cambiar la imagen")
            console.log(err)
            cambiarEstadoModalEmail2(!estadoModalEmail2)
        })
        
    }

    const putImage = async () =>{
        cambiarEstadoModalEmail(!estadoModalEmail)
        if (confirmar === true) {
            let url = "https://leon-ebanisteria.herokuapp.com/users/usuario/"
            let endpoint = url+usuario.id+'/'
            await axios.put(endpoint, usuario)
            .then((res) => {
                setEjecutar(false)
                window.location.reload()
            })
        }
    }

    const manejoBotonMiPerfil=()=>{
        const boton1 = document.querySelector('.perfil1')
        const boton2 = document.querySelector('.perfil2')
        const boton3 = document.querySelector('.perfil3')

        boton1.style.background="rgb(255, 196, 0)"
        boton2.style.background="transparent"
        boton3.style.background="transparent"
        setMostrarEdit3(false)
        setMostrarEdit2(false)
        setMostrarEdit(true)
    }

    const manejoBotonMisPedidos=()=>{
        const boton1 = document.querySelector('.perfil1')
        const boton2 = document.querySelector('.perfil2')
        const boton3 = document.querySelector('.perfil3')

        boton1.style.background="transparent"
        boton2.style.background="rgb(255, 196, 0)"
        boton3.style.background="transparent"
        setMostrarEdit3(false)
        setMostrarEdit2(true)
        setMostrarEdit(false)
    }

    const manejoBotonCambiarContrasena = () =>{
        const boton1 = document.querySelector('.perfil1')
        const boton2 = document.querySelector('.perfil2')
        const boton3 = document.querySelector('.perfil3')

        boton1.style.background="transparent"
        boton2.style.background="transparent"
        boton3.style.background="rgb(255, 196, 0)"
        setMostrarEdit3(true)
        setMostrarEdit2(false)
        setMostrarEdit(false)
    }

    useEffect(() => {
        const boton1 = document.querySelector('.perfil1')
        boton1.style.background="rgb(255, 196, 0)"
        obtenerUsuario()
    }, [])

    useEffect(() => {
        if(ejecutar === true){
            putImage()
        }
    }, [ejecutar])
    
    

    return (
        <section className='perfil-usuario'>
                <Modal
                    estado={estadoModalEmail2}
                    cambiarEstado={cambiarEstadoModalEmail2}
                    color={"#FF5733"}
                >
                    <p>{texto}</p>
                </Modal>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>Confirmar cambios?</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
            <div className="flechaInicio">
                <NavLink to="/">
                    <i className="fa-solid fa-arrow-left"></i>
                </NavLink>
            </div>
            <div className="contenedor-perfil">
                <div className="portada-perfil">
                    <div className="avatar-perfil">
                        <img src={usuario.image} alt="" />
                    </div>
                    <div className="datos-perfil">
                        <h4 className='titulo-usuario'>{usuario.username}</h4>
                        <p className="bio-usuario">{usuario.name} {usuario.last_name}</p>
                        <ul className="lista-perfil">
                            <li>{usuario.rolUser}</li>
                        </ul>
                    </div>
                    <div className="opciones-perfil">
                        <div className="custom-input-file2 perfil">
                            
                                <NavLink to='/' onClick={Logout}>
                                <button>Cerrar sesión</button>
                                </NavLink>
                            
                        </div>
                        <div className="custom-input-file2 perfil">
                            <input type="file" id="cambiarFoto" autoComplete="off" onChange={(e)=>{
                                setearImagen(e)
                            }}/>
                            <p>Cambiar foto de perfil</p>
                        </div>
                    </div>
                </div>
                <div className="menu-perfil">
                    <ul>
                        <li><button className="perfil1" onClick={()=>{
                            manejoBotonMiPerfil()
                        }}>Mi perfil</button></li>
                        <li><button className="perfil2" onClick={()=>{
                            manejoBotonMisPedidos()
                            }}>Mis pedidos</button>
                        </li>
                        <li><button className="perfil3" onClick={()=>{
                            manejoBotonCambiarContrasena()
                            }}>Cambiar Contraseña</button>
                        </li>
                    </ul>
                </div>
                
                    {mostrarEdit === true 
                    ?   <div className="boxEditarPerfil">
                        <h2>EDITAR MI PERFIL</h2>
                            <EditarPerfilUsuario/>
                        </div>
                    : ""
                    }
                    {mostrarEdit2 === true
                    ?   <div className="boxMisPedidos">
                            <h2>MIS PEDIDOS</h2>
                            <MisPedidos/>
                        </div>
                    :""
                    }
                    {mostrarEdit3 === true
                    ?   <div className="boxCambiarContrasena">
                            <h2>Cambiar contraseña</h2>
                            <CambiarConstrasena/>
                        </div>
                    :""
                    }
                
            </div>
        </section>
    )
}
