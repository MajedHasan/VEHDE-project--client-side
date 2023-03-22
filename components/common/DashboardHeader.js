import Image from "next/image"
import styles from "../../styles/dashboard/Header.module.css"

import HelpImg from "../../assets/img/dashboard/help.svg"
import UserImg from "../../assets/img/dashboard/user.svg"
import LogOutImg from "../../assets/img/dashboard/logout.svg"
import Link from "next/link"
import { useState } from "react"
import ModalLg from "../../components/common/ModalLg"

import ProfileModalImg1 from "../../assets/img/dashboard/MyRenter/ProfileModalImg1.svg"
import ProfileModalImg2 from "../../assets/img/dashboard/MyRenter/ProfileModalImg2.png"
import ProfileModalImg3 from "../../assets/img/dashboard/MyRenter/ProfileModalImg3.png"
import ProfileModalImg4 from "../../assets/img/dashboard/MyRenter/ProfileModalImg4.png"
import ProfileModalImg5 from "../../assets/img/dashboard/MyRenter/ProfileModalImg5.png"
import ProfileModalImg6 from "../../assets/img/dashboard/MyRenter/ProfileModalImg6.png"


const DashboardHeader = ({ mobileMenu, setMobileMenu, userRole }) => {

    const [showMenu, setShowMenu] = useState(false)
    const [available, setAvailable] = useState(true)
    const [mobileSearch, setMobileSearch] = useState(false)
    const [showProfileModal, setProfileModal] = useState(false)

    return (
        <>
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
                            {
                                userRole === "host" && <>
                                    <h4>I am {available ? "available" : "unavailable"} to host</h4>
                                    <input type="checkbox" id="available" hidden checked={available} onChange={(e) => setAvailable(!available)} />
                                    <label htmlFor="available">
                                        <span>On</span>
                                        <span>Off</span>
                                    </label>
                                    <div>
                                        <Link href="/dashboard/HelpCenter">
                                            <Image src={HelpImg} />
                                            <span>Help Center</span>
                                        </Link>
                                        <Link href="/dashboard/profile">
                                            <Image src={UserImg} />
                                            <span>My Profile</span>
                                        </Link>
                                        <Link href="">
                                            <Image src={LogOutImg} />
                                            <span>Sign Out</span>
                                        </Link>
                                    </div>
                                </>
                            }
                            {
                                userRole === "renter" && <>
                                    <div>
                                        <Link href="/dashboard/HelpCenter">
                                            <Image src={HelpImg} />
                                            <span>Help Center</span>
                                        </Link>
                                        <button onClick={() => { setProfileModal(true); setShowMenu(false) }}>
                                            <Image src={UserImg} />
                                            <span>My Profile</span>
                                        </button>
                                        <Link href="">
                                            <Image src={LogOutImg} />
                                            <span>Sign Out</span>
                                        </Link>
                                    </div>
                                </>
                            }
                        </div>
                    }
                </div>
            </header>
            {
                showProfileModal && <ModalLg setModal={setProfileModal}>
                    <div className={styles.profileModal}>
                        <h2>My Profile</h2>
                        <div>
                            <Link href="">
                                <Image src={ProfileModalImg1} alt="" />
                                <h4>Auto insurance</h4>
                            </Link>
                            <Link href="">
                                <Image src={ProfileModalImg2} alt="" />
                                <h4>Driver’s license</h4>
                            </Link>
                            <Link href="/dashboard/Payment/PaymentMethod">
                                <Image src={ProfileModalImg3} alt="" />
                                <h4>Payment method</h4>
                            </Link>
                            <Link href="/dashboard/VEHDEPass">
                                <Image src={ProfileModalImg4} alt="" />
                                <h4>VEHDEPass Membership</h4>
                            </Link>
                            <Link href="">
                                <Image src={ProfileModalImg5} alt="" />
                                <h4>Contact Information</h4>
                            </Link>
                            <Link href="">
                                <Image src={ProfileModalImg6} alt="" />
                                <h4>Change Password</h4>
                            </Link>
                        </div>
                    </div>
                </ModalLg>
            }
        </>
    )
}

export default DashboardHeader