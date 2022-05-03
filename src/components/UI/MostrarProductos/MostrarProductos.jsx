import React from 'react'
import { Imagen } from '../Imagen/Imagen'

export const MostrarProductos = ({productos : {id, name, image, gender}}) => {
  return (
    <div className='producto'>
        <div className="pImg">
            <Imagen clase='product-img-front' url={image} alt='Front'/>
        </div>
        <div className="pName">
            <p>{name}</p>
        </div>
    </div>
  )
}
