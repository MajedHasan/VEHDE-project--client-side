import React from 'react'
import LeftNav from '../common/LeftNav'

const DashboardLayout = ({ children }) => {
    return (
        <>
            <div style={{ background: "#F1F1F1", minHeight: "100vh", padding: "15px", display: "flex", justifyContent: "center" }}>
                <div style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)", background: "#FFFFFF", borderRadius: "25px", width: "100%", display: "flex", overflow: "hidden", flex: "1" }}>
                    <LeftNav />
                    <div className='flex-1'>
                        <div></div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout