import React, {useEffect, useState} from 'react'
import '../../../assets/css/TableProduct.css'
import '../../../assets/css/EditarProducto.css'
import Mueble_Azul from '../../../assets/images/muebles-promo/mueble-azul.png'

import { Imagen } from '../../UI/Imagen/Imagen'
import { SideBar } from '../../UI/SideBar/SideBar'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'
import accounting from 'accounting'
import { helpHttp } from '../../helpers/helpHttp'
import ClipLoader from "react-spinners/ClipLoader";
import { Mensaje } from '../../UI/Mensaje/Mensaje'
import axios from 'axios'




export const TableProducts = () => {

    let api = helpHttp()
    let url = "https://leon-ebanisteria.herokuapp.com/api/producto/"
    let colorModal ="#F1C40F"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState()
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState(null)
    let datoP ={}

    // const initialForm = {
    //     nombre: "",
    //     descripcion: "",
    //     valor: null,
    //     alto: "",
    //     largo: "",
    //     ancho: "",
    //     color: "",
    //     calificacion: null,
    //     fechaInicio: null,
    //     fechaFinalizacion: null,
    //     estadoProducto: "",
    //     idCategoria: null
    //   }
      

    const [form2, setForm2] = useState({})

    const fetchApi=async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/categoria/")
        const responseJSON = await response.json()
        setCategorias(responseJSON)
    }

    const mostrarArchivo = () => {
        const inputFile = document.getElementById("imagen");
        const tituImagen = document.querySelector(".tituImagen");
        tituImagen.innerText = inputFile.files[0].name;
    };
    
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

    const mostrarModal =(event) =>{
        cambiarEstadoModalEmail(!estadoModalEmail) 
        event.preventDefault()
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        updateData2()
    }

    const handleChange = (e) =>{
    
        const categorias = document.getElementById('selectCategoria')
        setForm2({
        ...form2,
        [e.target.name]: e.target.value
        })
        console.log(form2);
    }

    const updateData = (data) =>{
        setForm2(data)
        editarProducto()
    }

    const updateData2 = async () =>{
        let endpoint = url+form2.idProducto+'/'
        await axios.put(endpoint, form2)
        .then((res) => {
            window.location.href="/Admin/TableProducts"
            console.log(res);
        })
    }

    const deleteData = async (data) =>{
        console.log(data.idProducto);
        let isDelete = window.confirm(
            `Estas seguro de eliminar el registro con el id ` + data.idProducto
        )
        if(isDelete){
            let endpoint = url+data.idProducto+'/'
            await axios.delete(endpoint)
            .then((res) =>{
                window.location.href="/Admin/TableProducts"
                console.log(res);
            })
            
        }
    }


    useEffect(()=>{
        fetchApi()
        setLoading(true)
        api.get(url).then(res=>{
            if(!res.err){
                setMsgError(null)
                setProductos(res.rows)
            }else{
                setMsgError(res)
                setProductos([])
            }
        })
        setLoading(false)
    },[])

    return (
        <>
            <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>Confirmar cambios?</p>
                <button className='aceptar'><i class="fa-solid fa-check"></i></button>
                <button className='cancelar'><i class="fa-solid fa-xmark"></i></button>
            </ModalProducto>
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

                <div className="txt_field">
                    <input type="text" id="estado" name="estadoProducto" value={form2.estadoProducto} required onChange={handleChange}/>
                    <label className="labelForm" for="estado"> Estado del producto </label>
                    <span></span>
                </div>

                <div className="select_agregar">
                <select name="agregar" id="selectCategoria" value={form2.idCategoria} onChange={handleChange}>
                    <option value="">Categorías</option>
                    {!categorias ? "" :
                    categorias.map((index, key)=>{
                        return (
                        <option value={index.idCategoria} key={key}>{index.nombreCategoria}</option>
                        )
                    })}
                </select>
                </div>

                <div className="select_agregar2">
{/* 
                    <div className="custom-input-file">
                    <input type="file" id="imagen" name="imagen"  className="" autoComplete="off" onChange={mostrarArchivo} />
                    <p>Editar Imagen</p>
                    <h5 className="tituImagen"></h5>
                    </div> */}
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
                <SideBar />
                <section className='section__table-products'>
                    {loading && <ClipLoader color='#dcaa47'/>}
                    {msgError && <Mensaje msg={'Error ' + msgError.status + ' : ' + msgError.statusText} bg={"#dc3545"}/>}
                    
                            <table className='table-products'>
                            {/* Cabecera de la tabla */}
                            <thead>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Categoria</th>
                                    <th scope='col'>Descripcion</th>
                                    <th scope='col'>Color</th>
                                    <th scope='col'>Precio</th>
                                    <th scope='col'>Imagen</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            {productos &&
                            productos.map((index,_)=>{
                            return(
                                <tbody>
                                <tr>
                                    <td>{index.idProducto}</td>
                                    <td>{index.nombre}</td>
                                    <td>{index.idCategoria}</td>
                                    <td>
                                        {index.descripcion}
                                    </td>
                                    <td>{index.color}</td>
                                    <td>
                                        <span className='priceProducts-table'>
                                            {accounting.formatMoney(index.valor, "$")}
                                        </span>
                                    </td>
                                    <td>
                                        <Imagen
                                            clase='img-table'
                                            url={index.imagen}
                                            alt='Front'
                                        />
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
