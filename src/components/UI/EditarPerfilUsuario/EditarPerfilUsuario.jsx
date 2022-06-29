import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'



export const EditarPerfilUsuario = () => {

    let idUser = localStorage.getItem("idUser")
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [usuario, setUsuario] = useState({})
    let confirmar = Boolean  
    let colorModal ="#fff"

    const fetchApi= async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/users/usuario/" + idUser)
        const responseJSON =await response.json()
        setUsuario(responseJSON)
    }

    const manejadorSubmit = (e) =>{
        e.preventDefault()
        setUsuario(usuario)
        updateUser()
    }

    const cambiarEstado = () =>{
        confirmar= true
        updateUser()
    }

    const handleChange = (e) =>{
        setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
        })
    }

    const updateUser = async () =>{
        cambiarEstadoModalEmail(!estadoModalEmail) 
        let url="https://leon-ebanisteria.herokuapp.com/users/usuario/"
        if(confirmar === true){
            let endpoint = url+usuario.id+'/'
            await axios.put(endpoint, usuario)
            .then((res) => {
                window.location.reload()
        })
    }
    }

    useEffect(() => {
      fetchApi()
    }, [])
    

  return (
    <>
        <ModalProducto
        estado={estadoModalEmail}
        cambiarEstado={cambiarEstadoModalEmail}
        color={colorModal}>
        <p>Confirmar cambios?</p>
        <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
        </ModalProducto>
        <div className="editarPerfi">
            <form className="formAgregar22 editarPerfil" onSubmit={manejadorSubmit}>
                <div className="boxInput">
                <div className="txt_field">
                    <input type="text" id="username" name="username" value={usuario.username} autoComplete="off" required autoFocus onChange={handleChange}/>
                    <label className="labelForm" for="username"> Nombre de usuario </label>
                    <span></span>
                </div>
                <div className="txt_field">
                    <input type="text" id="nombre" name="name" value={usuario.name} autoComplete="off" required onChange={handleChange}/>
                    <label className="labelForm" for="nombre">Nombres</label>
                    <span></span>
                </div>
                <div className="txt_field">
                    <input type="text" id="apellido" name="last_name" value={usuario.last_name} autoComplete="off" required onChange={handleChange}/>
                    <label className="labelForm" for="apellido"> Apellidos </label>
                    <span></span>
                </div>
                <div className="txt_field">
                    <input type="email" id="email" name="email" value={usuario.email} autoComplete="off" required onChange={handleChange}/>
                    <label className="labelForm" for="email"> Correo electronico</label>
                    <span></span>
                </div>
                </div>
                <div className="divbtn_agregar agregar">
                    <button className="btnSubmit" >Modificar Perfil</button>
                </div>
            </form>
        </div>
    </>
  )
}
