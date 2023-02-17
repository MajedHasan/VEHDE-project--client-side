import Image from "next/image"
import styles from "../../styles/dashboard/Header.module.css"

import HelpImg from "../../assets/img/dashboard/help.svg"
import UserImg from "../../assets/img/dashboard/user.svg"
import LogOutImg from "../../assets/img/dashboard/logout.svg"
import Link from "next/link"
import { useState } from "react"


const DashboardHeader = ({ mobileMenu, setMobileMenu }) => {

    const [showMenu, setShowMenu] = useState(false)
    const [available, setAvailable] = useState(true)
    const [mobileSearch, setMobileSearch] = useState(false)

    return (
        <header id={styles.header}>
            <div id={styles.toggleMenuBtn}>
                {
                    mobileMenu ? <i class="fa-solid fa-xmark" onClick={() => setMobileMenu(false)}></i> : <i class="fa-solid fa-bars" onClick={() => setMobileMenu(true)}></i>
                }
            </div>
            <div>
                <i className="fa fa-search" onClick={() => setMobileSearch(true)} ></i>
                <input type="text" placeholder="Type anywhere to search" />
                <div id={`${mobileSearch ? styles.activeSearch : ""}`}>
                    <input type="text" placeholder="Type anywhere to search" />
                    <i className="fa fa-times pe-1" onClick={() => setMobileSearch(false)}></i>
                </div>
            </div>
            <div>
                <div>J</div>
                <div>
                    <h3>Jane Wesley</h3>
                    <span>VEHDE ID: JW-H (TX) 868746-78613</span>
                </div>
                <i className="fa fa-chevron-down" onClick={() => setShowMenu(!showMenu)}></i>
                {
                    showMenu && <div>
                        <h4>I am {available ? "available" : "unavailable"} to host</h4>
                        <input type="checkbox" id="available" hidden checked={available} onChange={(e) => setAvailable(!available)} />
                        <label htmlFor="available">
                            <span>On</span>
                            <span>Off</span>
                        </label>
                        <div>
                            <Link href="">
                                <Image src={HelpImg} />
                                <span>Help Center</span>
                            </Link>
                            <Link href="">
                                <Image src={UserImg} />
                                <span>My Profile</span>
                            </Link>
                            <Link href="">
                                <Image src={LogOutImg} />
                                <span>Sign Out</span>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export default DashboardHeader