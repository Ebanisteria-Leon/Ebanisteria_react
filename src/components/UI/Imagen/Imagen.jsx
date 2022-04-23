import React from 'react'

export const Imagen = ({ url, clase, alt, id }) => {
    return <img className={clase} src={url} alt={alt} id={id} />
}
