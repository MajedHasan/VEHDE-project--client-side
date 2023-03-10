import Head from 'next/head'
import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import styles from "../styles/AboutUs.module.css"
import Link from 'next/link'

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>VEHDE - About Us</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <section id={styles.heroSection} className="heroSection">
                    <div>
                        <div className="container">
                            <div className="wrapper">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 mb-lg-0 mb-5">
                                        <h1 style={{ fontWeight: "700" }}>About Us</h1>
                                        <p className='mb-4'>
                                            VEHDE, a car sharing-rental company, established based on our extensive experience in the transportation industry, aims to assist individuals and companies by escalating their accessibility to
                                            high-quality and cost-effective car rental services.
                                        </p>
                                        <p className='mt-2'>
                                            Unlike the increasingly expensive car’s liabilities that characterize existing model for car’s ownership, our innovative business strategies optimize renter’s return-on-investment in way more convenient arrangements. Whether it is for daily business activities, holiday leisure, or weekend trips, varieties of cars are available with flexibility to meet each renter’s needs at the desired time.
                                        </p>
                                        <div className='mb-5 mt-4'>
                                            <Link href="#">We are currently offering free 1-day rental service. TRY US TODAY!</Link>
                                        </div>
                                        <div className="d-flex flex-sm-row flex-column align-items-center gap-3">
                                            <button className='my-btn'>&nbsp; &nbsp; &nbsp; Renter &nbsp; &nbsp; &nbsp;</button>
                                            <button className='my-btn-outline'>&nbsp; &nbsp; &nbsp; Host &nbsp; &nbsp; &nbsp;</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 text-center">
                                        {/* <Image src={HeroSectionImg} alt="Patent Vaccination Program Image" className='img-fluid' /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export default AboutUs