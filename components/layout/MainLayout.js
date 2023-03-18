import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const MainLayout = ({ children, stopHeaderSticky }) => {
    return (
        <>
            <Header stopHeaderSticky={stopHeaderSticky}></Header>
            {children}
            <Footer></Footer>
        </>
    )
}

export default MainLayout