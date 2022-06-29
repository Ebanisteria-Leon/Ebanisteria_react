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
import { Modal } from '../../UI/Modal/Modal';
import Swal from 'sweetalert2'




export const TableProducts = () => {

    const [{ buscador }, dispatch] = useStateValue()
    let api = helpHttp()
    let url = "https://leon-ebanisteria.herokuapp.com/api/producto/?ordering=-idProducto"
    let urlNormal = "https://leon-ebanisteria.herokuapp.com/api/producto/"
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [estadoModalEmail2, cambiarEstadoModalEmail2] = useState(false)
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState()
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState(null)
    const [form2, setForm2] = useState({})
    const [form22, setForm22] = useState({})
    const [form, setForm] = useState({})
    let fechaInicio
    const [formPromo, setFormPromo] = useState({
        idProducto: [],
        valorDescuento: null,
        productoExtra: null,
        fechaInicio: "",
        fechaFinalizacion: "",
        estadoPromocion: "ACT",
        tiempoPromocion: "NUE"
    })
    const [mensajeModal, setMensajeModal] = useState("Quieres editar este producto?")
    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(6)
    const [productoSolo, setProductoSolo] = useState({})
    const maximo = productos.length / porPagina
    let imagen_producto=""
    let setearImg
    let setearImg2 
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

const cambiarDestcado = (data) =>{
    let estadoDestacado

    if(data.destacado === "DE"){
        estadoDestacado="NDE"
    }
    if(data.destacado === "NDE"){
        estadoDestacado="DE"
    }

    setForm2({
        ...data,
        idCategoria: data.idCategoria[0],
        destacado: estadoDestacado
    })

    setMensajeModal("Cambiar estado destacado?")

    updateData2()
}

const fetchApi=async()=>{
    const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/categoria/")
    const responseJSON = await response.json()
    setCategorias(responseJSON)
}

const obtenerProductos = () =>{
    api.get(url).then(res=>{
        if(!res.err){
            setMsgError(null)
            setProductos(res)
        }else{
            setMsgError(res)
            setProductos([])
        }
    })
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

const handleSubmitPromo = (e) =>{
    e.preventDefault()
    generarFecha()
    handleChangePromo(e)
    crearPromo()
}

const crearPromo = async () => {
        let url= "https://leon-ebanisteria.herokuapp.com/api/promocion/"
        await axios.post(url, formPromo)
        .then(res=>{
            console.log(res);
            cambiarEstadoPromocion()
        })
        .catch(err=>{
            console.log(err);
        })
}

const cambiarEstadoPromocion = () =>{
        let estadoPromocionn
        if(productoSolo.estadoPromocion === "false" || productoSolo.estadoPromocion === "NOP"){
            estadoPromocionn="ENP"
        }
        setForm22({
            ...productoSolo,
            idCategoria: productoSolo.idCategoria[0],
            estadoPromocion: estadoPromocionn
        })
        
    }

const handleChange = (e) =>{
    const categorias = document.getElementById('selectCategoria')
    const destacado = document.getElementById('selectDestacado')
    const estado = document.getElementById('selectEstado')
    const tiempo = document.getElementById('selectTiempoP')
    setForm2({
    ...form2,
    [e.target.name]: e.target.value,
    idCategoria: Number(categorias.value),
    estadoProducto: estado.value,
    tiempoProducto: tiempo.value,
    destacado: destacado.value
    })
}

const handleChangePromo = (e) =>{
    console.log(fechaInicio);
    setFormPromo({
        ...formPromo,
        [e.target.name]: e.target.value,
        idProducto: [productoSolo.idProducto],
        fechaInicio: fechaInicio
    })
    console.log(formPromo);
}

const obtenerProductoSolo = async (producto)=>{
    const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/" + producto)       
    const responseJSON =await response.json()
    console.log(responseJSON);
    setProductoSolo(responseJSON)
}

const llenarSelectCategoria = (data) =>{
    let llenarCategoria = data.idCategoria[0]
    const categoria = document.getElementById('selectCategoria')
    categoria.value=llenarCategoria
}

const updateData = (data) =>{
    llenarSelectCategoria(data)
    setForm2(data)
    editarProducto()
}


const updateData2 = async () =>{
    cambiarEstadoModalEmail(!estadoModalEmail) 
    if(confirmar === true){
        let endpoint = urlNormal+form2.idProducto+'/'
        await axios.put(endpoint, form2)
        .then((res) => {
            console.log(res);
            cerrarEditor()
            obtenerProductos()
        })
    }
}

const updateData3 = async () =>{
        let endpoint = urlNormal+form22.idProducto+'/'
        await axios.put(endpoint, form22)
        .then((res) => {
            cambiarEstadoModalEmail2(!estadoModalEmail2)
            console.log(res);
            cerrarPromocion()
            obtenerProductos()
        })
}


const deleteData = (data) =>{
        Swal.fire({
            title: 'Eliminar producto?',
            text: "Desea eliminar este producto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                let endpoint = urlNormal+data.idProducto+'/'
                axios.delete(endpoint)
                .then((res) =>{
                    obtenerProductos()
                })
            }
        })
        
}

const mostrarArchivo = (e) => {
    const images = e.target.files
    imagen_producto = images[0].name;

    const tituImagen = document.querySelector(".tituImagen");
    tituImagen.innerText = imagen_producto;
    // setearImagen(e)
};

const mostrarArchivo2 = (e) => {
    const images = e.target.files
    imagen_producto = images[0].name;

    const tituImagen = document.querySelector(".tituImagenC");
    tituImagen.innerText = imagen_producto;
    // setearImagen(e)
};

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
    setForm2({
        ...form2,
        idCategoria: form2.idCategoria[0],
        imagen: data.url
    })
    })
    .catch(err => console.log(err))
}
    
const uploadImage2 = () => {
    const data = new FormData()
    data.append("file", setearImg2)
    data.append("upload_preset", "ebanisteria")
    data.append("cloud_name","Ebanisteria")
    setTimeout(() => {
        fetch("  https://api.cloudinary.com/v1_1/Ebanisteria/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
        setForm2({
            ...form2, 
            idCategoria: form2.idCategoria[0],
            imagen2: data.url
        })
        })
        .catch(err => console.log(err))
    }, 5000);
}

const setearImagen = (e) =>{
    setearImg=e.target.files[0]
    uploadImage()
}

const setearImagen2 = (e) =>{
    setearImg2=e.target.files[0]
    uploadImage2()
}

const promocionarProducto=(data)=>{
    abrirPromocion()
    obtenerProductoSolo(data)
}

const abrirPromocion = () =>{
    const overlay = document.querySelector('.overlayPromocion')
    const container = document.querySelector('.containerPromocion')

    overlay.style.visibility="visible"
    overlay.style.opacity="1"
    container.style.opacity="1"
    container.style.transform="scale(1)"
}

const cerrarPromocion = () =>{
    const overlay = document.querySelector('.overlayPromocion')
    const container = document.querySelector('.containerPromocion')

    overlay.style.visibility="hidden"
    overlay.style.opacity="0"
    container.style.opacity="0"
    container.style.transform="scale(0.6)"
}

const generarFecha=()=>{
        let fecha = new Date()
        let meses = fecha.getUTCMonth() + 1
        let day = fecha.getUTCDate()-1
        let year = fecha.getUTCFullYear()
        let fechaCompleta = year + "-" + meses + "-" + day
        console.log(fechaCompleta);
        fechaInicio= fechaCompleta
}


useEffect(()=>{
    fetchApi()
    setLoading(true)
    obtenerProductos()
    setLoading(false)
    
},[])

useEffect(() => {
    if(buscador===null || buscador===undefined || buscador.length===0){

    }else{
        setProductos(buscador)
        setPagina(1)
    }
}, [buscador])

useEffect(()=>{
    if(Object.keys(form22).length===0){
    }else{
        updateData3()
    }
},[form22])


    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>{mensajeModal}</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
            <Modal
                estado={estadoModalEmail2}
                cambiarEstado={cambiarEstadoModalEmail2}
                color={'#008F39'}
            >
                <p>Se ha creado correctamente la promoción</p>
            </Modal>
            <div className="overlayEditar">
                <div className="container_agregar2">
                    <div className='close'>
                        <button className='buttonClose' onClick={cerrarEditor}>
                            <i className='fas fa-times-circle'></i>
                        </button>
                    </div>
                    <div className="tituEditar">
                        <h2>EDITAR PRODUCTO</h2>
                    </div>
                    <form className="formAgregar2" onSubmit={handleSubmit}>
                    <div className="txt_field">
                        <input type="text" id="nombre" name="nombre" value={form2.nombre} utoComplete="off" required autoFocus onChange={handleChange}/>
                        <label className="labelForm" for="nombre"> Nombre del Producto </label>
                        <span></span>
                    </div>

                    <div className="select_agregar222">
                        <div className="caja1">
                            <div className="cajaImagen">
                                <img className='imagen' src={form2.imagen} alt="" />
                            </div>
                            <div className="custom-input-file2">
                            <input type="file" autoComplete="off" onChange= {(e)=>{
                                mostrarArchivo(e)
                                setearImagen(e)
                            }}></input>
                                <p>Subir Imagen 1</p>
                                <h5 className="tituImagen"></h5>
                            </div>
                        </div>
                        <div className="caja2">
                            <div className="cajaImagen">
                                <img className='imagen' src={form2.imagen2} alt="" />
                            </div>
                            <div className="custom-input-file2">
                            <input type="file" autoComplete="off" onChange= {(e)=>{
                                mostrarArchivo2(e)
                                setearImagen2(e)
                            }}></input>
                                <p>Subir Imagen 2</p>
                                <h5 className="tituImagenC"></h5>
                            </div>
                        </div>
                    </div>

                    <div className="txt_field">
                    <textarea name="descripcion" id="mensaje" value={form2.descripcion} cols="30" rows="10" placeholder='Descripción del producto' required onChange={handleChange}></textarea>
                    </div>

                    <div className="txt_field">
                        <input type="number" id="precio" name="valor" value={form2.valor} required onChange={handleChange}/>
                        <label className="labelForm" for="precio"> Valor del producto </label>
                        <span></span>
                    </div>

                    <div className="txt_field">
                        <input type="text" id="medidasA" name="alto" value={form2.alto} required onChange={handleChange}/>
                        <label className="labelForm" for="medidasA"> Medidas del producto (Altura) </label>
                        <span></span>
                    </div>

                    <div className="txt_field">
                        <input type="text" id="medidasL" name="largo" value={form2.largo} required onChange={handleChange}/>
                        <label className="labelForm" for="medidasL"> Medidas del producto (Largo) </label>
                        <span></span>
                    </div>

                    <div className="txt_field">
                        <input type="text" id="medidasAn" name="ancho" value={form2.ancho} required onChange={handleChange}/>
                        <label className="labelForm" for="medidasAn"> Medidas del producto (Anchura) </label>
                        <span></span>
                    </div>

                    <div className="txt_field">
                        <input type="text" id="color" name="color" value={form2.color} required onChange={handleChange}/>
                        <label className="labelForm" for="color"> Color </label>
                        <span></span>
                    </div>

                    <div className="txt_field">
                        <input type="number" id="calificacion" name="calificacion" value={form2.calificacion} required onChange={handleChange}/>
                        <label className="labelForm" for="calificacion"> Calificacion de producto </label>
                        <span></span>
                    </div>

                    <div className="txt_field">
                        <input type="date" id="fechaInicio" name="fechaInicio" value={form2.fechaInicio} required onChange={handleChange}/>
                        <label className="labelForm" for="fechaInicio"> Fecha de inicio</label>
                        <span></span>
                    </div>

                    <div className="txt_field">
                        <input type="date" id="fechaFinalizacion" name="fechaFinalizacion" value={form2.fechaFinalizacion} required onChange={handleChange}/>
                        <label className="labelForm" for="fechaFinalizacion"> Fecha de finalización</label>
                        <span></span>
                    </div>

                    <div className="select_agregar">
                    <select id="selectCategoria" onChange={handleChange}>
                        <option value="">Categorias</option>
                        {!categorias ? "" :
                        categorias.map((index, key)=>{
                            return (
                            <option value={index.idCategoria} key={key}>{index.nombreCategoria}</option>
                            )
                        })}
                    </select>
                    </div>

                    <div className="select_agregar">
                    <select name="agregar" id="selectEstado"  onChange={handleChange}>
                        {form2.estadoProducto==="D"
                        ?<option value="D">Estado - Disponible</option>
                        :<option value="ND">Estado - No disponible</option>
                        }
                        <option value="ND" >No disponible</option>
                        <option value="D" >Disponible</option>
                    </select>
                    </div>

                    <div className="select_agregar">
                    <select name="agregar" id="selectDestacado" value={form2.destacado} onChange={handleChange}>
                        <option value="">Producto Destacado</option>
                        <option value="DE" >Destacado</option>
                        <option value="NDE" >No destacado</option>
                    </select>
                    </div>

                    <div className="select_agregar">
                    <select name="agregar" id="selectTiempoP" value={form2.tiempoProducto} onChange={handleChange}>
                        <option value="">Tiempo del producto</option>
                        <option value="NUE" >Nuevo</option>
                        <option value="ANT" >Antiguo</option>
                    </select>
                    </div>

                    <div className="divbtn_agregar2">
                    <div className="divbtn_agregar">
                        <button className="btnSubmit">Modificar</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            <div className="overlayPromocion">
                <div className="containerPromocion">
                    <div className='close'>
                        <button className='buttonClose' onClick={cerrarPromocion}>
                            <i className='fas fa-times-circle'></i>
                        </button>
                    </div>
                    <div className="tituEditar">
                        <h2>PROMOCIONAR PRODUCTO</h2>
                    </div>
                    <form className="formCategoria formPromo" onSubmit={handleSubmitPromo}>
                        <div className='txt_field2'>
                            <input
                                type='number'
                                id='valorDescuento'
                                name='valorDescuento'
                                utoComplete='off'
                                value={form.valorDescuento}
                                required
                                onChange={handleChangePromo}
                            />
                            <label className='labelForm' for='valorDescuento'>
                                {' '}
                                Valor del descuento (%){' '}
                            </label>
                            <span></span>
                        </div>

                        <div className='txt_field2'>
                            <input
                                type='number'
                                id='productoExtra'
                                name='productoExtra'
                                utoComplete='off'
                                value={form.productoExtra}
                                required
                                onChange={handleChangePromo}
                            />
                            <label className='labelForm' for='productoExtra'>
                                {' '}
                                Productos extra{' '}
                            </label>
                            <span></span>
                        </div>

                        <div className="txt_field2">
                            <input type="date" id="fechaInicio" name="fechaFinalizacion" value={form.fechaFinalizacion} required onChange={handleChangePromo}/>
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
                <h3 className='title-table-products'>PRODUCTOS</h3>
                <SideBar url={"https://leon-ebanisteria.herokuapp.com/api/producto/?search="}/>
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
                                    <th scope='col'>Categoría</th>
                                    <th scope='col'>Descripción</th>
                                    <th scope='col'>Color</th>
                                    <th scope='col'>Precio</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                            {productos===undefined || productos===null || productos.length===0
                            ?"no hay"
                            :productos
                            .slice(
                            (pagina - 1) * porPagina, 
                            (pagina - 1) * porPagina + porPagina)
                            .map((index,_)=>{
                            return(
                                
                                <>
                                <tr>
                                    <div className="etiquetas">
                                        <div className="disponible">
                                            {index.estadoProducto==="D" 
                                            ?<p>Disponible</p>
                                            :<p>No disponible</p>
                                            }
                                        </div>
                                        <div className="destacado">
                                            {index.destacado==="DE" 
                                            ?<p>Destacado</p>
                                            :<p>No destacado</p>
                                            }
                                        </div>
                                        {index.tiempoProducto==="NUE"
                                            ?<div className="nuevo">

                                            </div>
                                            :""
                                        }
                                    </div>
                                    <td>
                                        <Imagen
                                            clase='img-table'
                                            url={index.imagen}
                                            alt='Front'
                                        />
                                    </td>
                                    <td>{index.nombre}</td>
                                    <td>{index.idCategoria[1]} </td>
                                    <td className='td-descripcion'>
                                        <p>{index.descripcion}</p>
                                    </td>
                                    <td>{index.color}</td>
                                    <td>
                                        <span className='priceProducts-table'>
                                            {accounting.formatMoney(index.valor, "$")}
                                        </span>
                                        {index.estadoPromocion==="ENP"
                                        ?<p className='enPromo'>Producto en promoción!! <i class="fa-solid fa-percent"></i></p>
                                        :<button onClick={()=>promocionarProducto(index.idProducto)}>Promocionar producto</button>
                                    }
                                    </td>
                                    
                                    <td>
                                        <div className='buttonsTable-actions'>
                                            <button className='btnAction-table update-products' title="Producto destacado / No destacado" onClick={()=>cambiarDestcado(index)}>
                                                <i className="fa-solid fa-star-half-stroke"></i>
                                            </button>
                                            <button className='btnAction-table update-products' title="Cambiar estado del Producto" onClick={()=>cambiarEstadoP(index)}>
                                                <i className="fa-solid fa-arrows-rotate"></i>
                                            </button>
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
