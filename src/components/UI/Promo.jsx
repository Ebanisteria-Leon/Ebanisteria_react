import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../assets/css/slider.css'
import { useViewModal } from '../hooks/useViewModal'
import { DescriptionProducts } from './DescriptionProducts/DescriptionProducts'
import { ProductCardPromo } from './ProductCardPromo/ProductCardPromo'
import ClipLoader from "react-spinners/ClipLoader";


export const Promo = () => {
    // como serializar relaciones

    const { ocultar_producto } = useViewModal()

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        initialSlide: 0,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    }

    let url="https://leon-ebanisteria.herokuapp.com/api/producto/"

    const [todosPromo, setTodos] = useState([])

    const fetchApi=async(url)=>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }

    useEffect(()=>{
        fetchApi(url)
    },[])

    return (
        <>
            <h3 className='titu-slider'>PROMOCIONES</h3>

            <Slider {...settings}>
                
            {!todosPromo ? <ClipLoader color='#dcaa47'/> : ""}
            {todosPromo.length===0 
            ?(
                <>
                <p className="parrafoNoHayPromo"><b>No existen productos en promoción</b></p>
                </>
            )
            :
            todosPromo.map((productos,key)=><ProductCardPromo key={key}  productos={productos}/>)}
                
            </Slider>

            <div className='overlay' id='overlay'>
                <DescriptionProducts id='floatWindow' click={ocultar_producto} />
            </div>
        </>
    )
}
