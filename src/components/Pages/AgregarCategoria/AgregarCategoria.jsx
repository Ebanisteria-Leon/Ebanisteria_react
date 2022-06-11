import React, { useState } from 'react'
import '../../../assets/css/AgregarCategoría.css'

import { SideBar } from '../../UI/SideBar/SideBar'
import { Imagen } from '../../UI/Imagen/Imagen'
import categoria from '../../../assets/images/AgregarCategoria/categoria.png'
import axios from 'axios'

export const initialForm = {
    nombreCategoria: '',
    descripcion: '',
}

export const AgregarCategoria = () => {
    let url = 'https://leon-ebanisteria.herokuapp.com/api/categoria/'
    const [form, setForm] = useState(initialForm)

    const handleSubmit = (e) => {
        e.preventDefault()
        createData()
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(form)
    }

    const createData = async () => {
        console.log(form)
        await axios.post(url, form).then((res) => {
            window.location.href = '/Admin/TableCategories'
            console.log(res)
        })
    }

    return (
        <div className='mainCategoria'>
            <div className='titulo_agregar'>
                <h2>AGREGAR CATEGORÍA</h2>
            </div>

            <SideBar />

            <div className='container_agregarC'>
                <div className='agregar_categoria'>
                    <Imagen url={categoria} />
                </div>

                <form className='formCategoria' onSubmit={handleSubmit}>
                    <div className='txt_field2'>
                        <input
                            type='text'
                            id='nombreCategoria'
                            name='nombreCategoria'
                            utoComplete='off'
                            value={form.nombreCategoria}
                            required
                            autoFocus
                            onChange={handleChange}
                        />
                        <label className='labelForm' for='nombreCategoria'>
                            {' '}
                            Nombre de la categoría{' '}
                        </label>
                        <span></span>
                    </div>

                    <div className='txt_field2'>
                        <textarea
                            id='mensaje'
                            name='descripcion'
                            value={form.descripcion}
                            cols='30'
                            rows='10'
                            placeholder='Descripción de la categoría'
                            required
                            onChange={handleChange}
                        ></textarea>
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
