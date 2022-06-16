import axios from 'axios'
import React, {useState, useEffect} from 'react'
import '../../../assets/css/TableRol.css'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'
import { SideBar } from '../../UI/SideBar/SideBar'

export const TableRol = () => {

    const rol = localStorage.getItem('rolUser')
    const username = localStorage.getItem('username')
    const [usuario , setUsuario ] = useState([])
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [idPersona, setIdPersona] = useState()
    const [rolCambiado, setRolCambiado] = useState([])
    let confirmar = Boolean 

    const obtenerUsuario = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/users/usuario/")
        const responseJSON =await response.json()
        setUsuario(responseJSON)
        console.log(responseJSON);
    }

    const cambiarEstado = () =>{
        confirmar= true
        console.log(idPersona);
        updateData2(idPersona)
    }

    const cambiarEstadoPedido= (data) =>{
        console.log(data);
        let estadoRol
    
        if(data.rolUser === "Cliente"){
            estadoRol="Admin"
        }
        if(data.rolUser === "Admin"){
            estadoRol="Cliente"
        }
    
        data.rolUser=estadoRol
        setRolCambiado(data)
        updateData2(data.id)
    }

    const updateData2 = async (id) =>{
        setIdPersona(id)
        cambiarEstadoModalEmail(!estadoModalEmail) 
        if(confirmar === true){
            let endpoint = "https://leon-ebanisteria.herokuapp.com/users/usuario/"+id+'/'
            await axios.put(endpoint, rolCambiado)
            .then((res) => {
                console.log(res);
            })
        }
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])

    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>Este usuario se volverá <b>ADMIN</b>,continuar?</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
            <div className='mainTable-assingRol'>
                <h3 className='title-table-assingRol'>ASIGNAR ROL</h3>
                <SideBar />
                <section className='section__table-assingRol'>
                    <table className='table-assingRol'>
                        <thead>
                            <tr>
                                <th scope='col'>
                                    Listado de usuarios de producción
                                </th>
                                <th scope='col'>Rol</th>
                                <th scope='col'>Acciones</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla, coff la info de los productos */}
                        {!usuario ? "No existen usuarios "
                        :usuario.map((index,_)=>{
                            return(
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{index.name}</td>
                                            <td>{index.rolUser}</td>
                                            <td>
                                                <label className='lbl'>
                                                    <button className='botonCambiarRol' title="Producto destacado / No destacado" onClick={()=>cambiarEstadoPedido(index)}>
                                                    CambiarRol
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
                        })
                        }
                    </table>
                </section>
            </div>
        </>
    )
}
