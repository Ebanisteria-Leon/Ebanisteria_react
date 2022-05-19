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
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    let url="https://rickandmortyapi.com/api/character?page=3"

    const [todosPromo, setTodos] = useState()

    const fetchApi=async(url)=>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.results)
    }

    useEffect(()=>{
        fetchApi(url)
    },[])

    return (
        <>
            <h3 className='titu-slider'>SLIDER-PROMOCIONES</h3>

            <Slider {...settings}>
                
            {!todosPromo ? <ClipLoader color='#dcaa47'/> :
            todosPromo.map((productos)=><ProductCardPromo key={productos.id} productos={productos}/>)}
                
            </Slider>

            <div className='overlay' id='overlay'>
                <DescriptionProducts id='floatWindow' click={ocultar_producto} />
            </div>
        </>
    )
}
