import React from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/dashboard/LeftNav.module.css"

import LeftNav1 from "../../assets/img/dashboard/leftNav1.png"


const LeftNav = () => {
    return (
        <div className={styles.leftNavWrapper}>
            <div>
                <Link href="/dashboard/CarListing" className={styles.logo}>VEHDE</Link>
            </div>
            <div className={`${styles.menuItems}`}>
                <Link href="" className={`${styles.menuItemActive}`}>
                    <Image src={LeftNav1} />
                    <span>Car Listing</span>
                </Link>
                <Link href="">
                    <Image src={LeftNav1} />
                    <span>My Host</span>
                </Link>
            </div>
            <div></div>
        </div>
    )
}

export default LeftNav