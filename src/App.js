import React,{useEffect, useState} from 'react'
import './assets/css/App.css'
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import * as Scroll from 'react-scroll';

import { Home } from './components/Pages/Home/Home'
import { PageNot } from './components/Pages/PageNot/PageNot'

import { Login } from './components/Pages/Login/Login'
import { Register } from './components/Pages/Register/Register'
import { RecoverPass } from './components/Pages/RecoverPass/RecoverPass'
import { Email } from './components/Pages/Email/Email'
import { AgregarProducto } from './components/Pages/AgregarProducto/AgregarProducto'

import { Products } from './components/Pages/Products/Products'
import { Category } from './components/Pages/Category/Category'

import { TableOrders } from './components/Pages/TableOrders/TableOrders'
import { TableSalesDate } from './components/Pages/TableSalesDate/TableSalesDate'
import { TableRol } from './components/Pages/TableRol/TableRol'
import { TableProducts } from './components/Pages/TableProducts/TableProducts'


function App() {

    // const obtener_pixeles = () => document.documentElement.scrollTop || document.body.scrollTop

    // let scroll    = Scroll.animateScroll;

    // const irArriba = () =>{
    //     if (obtener_pixeles() >0) {
    //     scroll.scrollTo(0,0)
    //     }
    // }

    // window.onscroll = function(){
    //     const boton = document.getElementById('boton_arriba')
    
    //     if(obtener_pixeles() >50){
    //       boton.classList.add("mostrar")
    //       boton.classList.remove("ocultar")
    //     } else{
    //       boton.classList.add("ocultar")
    //       boton.classList.remove("mostrar")
    //     }
    //   }  
    
    window.onscroll = function() {
        
        console.log("Vertical: " + window.scrollY);
        console.log("Horizontal: " + window.scrollX);
      
      };
    



    

    return (
        <div className='App' >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Category' element={<Category />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/RecoverPass' element={<RecoverPass />} />
                    <Route path='/Email' element={<Email />} />
                    <Route path='/Admin/TableSalesDate' element={<TableSalesDate />} />
                    <Route path='/Admin/TableOrders' element={<TableOrders />} />
                    <Route path='/Admin/TableRol' element={<TableRol />} />
                    <Route path='/Admin/TableProducts' element={<TableProducts />} />
                    <Route path='/Admin/AgregarProducto' element={<AgregarProducto />} />
                    <Route path='*' element={<PageNot />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
