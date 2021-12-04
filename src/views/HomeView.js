import React from 'react'
import Navegacion from '../components/Navegacion'
import Dash from './Dash'
import ListaProdustosView from './ListaProductosView'

const HomeView = () => {
    return (
        <>
            <Navegacion/>
            <Dash/>
            <ListaProdustosView/>
        </>
    )
}

export default HomeView
