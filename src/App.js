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
import { ProductosAgregados } from './components/Pages/ProductosAgregados/ProductosAgregados';
import { Admin } from './components/Pages/Admin/Admin';



function App() {

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
                    <Route path='/Contactanos' element={<Email />} />
                    <Route path='/Admin' element={<Admin />} />
                    <Route path='/Admin/TableSalesDate' element={<TableSalesDate />} />
                    <Route path='/Admin/TableOrders' element={<TableOrders />} />
                    <Route path='/Admin/TableRol' element={<TableRol />} />
                    <Route path='/Admin/TableProducts' element={<TableProducts />} />
                    <Route path='/Admin/AgregarProducto' element={<AgregarProducto />} />
                    <Route path='/Productos-agregados' element={<ProductosAgregados />} />
                    <Route path='*' element={<PageNot />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
