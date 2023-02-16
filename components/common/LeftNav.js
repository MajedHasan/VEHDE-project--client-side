import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/dashboard/LeftNav.module.css"

import CarListing from "../../assets/img/dashboard/carListing.svg"
import MyHost from "../../assets/img/dashboard/myHost.svg"
import Messages from "../../assets/img/dashboard/messages.svg"
import Availability from "../../assets/img/dashboard/availability.svg"
import VEHDEPass from "../../assets/img/dashboard/VEHDEPass.svg"
import Payment from "../../assets/img/dashboard/payment.svg"
import VEHDEScore from "../../assets/img/dashboard/VEHDEScore.svg"
import SnowTicket from "../../assets/img/dashboard/SnowTicket.svg"


const LeftNav = () => {

    const pathname = ""
    const [page, setPage] = useState("Car Listing")

    useEffect(() => {
        if (pathname.includes("CarListing")) {
            setPage("Car Listing")
        }
        else if (pathname.includes("MyHost")) {
            setPage("My Host")
        }
        else if (pathname.includes("Messages")) {
            setPage("Messages")
        }
        else if (pathname.includes("Availability")) {
            setPage("Availability")
        }
        else if (pathname.includes("VEHDEPass")) {
            setPage("VEHDEPass")
        }
        else if (pathname.includes("Payment")) {
            setPage("Payment")
        }
        else if (pathname.includes("VEHDEScore")) {
            setPage("VEHDE Score")
        }
        else if (pathname.includes("SnowTicket")) {
            setPage("Snow Ticket")
        }
    }, [pathname])

    return (
        <div className={styles.leftNavWrapper}>
            <div>
                <Link href="/dashboard/CarListing" className={styles.logo}>VEHDE</Link>
            </div>
            <div className={`${styles.menuItems}`}>
                <Link href="/dashboard/CarListing" className={`${page === "Car Listing" && styles.menuItemActive}`}>
                    <Image src={CarListing} />
                    <span>Car Listing</span>
                </Link>
                <Link href="/dashboard/MyHost" className={`${page === "My Host" && styles.menuItemActive}`}>
                    <Image src={MyHost} />
                    <span>My Host</span>
                </Link>
                <Link href="/dashboard/Messages" className={`${page === "Messages" && styles.menuItemActive}`}>
                    <Image src={Messages} />
                    <span>Messages</span>
                    <i className='fa fa-chevron-right' style={{ fontSize: "12px" }}></i>
                </Link>
                <Link href="/dashboard/Availability" className={`${page === "Availability" && styles.menuItemActive}`}>
                    <Image src={Availability} />
                    <span>Availability</span>
                </Link>
                <Link href="/dashboard/VEHDEPass" className={`${page === "VEHDEPass" && styles.menuItemActive}`}>
                    <Image src={VEHDEPass} />
                    <span>VEHDEPass</span>
                </Link>
                <Link href="/dashboard/Payment" className={`${page === "Payment" && styles.menuItemActive}`}>
                    <Image src={Payment} />
                    <span>Payment</span>
                </Link>
                <Link href="/dashboard/VEHDEScore" className={`${page === "VEHDE Score" && styles.menuItemActive}`}>
                    <Image src={VEHDEScore} />
                    <span>VEHDE Score</span>
                </Link>
                <Link href="/dashboard/SnowTicket" className={`${page === "Snow Ticket" && styles.menuItemActive}`}>
                    <Image src={SnowTicket} />
                    <span>Snow Ticket</span>
                </Link>
            </div>
            <div></div>
        </div>
    )
}

export default LeftNav