import React,{useState, useEffect} from 'react'
import { useViewModal } from '../../hooks/useViewModal'
import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { DescriptionProducts } from '../../UI/DescriptionProducts/DescriptionProducts'
import { ProductoAgregado } from '../../UI/ProductoAgregado/ProductoAgregado'
import { Total } from '../../UI/Total/Total'
import { useStateValue } from '../../hooks/StateProvider'
import { getBasketTotal } from '../../hooks/reducer'




export const ProductosAgregados = () => {

    const { mostrar_producto } = useViewModal()
    const [total, setTotal] = useState(0)

    const [{basket}, dispatch] = useStateValue()
    console.log(basket);

    useEffect(() => {
        setTotal(
            basket.reduce((amount, item) => amount + item.valor * item.quantity, 0)
        )
    }, [basket])
    


    return (
    <>
            <div className='mainProducts'>
                <Barra />
                <Header />

                <h3 className='title-category'>Productos Agregados</h3>
                <Total precioTotal={total} pTotal={basket?.length}/>
                <button className="botonTotal">Verificar</button>
                <section className='section__products2'>
                        {basket?.length === 0 ? <p>No Tienes ningún producto agregado</p> : 
                        basket.map((productos)=><ProductoAgregado key={productos.id} productos={productos}/>)}
                </section>

                <div className='overlay' id='overlay'>
                    <DescriptionProducts
                        id='floatWindow'
                        click={mostrar_producto}
                    />
                </div>
            </div>
        </>
  )
}
