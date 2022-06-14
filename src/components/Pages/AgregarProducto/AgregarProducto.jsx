import React, {useEffect, useState} from "react";
import "../../../assets/css/AgregarProducto.css";

import { SideBar } from "../../UI/SideBar/SideBar";
import { Imagen } from "../../UI/Imagen/Imagen";
import mueble from "../../../assets/images/AgregarProducto/muebleLargo.png";
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
  imagen2:"",
  fechaInicio: null,
  fechaFinalizacion: null,
  estadoProducto: "",
  destacado: "",
  tiempoProducto: "NUE",
  idCategoria: null
}

export const AgregarProducto = () => {

  let url = "https://leon-ebanisteria.herokuapp.com/api/producto/"
  const [form, setForm] = useState(initialForm)
  const [image, setImage] = useState("");
  
  const [categorias, setCategorias] = useState()
  let imagen_producto=""
  let setearImg
  let setearImg2

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
    setForm({
      ...form,
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
      setForm({
        ...form, 
        imagen2: data.url
      })
      })
      .catch(err => console.log(err))
    }, 8000);
  }

  const fetchApi=async()=>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/api/categoria/")
        const responseJSON = await response.json()
        setCategorias(responseJSON.results)
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

  const handleSubmit = (e) =>{
    e.preventDefault()
      createData()
  }

  const handleChange = (e) =>{
    const categorias = document.getElementById('selectCategoria')
    const estado = document.getElementById('selectEstado')
    const destacado = document.getElementById('selectDestacado')
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      idCategoria: Number(categorias.value),
      estadoProducto: estado.value,
      destacado: destacado.value,
    })
  }
  

  const createData = async () =>{
        await axios.post(url, form)
        .then(res=>{
            window.location.href="/Admin/TableProducts"
        })
    }
  
  const setearImagen = (e) =>{
    setearImg=e.target.files[0]
    uploadImage()
  }

  const setearImagen2 = (e) =>{
    setearImg2=e.target.files[0]
    uploadImage2()
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

          <div className="select_agregar22">
            <div className="custom-input-file2">
            <input type="file" autoComplete="off" onChange= {(e)=>{
              mostrarArchivo(e)
              setearImagen(e)
            }}></input>
              <p>Subir Imagen 1</p>
              <h5 className="tituImagen"></h5>
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

          <div className="select_agregar">
            <select id="selectCategoria" onChange={handleChange}>
              <option value="">Categorías</option>
              {!categorias ? "" :
              categorias.map((index, key)=>{
                return (
                  <option value={index.idCategoria} key={key}>{index.nombreCategoria}</option>
                )
              })}
            </select>
          </div>
          <div className="select_agregar">
            <select id="selectEstado" onChange={handleChange}>
              <option value="">Estado del producto</option>
              <option value="D">Disponible</option>
              <option value="ND">No disponible</option>
            </select>
          </div>
          <div className="select_agregar">
            <select id="selectDestacado" onChange={handleChange}>
              <option value="">Producto destacado</option>
              <option value="DE">Destacado</option>
              <option value="NDE">No destacado</option>
            </select>
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
