import React from 'react'
import '../../../assets/css/PageNot.css'

import {Imagen} from '../../UI/Imagen/Imagen'
import pageNot from '../../../assets/images/404/404.jpg'

export const PageNot = () => {
  return (
    <div className='pageNot'>
      <div className="fondo">
        <Imagen url={pageNot}/>
      </div>
      <div className="mensaje404">
        <h2>LA PÁGINA QUE USTED SOLICITÓ NO SE ENCUENTRA</h2>
      </div>
    </div>
  )
}
