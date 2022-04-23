import React from 'react'
import '../../../assets/css/AgregarProducto.css'

import { SideBar } from '../../UI/SideBar/SideBar'
import { Imagen } from '../../UI/Imagen/Imagen'
import mueble from '../../../assets/images/AgregarProducto/muebleLargo.png'

export const AgregarProducto = () => {
    return (
        <div className='mainAgregar'>
            <div className='titulo_agregar'>
                <h2>AGREGAR PRODUCTO</h2>
            </div>

            <SideBar />

            <div className='container_agregar'>
                <div className='agregar_sofa'>
                    <Imagen url={mueble} />
                </div>

                <form className='formAgregar'>
                    <div className='txt_field'>
                        <input
                            type='text'
                            id='nombre'
                            autoComplete='off'
                            required
                            autoFocus
                        />
                        <label className='labelForm' for='nombre'>
                            Nombre del Producto
                        </label>
                        <span></span>
                    </div>

                    <div className='txt_field'>
                        <input type='text' id='precio' required />
                        <label className='labelForm' for='precio'>
                            Precio
                        </label>
                        <span></span>
                    </div>

                    <div className='txt_field'>
                        <input type='text' id='color' required />
                        <label className='labelForm' for='color'>
                            Color
                        </label>
                        <span></span>
                    </div>

                    <div className='txt_field'>
                        <input
                            type='text'
                            id='material'
                            autoComplete='off'
                            required
                        />
                        <label className='labelForm' for='material'>
                            Material
                        </label>
                        <span></span>
                    </div>

                    <div className='select_agregar'>
                        <select name='agregar' id=''>
                            <option value='agregar'>Tipo</option>
                        </select>

                        <div className='custom-input-file'>
                            <input
                                type='file'
                                id='imagen'
                                className=''
                                autoComplete='off'
                            />
                            <p>Subir Imagen</p>
                        </div>
                    </div>

                    <div className='divbtn_agregar'>
                        <button className='btnSubmit'>Aceptar</button>
                        <button className='btnSubmit'>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
