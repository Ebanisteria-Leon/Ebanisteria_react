import React, {useState, useEffect} from 'react'
import '../../../assets/css/PerfilUsuario.css'
import { NavLink } from 'react-router-dom'
import { EditarPerfilUsuario } from '../../UI/EditarPerfilUsuario/EditarPerfilUsuario'
import axios from 'axios'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'
import { MisPedidos } from '../../UI/MisPedidos/MisPedidos'



export const PerfilUsuario = () => {

    let idUser = localStorage.getItem('idUser')
    const [mostrarEdit, setMostrarEdit] = useState(true)
    const [mostrarEdit2, setMostrarEdit2] = useState(false)
    console.log(mostrarEdit2);
    let setearImg
    let colorModal="#fff"
    const [usuario, setUsuario] = useState({})
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
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
            setUsuario({
                ...usuario,
                image: imagen
            })

        })
        .catch(err => console.log(err))
        putImage()  
    }

    const putImage = async () =>{
        cambiarEstadoModalEmail(!estadoModalEmail)
        if (confirmar === true) {
            let url = "https://leon-ebanisteria.herokuapp.com/users/usuario/"
            let endpoint = url+usuario.id+'/'
            await axios.put(endpoint, usuario)
            .then((res) => {
                console.log(res);
            })
        }
    }

    const manejoBotonMiPerfil=()=>{
        setMostrarEdit2(false)
        setMostrarEdit(true)
        console.log(mostrarEdit);
    }

    const manejoBotonMisPedidos=()=>{
        setMostrarEdit2(true)
        setMostrarEdit(false)
        console.log(mostrarEdit, "primer edit");
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])
    

    return (
        <section className='perfil-usuario'>
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
                            <input type="file" id="cambiarFoto" autoComplete="off" onChange={(e)=>{
                                setearImagen(e)
                            }}/>
                            <p>Cambiar foto de perfil</p>
                        </div>
                    </div>
                </div>
                <div className="menu-perfil">
                    <ul>
                        <li><button onClick={()=>{
                            manejoBotonMiPerfil()
                        }}>Mi perfil</button></li>
                        <li><button onClick={()=>{
                            manejoBotonMisPedidos()
                            }}>Mis pedidos</button></li>
                    </ul>
                </div>
                
                    {mostrarEdit === true 
                    ?   <div className="boxEditarPerfil">
                        <h2>EDITAR MI PERFIL</h2>
                            <EditarPerfilUsuario/>
                        </div>
                    : console.log("cambia")
                    }
                    {mostrarEdit2 === true
                    ?   <div className="boxMisPedidos">
                            <h2>MIS PEDIDOS</h2>
                            <MisPedidos/>
                        </div>
                    :""
                    }
                
            </div>
        </section>
    )
}
