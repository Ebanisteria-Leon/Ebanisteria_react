import React from 'react'
import { useHeader } from '../../hooks/useHeader'

export const Barra = () => {

    const { cambiar_barra } = useHeader()

    return (
        <div className="menu-btn" onClick={cambiar_barra}>
            <div className="menu-btn__burger">
            </div>
        </div>
    )
}
