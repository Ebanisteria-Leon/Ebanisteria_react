import React, {useEffect, useState} from 'react'
import '../../../assets/css/TableProduct.css'
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
import Swal from 'sweetalert2'


export const TablePromociones = () => {

    const [{ buscador }, dispatch] = useStateValue()
    let api = helpHttp()
    let url = "https://leon-ebanisteria.herokuapp.com/api/promocion/"
    let urlOrdenada = "https://leon-ebanisteria.herokuapp.com/api/promocion/?ordering=-idPromociones"
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState(null)
    const [form2, setForm2] = useState({})
    const [mensajeModal, setMensajeModal] = useState("Quieres editar este producto?")
    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(6)
    const [precioDescuento, setPrecioDescuento] = useState()
    const [productoSolo, setProductoSolo] = useState({})
    const maximo = productos.length / porPagina
    let imagen_producto=""
    let valorDescuento
    let precioProducto
    let idDelProducto
    let confirmar = Boolean   
    

const obtenerPromociones = () =>{
    api.get(urlOrdenada).then(res=>{
        if(!res.err){
            setMsgError(null)
            setProductos(res)
        }else{
            setMsgError(res)
            setProductos([])
        }
    })
}

const cambiarEstado = () =>{
    confirmar= true
    updateData2()
}

const cambiarEstadoP = (data)=>{
    let estadoPromocion
    data.idProducto.map((index,_)=>{
        return(
            idDelProducto=index.idProducto
        )
    })
    if(data.estadoPromocion === "ACT"){
        estadoPromocion="INA"
    }
    if(data.estadoPromocion === "INA"){
        estadoPromocion="ACT"
    }
    setForm2({
        ...data,
        idProducto: [idDelProducto],
        estadoPromocion: estadoPromocion
    })

    setMensajeModal("Cambiar estado de la promoción?")

    updateData2()
}

const editarProducto = () =>{
    const overlay = document.querySelector('.overlayPromocion')
    const container = document.querySelector('.containerPromocion')

    overlay.style.visibility="visible"
    overlay.style.opacity="1"
    container.style.opacity="1"
    container.style.transform="scale(1)"
    
}

const cerrarEditor = () =>{
    const overlay = document.querySelector('.overlayPromocion')
    const container = document.querySelector('.containerPromocion')

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
    [e.target.name]: e.target.value,

    })
}


const updateData = (data) =>{
    editarProducto()
    data.idProducto.map((index,_)=>{
        return(
            idDelProducto=index.idProducto
        )
    })
    setForm2(data)
    setForm2({
        ...data,
        idProducto: [idDelProducto]
    })
    
}


const updateData2 = async () =>{
    cambiarEstadoModalEmail(!estadoModalEmail) 
    if(confirmar === true){
        let endpoint = url+form2.idPromociones+'/'
        await axios.put(endpoint, form2)
        .then((res) => {
            cerrarEditor()
            obtenerPromociones()
        })
    }
}

const deleteData = (data) =>{
    Swal.fire({
        title: 'Eliminar promoción?',
        text: "Desea eliminar esta promoción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            let endpoint = url+data.idPromociones+'/'
            axios.delete(endpoint)
            .then((res) =>{
                // obtenerPromociones()
                cambiarEstadoPromocion(data)
            })
        }
    })
        
        
}

const cambiarEstadoPromocion = (productoSoloo) =>{
    
    obtenerProductoSolo(productoSoloo)
}

const ejecutarUpdate = () =>{
    let estadoPromocionn
    if(productoSolo.estadoPromocion === "ENP"){
        estadoPromocionn="NOP"
    }
    setForm2({
        ...productoSolo,
        idCategoria: productoSolo.idCategoria[0],
        estadoPromocion: estadoPromocionn
    })
}

const updateData3 = async () =>{
    let endpoint = "https://leon-ebanisteria.herokuapp.com/api/producto/"+form2.idProducto+'/'
    await axios.put(endpoint, form2)
    .then((res) => {
        obtenerPromociones()
    })
}

const obtenerProductoSolo = async (producto)=>{
    let productoCompleto
    producto.idProducto.map((index,_)=>{
        productoCompleto=index.idProducto
    })
    const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/" + productoCompleto)       
    const responseJSON =await response.json()
    setProductoSolo(responseJSON)
}


useEffect(()=>{
    setLoading(true)
    obtenerPromociones()
    setLoading(false)
    
},[])

useEffect(() => {
    if(buscador===null || buscador===undefined || buscador.length===0){

    }else{
        setProductos(buscador)
        setPagina(1)
    }
}, [buscador])

useEffect(() => {
    if(Object.keys(productoSolo).length===0){
    }else{
        ejecutarUpdate()
    }
}, [productoSolo])

useEffect(() => {
    if(Object.keys(form2).length===0){
    }else{
        updateData3()
    }
}, [form2])



    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>{mensajeModal}</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
            <div className="overlayPromocion">
                <div className="containerPromocion">
                    <div className='close'>
                        <button className='buttonClose' onClick={cerrarEditor}>
                            <i className='fas fa-times-circle'></i>
                        </button>
                    </div>
                    <div className="tituEditar">
                        <h2>EDITAR PROMOCIÓN</h2>
                    </div>
                    <form className="formPromocion" onSubmit={handleSubmit}>
                    <div className="txt_field">
                        <input type="number" id="valorDescuento" name="valorDescuento" value={form2.valorDescuento} required onChange={handleChange}/>
                        <label className="labelForm" for="valorDescuento"> Valor del descuento (%) </label>
                        <span></span>
                    </div>

                    <div className="txt_field">
                        <input type="number" id="productoExtra" name="productoExtra" value={form2.productoExtra} required onChange={handleChange}/>
                        <label className="labelForm" for="productoExtra"> Productos extra </label>
                        <span></span>
                    </div>

                    <div className="txt_field">
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
                                    <th scope='col'>Imagen Producto</th>
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
                            valorDescuento = index.valorDescuento
                            return(
                                
                                <>
                                <tr>
                                    <div className="etiquetas">
                                        <div className="disponible">
                                            {index.estadoPromocion==="ACT" 
                                            ?<p>Activo</p>
                                            :<p>Inactivo</p>
                                            }
                                        </div>
                                        {index.tiempoPromocion==="NUE"
                                            ?<div className="nuevo">

                                            </div>
                                            :""
                                        }
                                    </div>
                                    {index.idProducto.map((index,_)=>{
                                        return(
                                            <>
                                            <td>
                                                <Imagen
                                                    clase='img-table'
                                                    url={index.imagen}
                                                    alt='Front'
                                                />
                                            </td>
                                            <td>{index.nombre}</td>
                                        </>
                                        )
                                    })}
                                    <td>{index.valorDescuento}% </td>
                                    <td>{index.fechaFinalizacion}</td>
                                    
                                    {index.idProducto.map((index,_)=>{
                                        let descuento = (index.valor*valorDescuento)/100
                                        return(
                                            <>
                                                <td>
                                                    <span className='priceProducts-table'>
                                                        {accounting.formatMoney(index.valor, "$")}
                                                    </span>
                                                </td>
                                                <td>{accounting.formatMoney((index.valor-descuento), '$')}</td>
                                            </>
                                        )
                                    })}
                                    
                                    
                                    <td>
                                        <div className='buttonsTable-actions'>
                                            <button className='btnAction-table update-products' title="Cambiar estado de la promoción" onClick={()=>cambiarEstadoP(index)}>
                                                <i className="fa-solid fa-arrows-rotate"></i>
                                            </button>
                                            <button className='btnAction-table update-products' title="Editar Promoción" onClick={()=>updateData(index)}>
                                                <i className='fas fa-edit'></i>
                                            </button>
                                            <button className='btnAction-table delete-products' title="Eliminar Promoción" onClick={()=>deleteData(index)}>
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
