import React, {useState, useEffect} from 'react'
import '../../../assets/css/PerfilUsuario.css'
import { NavLink } from 'react-router-dom'
import { EditarPerfilUsuario } from '../../UI/EditarPerfilUsuario/EditarPerfilUsuario'
import axios from 'axios'


export const PerfilUsuario = () => {

    let idUser = localStorage.getItem('idUser')
    let mostrarEdit = true
    let mostrarEdit2 = false
    let setearImg
    const [usuario, setUsuario] = useState({})

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
            console.log(data.url);
            setUsuario({
                ...usuario,
                image: data.url
            })
            console.log(usuario);
            setTimeout(() => {
                putImage()
            }, 3000);
        })
        .catch(err => console.log(err))
    }

    const putImage = async () =>{
        let url = "https://leon-ebanisteria.herokuapp.com/users/usuario/"
            let endpoint = url+usuario.id+'/'
            await axios.put(endpoint, usuario)
            .then((res) => {
                console.log(res);
            })
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])
    

    return (
        <section className='perfil-usuario'>
            <div className="flechaInicio">
                <NavLink to="/">
                    <i className="fa-solid fa-arrow-left"></i>
                </NavLink>
            </div>
            <div className="contenedor-perfil">
                <div className="portada-perfil" style={perfilStyle}>
                    <div className="avatar-perfil">
                        <img src={usuario.image} alt="" />
                    </div>
                    <div className="datos-perfil">
                        <h4 className='titulo-usuario'>{usuario.username}</h4>
                        <p className="bio-usuario">{usuario.name} {usuario.last_name}</p>
                        <ul className="lista-perfil">
                            <li>73 seguidores</li>
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
                            mostrarEdit2=false
                            mostrarEdit=true
                        }}>Mi perfil</button></li>
                        <li><button onClick={()=>{
                            mostrarEdit=false
                            mostrarEdit2=true
                            }}>Mis pedidos</button></li>
                    </ul>
                </div>
                
                    {mostrarEdit === true 
                    ?   <div className="boxEditarPerfil">
                        <h2>EDITAR MI PERFIL</h2>
                            <EditarPerfilUsuario/>
                        </div>
                    : <p>hola2</p>
                    }
                    {mostrarEdit2 === true
                    ? <p>hola</p>
                    :""
                    }
                
            </div>
        </section>
    )
}
