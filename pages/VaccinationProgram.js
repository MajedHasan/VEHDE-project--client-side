import Head from 'next/head'
import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import styles from "../styles/VaccinationProgram.module.css"

import RightArrow from "../assets/img/home-page/section-03-arrow-icon.png"
import Section02Img01 from "../assets/img/vaccination-program-page/section-02-img-01.png"
import Section02Img02 from "../assets/img/vaccination-program-page/section-02-img-02.png"
import Section03MapImg from "../assets/img/vaccination-program-page/section-03-map-img.png"
import Image from 'next/image'
import Link from 'next/link'

const VaccinationProgram = () => {
    return (
        <>
            <Head>
                <title>VEHDE - U.S COVID-19 vaccination program</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <section id={styles.heroSection}>
                    <div className="container">
                        <div className="wrapper">
                            <div className="row align-items-center">
                                <div className="col-lg-5 mb-lg-0 mb-5">
                                    <h1>U.S. COVID-19 vaccination program</h1>
                                    <p>The Centers for Disease Control and Prevention (CDC) is the national public health agency of the United States. The agency's main goal is the protection of public health and safety through the control and prevention of disease, injury, and disability in the US and worldwide.
                                    </p>
                                </div>
                                <div className="col-lg-7 text-center">
                                    {/* <Image src={HeroSectionImg} alt="Patent Vaccination Program Image" className='img-fluid' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section02}>
                    <div className="container">
                        <div className="wrapper">
                            <h2 className="text-center">Key things to know about COVID-19 vaccines </h2>
                            <p>
                                People who are fully vaccinated can resume many activities they did before the pandemic. However, people should wear a mask indoors in public if they are in an area of substantial or high transmission.
                            </p>
                            <div className='d-flex justify-content-center gap-3 align-items-center'>
                                <Link href="#">Learn more about COVID-19 vaccines</Link> <Image src={RightArrow} alt="Right Arrow" />
                            </div>
                            <div className="row row-cols-lg-2 row-cols-1 mt-5 align-items-center">
                                <div className="col text-lg-start text-center">
                                    <Image src={Section02Img01} className='img-fluid' />
                                </div>
                                <div className="col">
                                    <div className="mb-4">
                                        <h3>Frequently asked questions about COVID-19 vaccination</h3>
                                        <p>How can I get a new COVID-19 vaccination card? If you need a new vaccination card, contact the vaccination provider site where you received your vaccine. Your provider should give you a new card with up-to-date information about the vaccinations you have received.</p>
                                        <div className="d-flex align-items-center">
                                            <Link href="#" className='me-3'>Find answers to other questions about COVID-19 vaccinations</Link> <Image src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-lg-2 row-cols-1 align-items-center">
                                <div className="col order-lg-1 order-2">
                                    <div className='mb-4'>
                                        <h3>U.S. COVID-19 vaccine product information</h3>
                                        <p>Find a suite of information and materials that are needed for each specific COVID-19 vaccine that cover administration, storage and handling, safety, and reporting.</p>
                                        <div className="d-flex align-items-center">
                                            <Link href="#" className='me-3'>Learn more about U.S. COVID-19 vaccine product information</Link> <Image src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3>COVID-19 vaccine booster shots</h3>
                                        <p>You may choose which COVID-19 vaccine you receive as a booster shot. Some people may prefer the vaccine type that they originally received, and others may prefer to get a different booster. CDC’s recommendations now allow for this type of mix and match dosing for booster shots.</p>
                                        <div className="d-flex align-items-center">
                                            <Link href="#" className='me-3'>Learn more about guidance for wearing mask</Link> <Image src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-lg-end text-center order-lg-2 order-1">
                                    <Image src={Section02Img02} className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section03}>
                    <div className="container">
                        <div className="wrapper">
                            <div className="text-center">
                                <h2>Please select from below for specific information regarding vaccination program in each state</h2>
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                    <Link href="#">Learn about COVID-19 vaccination in Georgia</Link><Image src={RightArrow} alt='Right Arrow' />
                                </div>
                                <h3> <span>State of</span> Georgia</h3>
                            </div>
                            <div className='text-center'>
                                <Image src={Section03MapImg} alt="Map Img" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export default VaccinationProgram