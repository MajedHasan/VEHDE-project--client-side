import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import logo from "../../assets/img/logo.png"
import MenuIcon from "../../assets/img/menu-icon.png"
import MenuIconOpen from "../../assets/img/menu-icon-open.png"
import User from "../../assets/img/user.png"
import ShuttleIcon from "../../assets/img/shuttle-icon.png"
import BagIcon from "../../assets/img/bag-icon.png"
import HelpIcon from "../../assets/img/help-icon.png"

const Header = () => {

    const [openMenuItem, setOpenMenuItem] = useState(false)
    const [openProfileItem, setOpenProfileItem] = useState(false)

    return (
        <header id='header' className='bg-light'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <Link className="navbar-brand" href="/">
                            <Image src={logo} alt="Logo" className='img-fluid' id="logo" />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/AboutUs">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/SmartGuid">Smart Guide</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Renter</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Host</a>
                                </li>
                            </ul>
                        </div>
                        <div className='d-flex gap-1 position-relative'>
                            <button className='btn shadow-none' onClick={() => { setOpenMenuItem(!openMenuItem); openProfileItem && setOpenProfileItem(!openProfileItem) }}>
                                {
                                    openMenuItem ? <Image src={MenuIconOpen} alt="Menu Icon Open" /> : <Image src={MenuIcon} alt="Menu Icon" />
                                }
                            </button>
                            {
                                openMenuItem === true && <div id='more-menu-item' className='toggle-menu'>
                                    <div className='mb-3'>
                                        <Link href="/WelcomeOnboard" className='d-flex align-items-center w-100 gap-2'>
                                            <Image src={ShuttleIcon} alt="Shuttle Icon" />
                                            <span>Get Started</span>
                                        </Link>
                                    </div>
                                    <div className='mb-3'>
                                        <Link href="/FAQ" className='d-flex align-items-center w-100 gap-2'>
                                            <Image src={BagIcon} alt="Bag Icon" />
                                            <span>FAQ</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/Careers" className='d-flex align-items-center w-100 gap-2'>
                                            <Image src={HelpIcon} alt="Help Icon" />
                                            <span>Careers</span>
                                        </Link>
                                    </div>
                                    <div className="mobileMenuItem">
                                        <div className='my-3'>
                                            <Link href="/AboutUs" className='d-flex align-items-center w-100 gap-2'>
                                                <span>About Us</span>
                                            </Link>
                                        </div>
                                        <div className='mb-3'>
                                            <Link href="/SmartGuid" className='d-flex align-items-center w-100 gap-2'>
                                                <span>Smart Guide</span>
                                            </Link>
                                        </div>
                                        <div className='mb-3'>
                                            <Link href="/" className='d-flex align-items-center w-100 gap-2'>
                                                <span>Renter</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/" className='d-flex align-items-center w-100 gap-2'>
                                                <span>Host</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            }
                            <button className='btn shadow-none' onClick={() => { setOpenProfileItem(!openProfileItem); openMenuItem && setOpenMenuItem(!openMenuItem) }}>
                                {
                                    openProfileItem ? <Image src={User} alt="User Icon" style={{ color: "red" }} /> : <Image src={User} alt="User Icon" />
                                }
                            </button>
                            {
                                openProfileItem && <div id='profile-item' className='toggle-menu'>
                                    <div className='mb-3'>
                                        <Link href="/Login" className='d-flex align-items-center w-100 gap-2'>
                                            <span>Sign In</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/Login" className='d-flex align-items-center w-100 gap-2'>
                                            <span>Sign Up</span>
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header