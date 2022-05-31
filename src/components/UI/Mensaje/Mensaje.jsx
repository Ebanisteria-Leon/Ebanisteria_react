import React, {useEffect} from 'react'
import '../../../assets/css/Mensaje.css'

export const Mensaje = ({msg, bg}) => {

    console.log(msg);


    return (
        <div className='mensaje'>
            <p>{msg}</p>
        </div>
    )
}
