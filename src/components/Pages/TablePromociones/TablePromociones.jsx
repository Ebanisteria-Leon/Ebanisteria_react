import React, {useEffect, useState} from 'react'
import '../../../assets/css/TableProduct.css'
import '../../../assets/css/EditarProducto.css'
import '../../../assets/css/AgregarPromocion.css'
import Mueble_Azul from '../../../assets/images/muebles-promo/mueble-azul.png'

import { Imagen } from '../../UI/Imagen/Imagen'
import { SideBar } from '../../UI/SideBar/SideBar'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'
import accounting from 'accounting'
import { helpHttp } from '../../helpers/helpHttp'
import ClipLoader from "react-spinners/ClipLoader";
import { Mensaje } from '../../UI/Mensaje/Mensaje'
import axios from 'axios'
import Editar from '../../../assets/images/iconos/editarProducto.png'
import { actionTypes } from '../../hooks/reducer'
import { useStateValue } from '../../hooks/StateProvider'
import { Paginacion } from '../../UI/Paginacion/Paginacion'





export const TablePromociones = () => {

    const [{ buscador }, dispatch] = useStateValue()
    let api = helpHttp()
    let url = "https://leon-ebanisteria.herokuapp.com/api/promocion/"
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState(null)
    const [form2, setForm2] = useState({})
    const [mensajeModal, setMensajeModal] = useState("Quieres editar este producto?")
    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(6)
    const maximo = productos.length / porPagina
    let imagen_producto=""
    let confirmar = Boolean   
    


const cambiarEstado = () =>{
    confirmar= true
    updateData2()
}

const cambiarEstadoP = (data)=>{
    let estadoProducto

    if(data.estadoProducto === "D"){
        estadoProducto="ND"
    }
    if(data.estadoProducto === "ND"){
        estadoProducto="D"
    }

    setForm2({
        ...data,
        idCategoria: data.idCategoria[0],
        estadoProducto: estadoProducto
    })

    setMensajeModal("Cambiar estado del producto?")

    updateData2()
}

const editarProducto = () =>{
    const overlay = document.querySelector('.overlayEditar')
    const container = document.querySelector('.container_agregar2')

    overlay.style.visibility="visible"
    overlay.style.opacity="1"
    container.style.opacity="1"
    container.style.transform="scale(1)"
    
}

const cerrarEditor = () =>{
    const overlay = document.querySelector('.overlayEditar')
    const container = document.querySelector('.container_agregar2')

    overlay.style.visibility="hidden"
    overlay.style.opacity="0"
    container.style.opacity="0"
    container.style.transform="scale(0.6)"
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
    if(confirmar === true){
        let endpoint = url+form2.idPrmociones+'/'
        await axios.put(endpoint, form2)
        .then((res) => {
            window.location.reload()
        })
    }
}

const deleteData = async (data) =>{
    let isDelete = window.confirm(
        `Estas seguro de eliminar el registro con el id ` + data.idProducto
    )
    if(isDelete){
        let endpoint = url+data.idProducto+'/'
        await axios.delete(endpoint)
        .then((res) =>{
            window.location.reload()
        })
        
    }
}


useEffect(()=>{
    setLoading(true)
    api.get(url).then(res=>{
        if(!res.err){
            setMsgError(null)
            setProductos(res)
        }else{
            setMsgError(res)
            setProductos([])
        }
    })
    setLoading(false)
    
},[])

useEffect(() => {
    setProductos(buscador)
}, [buscador])


    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>{mensajeModal}</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
            <div className="overlayEditar">
                <div className="container_agregar2">
                    <div className='close'>
                        <button className='buttonClose' onClick={cerrarEditor}>
                            <i className='fas fa-times-circle'></i>
                        </button>
                    </div>
                    <div className="tituEditar">
                        <h2>EDITAR PROMOCIÓN</h2>
                    </div>
                    <form className="formAgregar2" onSubmit={handleSubmit}>
                    <div className='txt_field2'>
                        <input
                            type='number'
                            id='valorDescuento'
                            name='valorDescuento'
                            utoComplete='off'
                            value={form2.valorDescuento}
                            required
                            onChange={handleChange}
                        />
                        <label className='labelForm' for='valorDescuento'>
                            {' '}
                            Valor del descuento{' '}
                        </label>
                        <span></span>
                    </div>

                    <div className='txt_field2'>
                        <input
                            type='number'
                            id='productoExtra'
                            name='productoExtra'
                            utoComplete='off'
                            value={form2.productoExtra}
                            required
                            onChange={handleChange}
                        />
                        <label className='labelForm' for='productoExtra'>
                            {' '}
                            Productos extra{' '}
                        </label>
                        <span></span>
                    </div>

                    <div className="txt_field2">
                        <input type="date" id="fechaInicio" name="fechaFinalizacion" value={form2.fechaFinalizacion} required onChange={handleChange}/>
                        <label className="labelForm" for="fechaInicio"> Fecha de finalización</label>
                        <span></span>
                    </div>

                    <div className="divbtn_agregar2">
                    <div className="divbtn_agregar">
                        <button className="btnSubmit">Modificar</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            
            <div className='mainTable-products'>
                <h3 className='title-table-products'>PROMOCIONES</h3>
                <SideBar url={"https://leon-ebanisteria.herokuapp.com/api/promocion/?search="}/>
                <section className='section__table-products'>
                    {loading && <ClipLoader color='#dcaa47'/>}
                    {msgError && <Mensaje msg={'Error ' + msgError.status + ' : ' + msgError.statusText} bg={"#dc3545"}/>}
                    
                            <table className='table-products'>
                            {/* Cabecera de la tabla */}
                            <thead>
                                <tr>
                                    <th className="primerCol"></th>
                                    <th scope='col'>Imagen</th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Descuento</th>
                                    <th scope='col'>Fecha de finalización</th>
                                    <th scope='col'>Valor inicial</th>
                                    <th scope='col'>Valor con descuento</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                            {productos &&
                            productos
                            .slice(
                            (pagina - 1) * porPagina, 
                            (pagina - 1) * porPagina + porPagina)
                            .map((index,_)=>{
                            return(
                                
                                <>
                                <tr>
                                    <div className="etiquetas">
                                        <div className="disponible">
                                            {index.estadoPromocion==="ACT" 
                                            ?<p>Disponible</p>
                                            :<p>No disponible</p>
                                            }
                                        </div>
                                        {index.tiempoPromocion==="NUE"
                                            ?<div className="nuevo">

                                            </div>
                                            :""
                                        }
                                    </div>
                                    <td>
                                        <Imagen
                                            clase='img-table'
                                            url={index.idProducto.imagen}
                                            alt='Front'
                                        />
                                    </td>
                                    <td>{index.idProducto.nombre}</td>
                                    <td>{index.valorDescuento} </td>
                                    <td>{index.fechaFinalizacion}</td>
                                    
                                    <td>
                                        <span className='priceProducts-table'>
                                            {accounting.formatMoney(index.idProducto.valor, "$")}
                                        </span>
                                    </td>
                                    <td>{index.idProducto.valor}</td>
                                    
                                    <td>
                                        <div className='buttonsTable-actions'>
                                            <button className='btnAction-table update-products' title="Editar Producto" onClick={()=>updateData(index)}>
                                                <i className='fas fa-edit'></i>
                                            </button>
                                            <button className='btnAction-table delete-products' title="Eliminar Producto" onClick={()=>deleteData(index)}>
                                                <i className='fas fa-trash'></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </>
                            
                            )
                        })}
                        </tbody>
                        </table>
                </section>
                <div className="paginator">
                    <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}/>
                </div>
            </div>
        </>
    )
}
