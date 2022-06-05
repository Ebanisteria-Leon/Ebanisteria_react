import React from 'react'
import { SideBar } from '../../UI/SideBar/SideBar'

import '../../../assets/css/AdminPanel.css'

export const Admin = () => {
    return (
        <>
            <SideBar />
            <main className='mainAdmin'>
                <h2>BIENVENIDO AL PANEL ADMINISTRATIVO</h2>
            </main>
        </>
    )
}
