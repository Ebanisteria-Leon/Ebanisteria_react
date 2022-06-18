import React, {useState, useEffect} from 'react'
import '../../../assets/css/Paginacion.css'

export const Paginacion = ({pagina, setPagina, maximo}) => {
     
  let maximoSin = Math.ceil(maximo)
  const [input, setInput] = useState(1)
  
  const nextPage= () =>{
    setInput(parseInt(input) + 1)
    setPagina(parseInt(pagina) + 1)
  }

  const previusPage= () =>{
    setInput(parseInt(input) - 1)
    setPagina(parseInt(pagina) - 1)
  }

  const onKeyDown = (e) =>{
    if(e.keyCode === 13){
      setPagina(parseInt(e.target.value))
    }
    if(parseInt(e.target.value < 1) || 
      parseInt(e.target.value) > Math.ceil(maximo) || 
      isNaN(parseInt(e.target.value))){
        setPagina(1)
        setInput(1)
    } else{
      setPagina(parseInt(e.target.value))
    }
  }

  const onChange = (e) =>{
    setInput(e.target.value)
  }

  return (
    <div className="containerPaginator">
      <button className="previusPage" disabled={pagina === 1 || pagina <1} onClick={previusPage}>
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <input className='inputPage' autoComplete='off' placeholder={input}  onKeyDown={e=> onKeyDown(e)} onChange={e=> onChange(e)}/>
      <p> de {maximoSin}</p>

      <button className="nextPage" disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)} onClick={nextPage}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  ) 
}
