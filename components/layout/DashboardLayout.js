import React, { useEffect, useState } from 'react'
import DashboardHeader from '../common/DashboardHeader'
import LeftNav from '../common/LeftNav'

const DashboardLayout = ({ children }) => {

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <div style={{ background: "#F1F1F1", minHeight: "100vh", padding: "15px", display: "flex", justifyContent: "center" }}>
                <div style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)", background: "#FFFFFF", borderRadius: "25px", width: "100%", display: "flex", overflow: "hidden", flex: "1" }}>
                    <LeftNav mobileMenu={mobileMenu} />
                    <div className='flex-1 w-100'>
                        <DashboardHeader mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout