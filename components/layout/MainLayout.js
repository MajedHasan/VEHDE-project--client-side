import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}

export default MainLayout