import React, {useState, useRef, useEffect} from 'react'
import { Main } from '../../Layouts/Main/Main'
import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { Mision } from '../../UI/Mision/Mision'
import { Vision } from '../../UI/Vision/Vision'
import { Click } from '../../UI/Click/Click'
// import { SpinnerCircular, SpinnerDotted, SpinnerDiamond } from 'spinners-react';
import ClipLoader from "react-spinners/ClipLoader";
import DotLoader from "react-spinners/DotLoader";
import HashLoader from "react-spinners/HashLoader";




export const Home = () => {

  const [preloader, setPreloader] = useState(true)
  const [timer, setTimer] = useState(3)
  

  const id= useRef(null)
  const clear = ()=>{
    window.clearInterval(id.current)
    setPreloader(false)
  }

  useEffect(() => {
    id.current = window.setInterval(()=>{
      setTimer((timer)=>timer-1)
    }, 1000)
  }, [])
  
  useEffect(() => {
    if (timer ===0){
      clear()
    }
  }, [timer])
  


  return (
    <>
    {preloader? (
      <div className="splash absolutee">
        <h1>BIENVENIDOS!</h1>
        <h2>EBANISTERÍA LEÓN</h2>
        <ClipLoader color='#dcaa47'/>
      </div>
      ) :(
    <>
        <Barra/>
        <Header/>

        {/* <!-- Cuerpo principal de la pagina --> */}
        <Main />

        {/* <!-- Seccion de Mision --> */}
        <Mision/>

        {/* <!-- Seccion de Mision --> */}
        <Vision/>

        {/* <!-- Seccion de Mision --> */}
        <Click/>

        {/* <!-- footer de la pagina --> */}
        <Footer />
        </>
      )}
    </>
  )
}
