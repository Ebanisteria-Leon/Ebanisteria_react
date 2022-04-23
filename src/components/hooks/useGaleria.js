import React from 'react'

import img1 from '../../assets/images/galeria/img1.jpg'
import img2 from '../../assets/images/galeria/img2.jpg'
import img3 from '../../assets/images/galeria/img3.jpg'
import img4 from '../../assets/images/galeria/img4.jpg'
import img5 from '../../assets/images/galeria/img5.jpg'
import img6 from '../../assets/images/galeria/img6.jpg'
import img7 from '../../assets/images/galeria/img7.jpg'
import img8 from '../../assets/images/galeria/img8.jpg'
import img9 from '../../assets/images/galeria/img9.jpg'
import img10 from '../../assets/images/galeria/img10.jpg'
import img11 from '../../assets/images/galeria/img11.jpg'
import img12 from '../../assets/images/galeria/img12.jpg'
import img13 from '../../assets/images/galeria/img13.jpg'
import img14 from '../../assets/images/galeria/img14.jpg'
import img15 from '../../assets/images/galeria/img15.jpg'
import img16 from '../../assets/images/galeria/img16.jpg'
import img17 from '../../assets/images/galeria/img17.jpg'
import img18 from '../../assets/images/galeria/img18.jpg'
import img19 from '../../assets/images/galeria/img19.jpg'
import img20 from '../../assets/images/galeria/img20.jpg'

export const logicaGaleria=()=>{
    let contador = 0
    let contenedor
    let overlay
    let img_slideshow
    let imagenes = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
        { img: img9 },
        { img: img10 },
        { img: img11 },
        { img: img12 },
        { img: img13 },
        { img: img14 },
        { img: img15 },
        { img: img16 },
        { img: img17 },
        { img: img18 },
        { img: img19 },
        { img: img20 },
    ]
    let atras, adelante, img

    const mostrar = (event) => {
        contenedor = document.querySelector('.slideshow')
        overlay = document.querySelector('.overlay2')
        img_slideshow = document.querySelector('.slideshow img')

        atras = document.querySelector('.atras')
        adelante = document.querySelector('.adelante')
        img = document.querySelector('.slideshow img')

        let tgt = event.target
        if (tgt === atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt === adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }
    }

    const mostrarSlide = (e) => {
        contenedor = document.querySelector('.slideshow')
        overlay = document.querySelector('.overlay2')
        img_slideshow = document.querySelector('.slideshow img')

        const imagen_seleccionada = +e.target.dataset.imgMostrar

        img_slideshow.src = imagenes[imagen_seleccionada].img
        contador = imagen_seleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
        overlay.style.display = 'flex'
    }

    const cerrarVentana = () => {
        overlay.style.opacity = 0
        overlay.style.visibiity = 'hidden'
        overlay.style.display = 'none'
    }

    return{
        mostrar,
        mostrarSlide,
        cerrarVentana
    }
}