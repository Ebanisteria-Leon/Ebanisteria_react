import React,{useState, useEffect} from 'react'
import '../../../assets/css/ProductosAgregados.css'
import { useViewModal } from '../../hooks/useViewModal'
import { Header } from '../../Layouts/Header/Header'
import { Barra } from '../../UI/Barra/Barra'
import { DescriptionProducts } from '../../UI/DescriptionProducts/DescriptionProducts'
import { ProductoAgregado } from '../../UI/ProductoAgregado/ProductoAgregado'
import { Total } from '../../UI/Total/Total'
import { useStateValue } from '../../hooks/StateProvider'
import { actionTypes } from '../../hooks/reducer'
import { getBasketTotal } from '../../hooks/reducer'
import { Imagen } from '../../UI/Imagen/Imagen'
import accounting from 'accounting'




export const ProductosAgregados = () => {

    const { mostrar_producto } = useViewModal()
    const [total, setTotal] = useState(0)

    const [{basket}, dispatch] = useStateValue()

    const eliminarProducto = (id) =>{
            dispatch({
                type: actionTypes.REMOVE_ONE_FROM_CART,
                idProducto: id,
            })
      }

    useEffect(() => {
        setTotal(
            basket.reduce((amount, item) => amount + item.valor * item.quantity, 0)
        )
    }, [basket])
    


    return (
    <>
            <div className='mainProductsAgregados'>
                <Barra />
                <Header />
                <div className="titu-miCarrito">
                        <h3 className='title-carrito'>MI CARRITO</h3>
                </div>
                <div className="contenedorPago">
                    <section className='section__products2'>
                        <div className='productos-tabla'>
                            <div className="box_tabla">
                                <table className="tabla-producto">
                                    <thead className="cabecera-producto">
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="cuerpo-producto">
                                        {basket?.length === 0 
                                        ? <p className='pNoExiste'>No existen productos agregados a tu carrito</p>
                                        :basket.map((productos,_)=>{
                                            return(
                                                <tr>
                                                <td>
                                                    <div className="descripcion-productoAgregado">
                                                        <Imagen clase='img-table' url={productos.imagen} alt='Front'/>
                                                        <div className="descripcion2">
                                                            <p>{productos.nombre}</p>
                                                            <p>{accounting.formatMoney(productos.valor, "$")}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{productos.quantity}X</p>
                                                </td>
                                                <td>
                                                    <div className="boxTotalProducts">
                                                        {accounting.formatMoney(productos.valor*productos.quantity, "$")}
                                                        <div className="eliminarP">
                                                            <button className='delete-btn' onClick={()=>eliminarProducto(productos.idProducto)} title="Eliminar unidad"> 
                                                                <i className="fa-solid fa-xmark xProducto"></i>
                                                            </button>
                                                        </div> 
                                                    </div>
                                                </td>
                                            </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <div className="cart-pago">
                        <h2>Detalles de compra</h2>
                        <Total precioTotal={total} pTotal={basket?.length}/>
                        <button className="botonTotal">Verificar</button>
                    </div>
                </div>

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
