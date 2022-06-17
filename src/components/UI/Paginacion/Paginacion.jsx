import React, {useState, useEffect} from 'react'
import '../../../assets/css/Paginacion.css'

export const Paginacion = ({pagina, setPagina, maximo}) => {
     
  let maximoSin = Math.trunc(maximo)
  const [input, setInput] = useState(1)
  
  const nextPage= () =>{
    setInput(input +1)
    setPagina(pagina + 1)
  }

  return (
    <div className="containerPaginator">
      <button className="previusPage">
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <input name='page' autoComplete='off' value={input}/>
      <p> de {maximoSin}</p>

      <button className="nextPage" onClick={nextPage}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  ) 
}
