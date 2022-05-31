import React, {useEffect, useState} from "react";
import "../../../assets/css/AgregarProducto.css";

import { SideBar } from "../../UI/SideBar/SideBar";
import { Imagen } from "../../UI/Imagen/Imagen";
import mueble from "../../../assets/images/AgregarProducto/muebleLargo.png";
import { helpHttp } from '../../helpers/helpHttp'
import axios from "axios";


export const initialForm = {
  nombre: "",
  descripcion: "",
  valor: null,
  alto: "",
  largo: "",
  ancho: "",
  color: "",
  calificacion: null,
  imagen: "",
  fechaInicio: null,
  fechaFinalizacion: null,
  estadoProducto: "",
  idCategoria: null
}

export const AgregarProducto = () => {

  let api = helpHttp()
  let url = "https://leon-ebanisteria.herokuapp.com/api/producto/"
  const [form, setForm] = useState(initialForm)
  const [categorias, setCategorias] = useState()
  let imagen_producto
  
  let options = {
    body: form, 
    }

  const fetchApi=async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/categoria/")
        const responseJSON = await response.json()
        setCategorias(responseJSON)
    }

  const mostrarArchivo = (e) => {
    const images = e.target.files
    imagen_producto = images[0].name;


    const inputFile = document.getElementById("imagen");
    const tituImagen = document.querySelector(".tituImagen");
    tituImagen.innerText = inputFile.files[0].name;
    handleChange2()
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    createData(form)
  }

  const handleChange = (e) =>{
    console.log("entra al primero");
    const categorias = document.getElementById('selectCategoria')
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      // idCategoria: Number(categorias.value)
    })
    console.log(form);
  }

  const handleChange2 = () =>{
    console.log("entra al segundo");
    let urlImg="https://leon-ebanisteria.herokuapp.com/media/products/" + imagen_producto
    setForm({
      ...form,
      imagen: urlImg
    })
    console.log(form);
  }



  const createData = async () =>{
        console.log(form);
        await axios.post(url, form)
        .then(res=>{
          window.location.href="/Admin/TableProducts"
            console.log(res)
        })
    }

  useEffect(()=>{
    fetchApi()
},[])

  return (
    <div className="mainAgregar">
      <div className="titulo_agregar">
        <h2>AGREGAR PRODUCTO</h2>
      </div>

      <SideBar />

      <div className="container_agregar">
        <div className="agregar_sofa">
          <Imagen url={mueble} />
        </div>

        <form className="formAgregar" onSubmit={handleSubmit}>
          <div className="txt_field">
            <input type="text" id="nombre" name="nombre" utoComplete="off" value={form?form.nombre:""} required autoFocus onChange={handleChange}/>
            <label className="labelForm" for="nombre"> Nombre del Producto </label>
            <span></span>
          </div>

          <div className="txt_field">
          <textarea id="mensaje" name="descripcion" value={form.descripcion} cols="30" rows="10" placeholder='Descripción del producto' required onChange={handleChange}></textarea>
          </div>

          <div className="txt_field">
            <input type="number" id="precio" name="valor" value={form.valor} required onChange={handleChange}/>
            <label className="labelForm" for="precio"> Valor del producto </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="medidasA" name="alto" value={form.alto} required onChange={handleChange}/>
            <label className="labelForm" for="medidasA"> Medidas del producto (Altura) </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="medidasL" name="largo" value={form.largo} required onChange={handleChange}/>
            <label className="labelForm" for="medidasL"> Medidas del producto (Largo) </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="medidasAn" name="ancho" value={form.ancho} required onChange={handleChange}/>
            <label className="labelForm" for="medidasAn"> Medidas del producto (Anchura) </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="color" name="color" value={form.color} required onChange={handleChange}/>
            <label className="labelForm" for="color"> Color </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="number" id="calificacion" name="calificacion" value={form.calificacion} required onChange={handleChange}/>
            <label className="labelForm" for="calificacion"> Calificacion de producto </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="date" id="fechaInicio" name="fechaInicio" value={form.fechaInicio} required onChange={handleChange}/>
            <label className="labelForm" for="fechaInicio"> Fecha de inicio</label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="date" id="fechaInicio" name="fechaFinalizacion" value={form.fechaFinalizacion} required onChange={handleChange}/>
            <label className="labelForm" for="fechaInicio"> Fecha de finalización</label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="estado" name="estadoProducto" value={form.estadoProducto} required onChange={handleChange}/>
            <label className="labelForm" for="estado"> Estado del producto </label>
            <span></span>
          </div>

          <div className="select_agregar">
            {/* <select id="selectCategoria" onChange={handleChange}>
              <option value="">Categorías</option>
              {!categorias ? "" :
              categorias.map((index, key)=>{
                return (
                  <option value={index.idCategoria} key={key}>{index.nombreCategoria}</option>
                )
              })}
            </select> */}
          </div>

          <div className="select_agregar2">
            <div className="custom-input-file">
              <input type="file" id="imagen" name="imagen" className="" autoComplete="off" onChange={mostrarArchivo} />
              <p>Subir Imagen</p>
              <h5 className="tituImagen"></h5>
            </div>
          </div>

          <div className="divbtn_agregar2">
          <div className="divbtn_agregar">
            <button className="btnSubmit">Agregar</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};
