import Head from 'next/head'
import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import styles from "../styles/Login.module.css"
import Link from 'next/link'

const Password = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form Submited")
    }

    return (
        <>
            <Head>
                <title>VEHDE - Password</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <section id={styles.mainSection}>
                    <div className="bg">
                        <div className="container">
                            <div className="formWrapper">
                                <h2 className="text-center">VEHDE</h2>
                                <div className="inputWrapper">
                                    <form action="" onSubmit={handleSubmit} className="mt-5 mb-4">
                                        <div className="inputBox">
                                            <label htmlFor="">VEHDE Password</label>
                                            <input type="text" placeholder='Enter your password' />
                                        </div>
                                        <button className='my-btn' type='button'>Next</button>
                                    </form>
                                    <div className="mt-3 text-center">
                                        <p>Text code to (***)-***-1984</p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Link href="/Authorization"><span>Forgotten password?</span></Link>
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

export default Password