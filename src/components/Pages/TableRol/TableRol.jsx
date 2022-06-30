import axios from 'axios'
import React, {useState, useEffect} from 'react'
import '../../../assets/css/TableRol.css'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'
import { SideBar } from '../../UI/SideBar/SideBar'

export const TableRol = () => {

    const rol = localStorage.getItem('rolUser')
    const username = localStorage.getItem('username')
    const [usuario , setUsuario ] = useState([])
    const [usuarioSolo, setUsuarioSolo] = useState([])
    const [idUsuario, setIdUsuario] = useState(0)
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [interruptor, setInterruptor] = useState(false)
    let confirmar = Boolean 

    const obtenerUsuario = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/users/usuario/")
        const responseJSON =await response.json()
        setUsuario(responseJSON)
        console.log(responseJSON);
    }

    const obtenerUsuarioSolo = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/users/usuario/"+idUsuario)
        const responseJSON =await response.json()
        setUsuarioSolo(responseJSON)
        console.log(responseJSON);
    }

    const cambiarEstado = () =>{
        console.log(usuarioSolo);
        confirmar= true
        updateData2(usuarioSolo)
    }

    const cambiarEstadoPedido= (data) =>{
        setIdUsuario(data.id)
        let estadoRol
    
        if(usuarioSolo.rolUser === "Cliente"){
            estadoRol="Admin"
        }
        if(usuarioSolo.rolUser === "Admin"){
            estadoRol="Cliente"
        }
    
        // usuarioSolo.rolUser=estadoRol
        setUsuarioSolo({
            ...usuarioSolo,
            rolUser: estadoRol
        })
        
        // setRolCambiado(usuarioSolo)
        // updateData2(data.id)
        
    }

    


    const updateData2 = async (usuarioListo) =>{
        cambiarEstadoModalEmail(!estadoModalEmail) 
        if(confirmar === true){
            let endpoint = "https://leon-ebanisteria.herokuapp.com/users/usuario/"+usuarioListo.id+'/'
            console.log(endpoint);
            await axios.put(endpoint, usuarioListo)
            .then((res) => {
                console.log(res);
                window.location.reload()
                const rol = usuarioListo.rolUser
                localStorage.setItem('rolUser', rol)
            })
        }
    }


    useEffect(() => {
        obtenerUsuario()
    }, [])

    useEffect(() => {
        if(idUsuario!==0){
            obtenerUsuarioSolo()
        }
    }, [idUsuario])

    useEffect(() => {
        console.log(usuarioSolo.length);
        if(usuarioSolo.length===undefined){
            updateData2(usuarioSolo)
        }else{
            console.log("holaaaaaaaaaa");
        }
    }, [usuarioSolo])
    

    
    

    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}
            >
                {usuarioSolo.rolUser === 'Admin' ? (
                    <p>
                        Este usuario se volverá <b>ADMIN</b>, continuar?
                    </p>
                ) : (
                    <p>
                        Este usuario se volverá <b>Cliente</b>, continuar?
                    </p>
                )}
                <button className='aceptar' onClick={cambiarEstado}>
                    <i className='fa-solid fa-check'> Aceptar</i>
                </button>
            </ModalProducto>
            <div className='mainTable-assingRol'>
                <h3 className='title-table-assingRol'>ASIGNAR ROL</h3>
                <SideBar />
                <section className='section__table-assingRol'>
                    <table className='table-assingRol'>
                        <thead>
                            <tr>
                                <th scope='col'>Código trabajador</th>
                                <th scope='col'>
                                    Listado de trabajadores de producción
                                </th>
                                <th scope='col'>Rol</th>
                                <th scope='col'>Acciones</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla, coff la info de los productos */}
                        {!usuario
                            ? 'No existen usuarios '
                            : usuario.map((index, _) => {
                                  return (
                                      <>
                                          <tbody>
                                              <tr>
                                                  <td>{index.id}</td>
                                                  <td>{index.name}</td>
                                                  <td>{index.rolUser}</td>
                                                  <td>
                                                      <label className='lbl'>
                                                          <button
                                                              className='botonCambiarRol'
                                                              title='Producto destacado / No destacado'
                                                              onClick={() =>
                                                                  cambiarEstadoPedido(
                                                                      index
                                                                  )
                                                              }
                                                          >
                                                              Cambiar Rol
                                                          </button>
                                                          {/* <input
                                                        type='checkbox'
                                                        className='switch'
                                                    />
                                                    <span>
                                                        <i className='fas fa-check on'></i>
                                                        <i className='fas fa-times off'></i>
                                                    </span> */}
                                                      </label>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </>
                                  )
                              })}
                    </table>
                </section>
            </div>
        </>
    )
}
