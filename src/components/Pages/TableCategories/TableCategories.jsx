import React, {useEffect, useState} from 'react'
import '../../../assets/css/TableProduct.css'
import '../../../assets/css/EditarCategoria.css'
import Mueble_Azul from '../../../assets/images/muebles-promo/mueble-azul.png'

import { Imagen } from '../../UI/Imagen/Imagen'
import { SideBar } from '../../UI/SideBar/SideBar'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'
import accounting from 'accounting'
import { helpHttp } from '../../helpers/helpHttp'
import ClipLoader from "react-spinners/ClipLoader";
import { Mensaje } from '../../UI/Mensaje/Mensaje'
import axios from 'axios'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import Swal from 'sweetalert2'



export const TableCategories = () => {

    let api = helpHttp()
    let url = "https://leon-ebanisteria.herokuapp.com/api/categoria/"
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [categorias, setCategorias] = useState([])
    let confirmar = Boolean
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState(null)
    let datoP ={}
    const [{ buscador }, dispatch] = useStateValue()
      

    const [form2, setForm2] = useState({})

    const obtenerCategorias = () =>{
        api.get(url).then(res=>{
            if(!res.err){
                setMsgError(null)
                setCategorias(res)
            }else{
                setMsgError(res)
                setCategorias([])
            }
        })
    }

    const cambiarEstado = () =>{
        confirmar= true
        updateData2()
    }

    const cambiarEstado2 = () =>{
        confirmar= false
        updateData2()
    }
    
    const editarProducto = () =>{
        const overlay = document.querySelector('.overlayEditar')
        const container = document.querySelector('.container_agregar22')

        overlay.style.visibility="visible"
        overlay.style.opacity="1"
        container.style.opacity="1"
        container.style.transform="scale(1)"
        
    }

    const cerrarEditor = () =>{
        const overlay = document.querySelector('.overlayEditar')
        const container = document.querySelector('.container_agregar22')

        overlay.style.visibility="hidden"
        overlay.style.opacity="0"
        container.style.opacity="0"
        container.style.transform="scale(0.6)"
    }

    const mostrarModal =(event) =>{
        cambiarEstadoModalEmail(!estadoModalEmail) 
        event.preventDefault()
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        updateData2()
    }

    const handleChange = (e) =>{
        setForm2({
        ...form2,
        [e.target.name]: e.target.value
        })
    }

    const updateData = (data) =>{
        setForm2(data)
        editarProducto()
    }

    const updateData2 = async () =>{
        cambiarEstadoModalEmail(!estadoModalEmail) 
        if(confirmar===true){
            let endpoint = url+form2.idCategoria+'/'
            await axios.put(endpoint, form2)
            .then((res) => {
                obtenerCategorias()
                cerrarEditor()
        })
        }
    }

    const deleteData = (data) =>{

        Swal.fire({
            title: 'Eliminar promoci??n?',
            text: "Desea eliminar esta promoci??n",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                let endpoint = url+data.idCategoria+'/'
                axios.delete(endpoint)
                .then((res) =>{
                    obtenerCategorias()
                })
            }
        })

            
    }


    useEffect(()=>{
        setLoading(true)
        obtenerCategorias()
        setLoading(false)
    },[])

    useEffect(() => {
      setCategorias(buscador)
    }, [buscador])
    

    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>Confirmar cambios?</p>
                <button className='aceptar' onClick={cambiarEstado}><i class="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
        <div className="overlayEditar">
            <div className="container_agregar22">
                <div className='close'>
                    <button className='buttonClose' onClick={cerrarEditor}>
                        <i className='fas fa-times-circle'></i>
                    </button>
                </div>
                <div className="tituEditar">
                    <h2>EDITAR CATEGOR??A</h2>
                </div>
                <form className="formCategoria" onSubmit={handleSubmit}>
                <div className="txt_field2">
                    <input type="text" id="nombre" name="nombreCategoria" value={form2.nombreCategoria} utoComplete="off" required autoFocus onChange={handleChange}/>
                    <label className="labelForm" for="nombre"> Nombre de la categor??a</label>
                    <span></span>
                </div>

                <div className="txt_field2">
                <textarea name="descripcion" id="mensaje" value={form2.descripcion} cols="30" rows="10" placeholder='Descripci??n del producto' required onChange={handleChange}></textarea>
                </div>

                <div className="divbtn_agregar22">
                <div className="divbtn_agregar">
                    <button className="btnSubmit">Modificar</button>
                </div>
                </div>
                </form>
            </div>
        </div>
            <div className='mainTable-products'>
                <h3 className='title-table-products'>CATEGOR??AS</h3>
                <SideBar url={"https://leon-ebanisteria.herokuapp.com/api/categoria/?search="} />
                <section className='section__table-products'>
                    {loading && <ClipLoader color='#dcaa47'/>}
                    {msgError && <Mensaje msg={'Error ' + msgError.status + ' : ' + msgError.statusText} bg={"#dc3545"}/>}
                    
                            <table className='table-products'>
                            {/* Cabecera de la tabla */}
                            <thead>
                                <tr>
                                    <th scope='col'>C??digo categor??a</th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Descripci??n</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            {categorias &&
                            categorias.map((index,_)=>{
                            return(
                                <tbody>
                                <tr>
                                    <td>{index.idCategoria}</td>
                                    <td>{index.nombreCategoria}</td>
                                    <td>
                                        {index.descripcion}
                                    </td>
                                    <td>
                                        <div className='buttonsTable-actions'>
                                            <button className='btnAction-table update-products' onClick={()=>updateData(index)}>
                                                <i className='fas fa-edit'></i>
                                            </button>
                                            <button className='btnAction-table delete-products' onClick={()=>deleteData(index)}>
                                                <i className='fas fa-trash'></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            )
                        })}
                        </table>
                </section>
            </div>
        </>
    )
}
