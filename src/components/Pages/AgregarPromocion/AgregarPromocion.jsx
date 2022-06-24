import React, {useState, useEffect} from 'react'
import { SideBar } from '../../UI/SideBar/SideBar'
import { Imagen } from '../../UI/Imagen/Imagen'
import categoria from '../../../assets/images/iconos/porcentaje.png'
import axios from 'axios'
import { ModalProducto } from '../../UI/ModalProducto/ModalProducto'


export const AgregarPromocion = () => {
    
    const [producto, setProducto] = useState([])
    const [productoSolo, setProductoSolo] = useState([])
    let confirmar = Boolean
    let colorModal ="#fff"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    let fechaInicio
    const [form, setForm] = useState({
        idProducto: [],
        valorDescuento: null,
        productoExtra: null,
        fechaInicio: "",
        fechaFinalizacion: "",
        estadoPromocion: "ACT",
        tiempoPromocion: "NUE"
    })
    const [form2, setForm2] = useState({})

    const fetchApi=async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/?estadoProducto=D")
        const responseJSON = await response.json()
        setProducto(responseJSON)
        console.log(responseJSON);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        generarFecha()
        handleChange(e)
        crearPromo()
    }

    const handleChange = (e) => {
        const producto = document.getElementById('selectProducto')
        obtenerProductoSolo(producto)
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            idProducto: [Number(producto.value)],
            fechaInicio: fechaInicio
        })
        console.log(form);
    }

    const obtenerProductoSolo = async (producto)=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/producto/" + producto.value)       
        const responseJSON =await response.json()
        console.log(responseJSON);
        setProductoSolo(responseJSON)
    }

    const cambiarEstado = () =>{
        confirmar= true
        crearPromo()
    }

    const crearPromo = async () => {
        cambiarEstadoModalEmail(!estadoModalEmail)
        if (confirmar === true) {
            let url= "https://leon-ebanisteria.herokuapp.com/api/promocion/"
            await axios.post(url, form)
            .then(res=>{
                cambiarEstadoPromocion()
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }

    const cambiarEstadoPromocion = () =>{
        let estadoPromocionn
        if(productoSolo.estadoPromocion === "false" || productoSolo.estadoPromocion === "NOP"){
            estadoPromocionn="ENP"
        }
        setForm2({
            ...productoSolo,
            idCategoria: productoSolo.idCategoria[0],
            estadoPromocion: estadoPromocionn
        })
        
    }
    console.log(form2);

    const updateData2 = async () =>{
            console.log(form2);
            let endpoint = "https://leon-ebanisteria.herokuapp.com/api/producto/"+productoSolo.idProducto+'/'
            await axios.put(endpoint, form2)
            .then((res) => {
                console.log(res);
            })
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
    },[])

    useEffect(()=>{
        updateData2()
    },[form2])

  return (
    <div className='mainCategoria'>
        <ModalProducto
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>Quieres confirmar tu pedido?</p>
                <button className='aceptar' onClick={cambiarEstado}><i className="fa-solid fa-check"> Aceptar</i></button>
            </ModalProducto>
            <div className='titulo_agregar'>
                <h2>AGREGAR PROMOCIÓN</h2>
            </div>

            <SideBar />

            <div className='containerPromo'>
                <div className='agregar_promo'>
                    <Imagen url={categoria} />
                </div>

                <form className='formCategoria formPromo' onSubmit={handleSubmit}>
                    <div className="select_agregar select_promo">
                        <select id="selectProducto" onChange={handleChange}>
                        <option value="">Producto</option>
                        {!producto ? "" :
                        producto.map((index, key)=>{
                            return (
                                index.estadoPromocion==="NOP" || index.estadoPromocion==="false"
                                ?<option value={index.idProducto} key={key}>{index.nombre}</option>
                                :""
                            )
                        })}
                        </select>
                    </div>
                    <div className='txt_field2'>
                        <input
                            type='number'
                            id='valorDescuento'
                            name='valorDescuento'
                            utoComplete='off'
                            value={form.valorDescuento}
                            required
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                        <label className='labelForm' for='productoExtra'>
                            {' '}
                            Productos extra{' '}
                        </label>
                        <span></span>
                    </div>

                    <div className="txt_field2">
                        <input type="date" id="fechaInicio" name="fechaFinalizacion" value={form.fechaFinalizacion} required onChange={handleChange}/>
                        <label className="labelForm" for="fechaInicio"> Fecha de finalización</label>
                        <span></span>
                    </div>

                    <div className='divbtn_agregar22'>
                        <div className='divbtn_agregar'>
                            <button className='btnSubmit'>Agregar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}
