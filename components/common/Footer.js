import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../../assets/img/logo.png"
import FacebookDarkIcon from "../../assets/img/facebook-dark-icon.png"
import LinkedinDarkIcon from "../../assets/img/linkedin-dark-icon.png"
import InstagramDarkIcon from "../../assets/img/instagram-dark-icon.png"
import PinterestDarkIcon from "../../assets/img/pinterest-dark-icon.png"
import TwitterDarkIcon from "../../assets/img/twitter-dark-icon.png"
import YoutubeDarkIcon from "../../assets/img/youtube-dark-icon.png"
import PlayIcon from "../../assets/img/play-icon.png"

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='row '>
                    <div className='col-md-3 pe-md-5 first-col'>
                        <Image src={Logo} alt="Logo In Footer" style={{ width: "fit-content" }} />
                        <p className='my-4'>
                            VEHDE, a car sharing-rental company, established based on our extensive experience in the transportation industry.
                        </p>
                        <div className='d-flex gap-1 justify-content-between align-items-center'>
                            <a href='#'><Image src={FacebookDarkIcon} alt="Facebook Dark Icon" /></a>
                            <a href='#'><Image src={LinkedinDarkIcon} alt="Facebook Dark Icon" /></a>
                            <a href='#'><Image src={InstagramDarkIcon} alt="Facebook Dark Icon" /></a>
                            <a href='#'><Image src={PinterestDarkIcon} alt="Facebook Dark Icon" /></a>
                            <a href='#'><Image src={TwitterDarkIcon} alt="Facebook Dark Icon" /></a>
                            <a href='#'><Image src={YoutubeDarkIcon} alt="Facebook Dark Icon" /></a>
                        </div>
                    </div>
                    <div className='col-md-2 mt-md-0 mt-5'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/Careers">Careers</Link></li>
                            <li><Link href="/Safety">Safety</Link></li>
                            <li><Link href="/SmartGuid2">Smart Guide</Link></li>
                            <li><Link href="/WelcomeOnboard">Get Started</Link></li>
                            <li><Link href="/FAQ">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-2 mt-md-0 mt-5'>
                        <h3>Services</h3>
                        <ul>
                            <li><Link href="#">Renter</Link></li>
                            <li><Link href="#">Host</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-2 mt-md-0 mt-5'>
                        <h3>Other Links</h3>
                        <ul>
                            <li><Link href="#">Privacy</Link></li>
                            <li><Link href="#">Policies</Link></li>
                            <li><Link href="#">Help Center</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Accessibility Statement</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-3 mt-md-0 mt-5'>
                        <div className='video-box'>
                            <div className='play-icon'>
                                <Image src={PlayIcon} alt="Play Icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright text-center'>
                    <p className='mb-0'>&copy; {new Date().getFullYear()} VEHDE Technologies, LLC</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer