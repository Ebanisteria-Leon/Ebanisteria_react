import React, {useEffect, useState} from 'react'
import '../../../assets/css/TableProduct.css'
import '../../../assets/css/EditarProducto.css'
import Mueble_Azul from '../../../assets/images/muebles-promo/mueble-azul.png'

import { Imagen } from '../../UI/Imagen/Imagen'
import { SideBar } from '../../UI/SideBar/SideBar'
import { Modal } from '../../UI/Modal/Modal';


export const TableProducts = () => {

    let colorModal ="#F1C40F"
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)

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
        event.preventDefault()
        console.log("entra");

        // colorModal="#F1C40F"
        cambiarEstadoModalEmail(!estadoModalEmail)
        console.log(estadoModalEmail);
    }

    return (
        <>
            <Modal
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={colorModal}>
                <p>Confirmar cambios?</p>

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
                <form className="formAgregar2" onSubmit={mostrarModal}>
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
                    <p>Editar Imagen</p>
                    <h5 className="tituImagen"></h5>
                    </div>
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

                        {/* Cuerpo de la tabla, coff la info de los productos */}
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Silla Madera obscura</td>
                                <td>Sillas</td>
                                <td>
                                    Silla en madera obscura, con respaldo hecho
                                    en espuma comoda
                                </td>
                                <td>Café obscuro</td>
                                <td>
                                    $
                                    <span className='priceProducts-table'>
                                        1.200.000
                                    </span>
                                </td>
                                <td>
                                    <Imagen
                                        clase='img-table'
                                        url={Mueble_Azul}
                                        alt='Front'
                                    />
                                </td>
                                <td>
                                    <div className='buttonsTable-actions'>
                                        <button className='btnAction-table update-products' onClick={editarProducto}>
                                            <i className='fas fa-edit'></i>
                                        </button>
                                        <button className='btnAction-table delete-products'>
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}
