import React from "react";
import "../../../assets/css/AgregarProducto.css";

import { SideBar } from "../../UI/SideBar/SideBar";
import { Imagen } from "../../UI/Imagen/Imagen";
import mueble from "../../../assets/images/AgregarProducto/muebleLargo.png";

export const AgregarProducto = () => {
  const mostrarArchivo = () => {
    const inputFile = document.getElementById("imagen");
    const tituImagen = document.querySelector(".tituImagen");
    tituImagen.innerText = inputFile.files[0].name;
  };

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

        <form className="formAgregar">
          <div className="txt_field">
            <input type="text" id="nombre" utoComplete="off" required autoFocus />
            <label className="labelForm" for="nombre"> Nombre del Producto </label>
            <span></span>
          </div>

          <div className="txt_field">
          <textarea name="user_message" id="mensaje" cols="30" rows="10" placeholder='Descripción del producto' required></textarea>
          </div>

          <div className="txt_field">
            <input type="number" id="precio" required />
            <label className="labelForm" for="precio"> Valor del producto </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="medidasA" required />
            <label className="labelForm" for="medidasA"> Medidas del producto (Altura) </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="medidasL" required />
            <label className="labelForm" for="medidasL"> Medidas del producto (Largo) </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="medidasAn" required />
            <label className="labelForm" for="medidasAn"> Medidas del producto (Anchura) </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="color" required />
            <label className="labelForm" for="color"> Color </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="number" id="calificacion" required />
            <label className="labelForm" for="calificacion"> Calificacion de producto </label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="date" id="fechaInicio" required />
            <label className="labelForm" for="fechaInicio"> Fecha de inicio</label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="date" id="fechaInicio" required />
            <label className="labelForm" for="fechaInicio"> Fecha de finalización</label>
            <span></span>
          </div>

          <div className="txt_field">
            <input type="text" id="estado" required />
            <label className="labelForm" for="estado"> Estado del producto </label>
            <span></span>
          </div>

          <div className="select_agregar">
            <select name="agregar" id="">
              <option value="agregar">Categoría</option>
            </select>
          </div>

          <div className="select_agregar2">
            <select name="agregar" id="">
              <option value="agregar">Imagen</option>
            </select>

            <div className="custom-input-file">
              <input type="file" id="imagen" className="" autoComplete="off" onChange={mostrarArchivo} />
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
