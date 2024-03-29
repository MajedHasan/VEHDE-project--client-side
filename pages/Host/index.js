import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import MainLayout from "../../components/layout/MainLayout"


import styles from "../../styles/host/Home.module.css"


import Section03Img01 from "../../assets/img/Host/section-03-img-01.png"
import Section03Img02 from "../../assets/img/Host/section-03-img-02.png"
import Section03Img03 from "../../assets/img/Host/section-03-img-03.png"
import Section08Img01 from "../../assets/img/home-page/section-08-img-01.png"
import Section08Img02 from "../../assets/img/home-page/section-08-img-02.png"
import Section08Img03 from "../../assets/img/home-page/section-08-img-03.png"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react"


const index = () => {

    const [isIndividual, setIsIndividual] = useState(true)
    const [modal, setModal] = useState(null)
    const [availability, setAvailability] = useState(1)
    const [startDate1, setStartDate1] = useState(new Date())
    const [endDate1, setEndDate1] = useState(new Date())
    const [startDate2, setStartDate2] = useState(new Date())
    const [endDate2, setEndDate2] = useState(new Date())
    const [startDate3, setStartDate3] = useState(new Date())
    const [endDate3, setEndDate3] = useState(new Date())

    return (
        <>
            <Head>
                <title>VEHDE - Host</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <section id={styles.heroSection} className='heroSection'>
                    <div className="py-5">
                        <div className='container'>
                            <div className='row row-cols-lg-2 gap-5'>
                                <div>
                                    <h1>As an individual or a rental company,</h1>
                                    <p>you can list your car for rent with VEHDE, gaining access to our rapidly growing range of customers across the United States.</p>
                                    <h4>Stay ahead!</h4>
                                    <h4>List your car today, as a host.</h4>
                                    <Link href={`/Host#signup`} className='my-btn' id="signup" style={{ width: "fit-content" }}>Apply to host</Link>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section02}>
                    <div className="container">
                        <div>
                            <h2 className="text-center">Signing up to host</h2>
                            <h3 className="text-center">Let’s get started</h3>
                            <form className={styles.formWrapper}>
                                <div className="row row-cols-2 align-items-center">
                                    <label htmlFor="individual" className={`${isIndividual ? styles.activeLeftTab : `${styles.inactiveTab} ${styles.inactiveLeftTab}`}`} onClick={() => setIsIndividual(true)}>
                                        <span style={{ position: "relative", zIndex: 999 }}>Individual</span>
                                    </label>
                                    <input type="radio" name="hostType" id="individual" value="individual" hidden />
                                    <label htmlFor="renderCompany" className={`${isIndividual ? `${styles.inactiveTab} ${styles.inactiveRightTab}` : styles.activeRightTab}`} onClick={() => setIsIndividual(false)}>
                                        <span style={{ position: "relative", zIndex: 999 }}>Rental company</span>
                                    </label>
                                    <input type="radio" name="hostType" id="renderCompany" value="render company" hidden />
                                </div>
                                <div className={isIndividual ? styles.activeIndividual : styles.activeRentalCompany}>
                                    {
                                        isIndividual ? <>
                                            <div className="row row-cols-1 row-cols-md-2 p-2 mt-4" style={{ position: "relative", zIndex: "999" }}>
                                                <div className="pe-md-2 mb-3 mb-md-0">
                                                    <div className={`d-flex flex-column ${styles.inputGroup}`}>
                                                        <label htmlFor="">First name</label>
                                                        <input type="text" placeholder="Enter your first name" className="" />
                                                    </div>
                                                </div>
                                                <div className="pe-ms-2">
                                                    <div className={`d-flex flex-column ${styles.inputGroup}`}>
                                                        <label htmlFor="">Last name</label>
                                                        <input type="text" placeholder="Enter your last name" className="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <>
                                            <div className="row row-cols-1 row-cols-md-2 p-2 mt-4" style={{ position: "relative", zIndex: "999" }}>
                                                <div className="pe-md-2  mb-3 mb-md-0">
                                                    <div className={`d-flex flex-column ${styles.inputGroup}`}>
                                                        <label htmlFor="">Registered name</label>
                                                        <input type="text" placeholder="Enter your registered name" className="" />
                                                    </div>
                                                </div>
                                                <div className="pe-ms-2">
                                                    <div className={`d-flex flex-column ${styles.inputGroup}`}>
                                                        <label htmlFor="">License number</label>
                                                        <input type="text" placeholder="Enter your license number" className="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-2 p-2" style={{ position: "relative", zIndex: "999" }}>
                                                <div className="pe-md-2  mb-3 mb-md-0">
                                                    <div className={`d-flex flex-column ${styles.inputGroup}`}>
                                                        <label htmlFor="">Representative</label>
                                                        <input type="text" placeholder="Enter your first name" className="" />
                                                    </div>
                                                </div>
                                                <div className="pe-ms-2">
                                                    <div className={`d-flex flex-column ${styles.inputGroup}`}>
                                                        <label htmlFor="">Representative</label>
                                                        <input type="text" placeholder="Enter your last name" className="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    <div className="row row-cols-1 row-cols-md-1 p-2" style={{ position: "relative", zIndex: "999" }}>
                                        <div>
                                            <div className={`d-flex flex-column ${styles.inputGroup}`}>
                                                <label htmlFor="">Email</label>
                                                <input type="text" placeholder="Enter your email address" className="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-2 p-2">
                                        <div className="pe-md-2 mb-3 mb-md-0">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`}>
                                                <label htmlFor="">Phone</label>
                                                <input type="text" placeholder="Enter your mobile phone number " className="" />
                                            </div>
                                        </div>
                                        <div className="pe-md-2">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`}>
                                                <label htmlFor="">Password</label>
                                                <input type="text" placeholder="Enter your password" className="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-2 p-2">
                                        <div className="pe-md-2">
                                            <div className="row row-cols-1 row-cols-md-2">
                                                <div className="pe-md-2">
                                                    <button type="button" style={{ background: "#232636", color: "#FFFFFF", padding: "12px 5px", borderRadius: "25px", border: "none", width: "100%" }} className="mb-2 mb-md-0" onClick={() => setModal("Driver's license")}>
                                                        Driver’s license
                                                    </button>
                                                </div>
                                                <div className="ps-md-2">
                                                    <button type="button" style={{ background: "#FFFFFF", color: "#030719", padding: "12px 5px", borderRadius: "25px", border: "none", width: "100%" }} onClick={() => setModal("Availability")}>
                                                        Availability
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-md-2">
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center p-2 mt-1 mb-2">
                                        <input type="checkbox" name="" id="" className="me-3 ms-4" />
                                        <p style={{ color: "#898989" }} className="mb-0">I agree to VEHDE’s <span style={{ color: "#DE4F4D" }}>Terms of Use</span> and acknowledge that I have read the <span style={{ color: "#DE4F4D" }}>Privacy Notice.</span></p>
                                    </div>
                                    <div className="p-2">
                                        <button className="my-btn" style={{ width: "100%" }}>Next</button>
                                    </div>
                                    <div className="p-2 mt-1 mb-2 text-center">
                                        <p className="mb-0" style={{ color: "#898989" }}>Already have an account with VEHDE <Link href="/Login" style={{ color: "#DE4F4D" }}>Sign in</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section id={styles.section03}>
                    <div className="container">
                        <h2 className="text-center">Host’s benefits with VEHDE</h2>
                        <div className="row row-cols-1 row-cols-md-2 align-items-center mb-md-0 mb-4">
                            <div className="text-center">
                                <Image src={Section03Img01} className="img-fluid" />
                            </div>
                            <div>
                                <h3>Free car listing</h3>
                                <p>It is incredibly free to list your vehicle to rent with VEHDE. With our rapidly growing customers across the United States, you have increased accessibility to potential renters.</p>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 align-items-center  mb-md-0 mb-4">
                            <div className="order-md-1 order-2">
                                <h3>Flexible schedules</h3>
                                <p>All registered hosts enjoy the flexibility
                                    to set their time availability.</p>
                            </div>
                            <div className="text-center order-md-2 order-1">
                                <Image src={Section03Img02} className="img-fluid" />
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 align-items-center">
                            <div className="text-center">
                                <Image src={Section03Img03} className="img-fluid" />
                            </div>
                            <div>
                                <h3>Extra earnings with VEHDE score</h3>
                                <p>The more you host, the higher your VEHDE Score. Your VEHDE Score can easily be converted to additional payments, rental, or VEHDE gift cards.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section08}>
                    <div className="container">
                        <div className="wrapper">
                            <h2 className='text-center'>Mask and Safety</h2>
                            <div className="row row-cols-lg-3 row-cols-1 align-items-center">
                                <div className="col p-3">
                                    <div className="text-center d-flex flex-column align-items-center justify-content-between">
                                        <Image src={Section08Img01} alt="Car in hand" />
                                        <h3>Your safety, our no 1 priority.</h3>
                                        <p>We are fully committed to your safety, even as our innovative strategies help enhance your accessibility to mobility of greater value to your productivity.</p>
                                    </div>
                                </div>
                                <div className="col p-3">
                                    <div className="text-center d-flex flex-column align-items-center justify-content-between">
                                        <Image src={Section08Img02} alt="Car in hand" />
                                        <h3>Mask & Social Safety</h3>
                                        <p>With your support, when you observe safety procedures, every day, we protect our great asset –Health.</p>
                                        <Link href="MaskSocialSafety" className='d-block' style={{ paddingBottom: "15px" }}>Learn more about mask and social safety</Link>
                                    </div>
                                </div>
                                <div className="col p-3">
                                    <div className="text-center d-flex flex-column align-items-center justify-content-between">
                                        <Image src={Section08Img03} alt="Car in hand" />
                                        <h3>COVID-19 Vaccine</h3>
                                        <p>Let’s crunch the virus! Our commitment to vaccination moves us closer to full recovery in our various communities.</p>
                                        <Link href="VaccinationProgram">Learn more about vaccination program</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {modal &&
                    <div style={{ position: "fixed", top: "0px", left: "0px", width: "100%", minHeight: "100vh", height: "fit-content", background: "rgba(0, 0, 0, 0.5)", zIndex: "999999", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", overflow: "scroll", padding: "8px" }}>
                        <div style={{ position: "relative", maxWidth: "750px", width: "100%" }}>
                            <button style={{ background: "#DE4F4D", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", border: "5px solid rgba(0, 0, 0, 0.8)", boxSizing: "border-box", color: "white", position: "absolute", top: "-4px", right: "-6px", zIndex: "9999" }} onClick={() => setModal(null)}>
                                <i className="fa fa-times" style={{ fontSize: "25px" }}></i>
                            </button>
                        </div>
                        <div style={{ padding: "28px", background: "#FFFFFF", borderRadius: "20px", maxWidth: "750px", width: "100%", margin: "10px", maxHeight: "87vh", overflow: "scroll", position: "relative" }}>
                            {
                                modal === "Driver's license" &&
                                <div>
                                    <h2 className="text-center" style={{ fontWeight: "600" }}>Driver’s license:
                                        <label htmlFor="" style={{ color: "#DE4F4D", textDecoration: "underline", cursor: "pointer", fontWeight: "700" }}>upload DL</label>
                                        <br /> or enter info manually
                                    </h2>
                                    <p style={{ fontSize: "14px", textAlign: "center", color: "#717171", maxWidth: "450px", margin: "auto" }}>Renter sees your first name ONLY after the renter’s reservation for your car is confirmed; the rest remains private.</p>
                                    <div className="row row-cols-1 row-cols-md-2 p-2 mt-4">
                                        <div className="pe-md-2 mb-3 mb-md-0">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`} style={{ background: "#EFEFEF" }}>
                                                <label htmlFor="">First name</label>
                                                <input type="text" placeholder="Enter your first name" className="" />
                                            </div>
                                        </div>
                                        <div className="pe-md-2">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`} style={{ background: "#EFEFEF" }}>
                                                <label htmlFor="">Last name</label>
                                                <input type="text" placeholder="Enter your last name" className="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-2 p-2 mt-1">
                                        <div className="pe-md-2 mb-3 mb-md-0">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`} style={{ background: "#EFEFEF" }}>
                                                <label htmlFor="">Country</label>
                                                <input type="text" placeholder="United States of America &#128274;" className="" disabled />
                                            </div>
                                        </div>
                                        <div className="pe-md-2">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`} style={{ background: "#EFEFEF" }}>
                                                <label htmlFor="">State</label>
                                                <select name="" id="" className="bg-transparent" style={{ border: "none", outline: "none" }}>
                                                    <option value="">Add your state name</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 p-2 mt-1">
                                        <div className="mb-3 mb-md-0">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`} style={{ background: "#EFEFEF" }}>
                                                <label htmlFor="">License number</label>
                                                <input type="text" placeholder="Enter your license number" className="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3 p-2 mt-1">
                                        <div className="pe-md-2 mb-3 mb-md-0">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`} style={{ background: "#EFEFEF" }}>
                                                <label htmlFor="">Expiration date</label>
                                                <select name="" id="" className="bg-transparent" style={{ border: "none", outline: "none" }}>
                                                    <option value="">January</option>
                                                    <option value="">February</option>
                                                    <option value="">March</option>
                                                    <option value="">April</option>
                                                    <option value="">May</option>
                                                    <option value="">June</option>
                                                    <option value="">July</option>
                                                    <option value="">August</option>
                                                    <option value="">Septembor</option>
                                                    <option value="">Octobor</option>
                                                    <option value="">November</option>
                                                    <option value="">December</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="pe-md-2 mb-3 mb-md-0">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`} style={{ background: "#EFEFEF" }}>
                                                <label htmlFor="">Day</label>
                                                <select name="" id="" className="bg-transparent" style={{ border: "none", outline: "none" }}>
                                                    <option value="">01</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="pe-md-2 mb-3 mb-md-0">
                                            <div className={`d-flex flex-column ${styles.inputGroup}`} style={{ background: "#EFEFEF" }}>
                                                <label htmlFor="">Year</label>
                                                <select name="" id="" className="bg-transparent" style={{ border: "none", outline: "none" }}>
                                                    <option value="">2023</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 mt-1 d-flex align-items-center">
                                        <input type="checkbox" className="me-3 ms-4" />
                                        <span style={{ color: "#898989", fontSize: "12px" }}>I agree to VEHDE’s Terms of Use and acknowledge that I have read the Privacy Notice.</span>
                                    </div>
                                    <div className="mt-2">
                                        <button className="my-btn w-100">Save and continue</button>
                                    </div>
                                </div>
                            }
                            {
                                modal === "Availability" && <div className={styles.availabilityModal}>
                                    <h2>Please indicate up to 3 available times for your car. You will be able to turn on or off your availability at any time.</h2>
                                    <div>
                                        <span>Schedule</span>
                                        <span>Time availability</span>
                                        <span>Delete & Add</span>
                                    </div>
                                    <div>
                                        <div>
                                            <div>01</div>
                                            <div>
                                                <div>
                                                    <label htmlFor="">Start date</label>
                                                    <div>
                                                        <i className="fa fa-calendar-alt"></i>
                                                        <DatePicker
                                                            style={{ width: "75px" }}
                                                            selected={startDate1}
                                                            startDate={startDate1}
                                                            onChange={(date) => setStartDate1(date)}
                                                            // maxDate={endDate1}
                                                            timeInputLabel="Time:"
                                                            dateFormat="MM/dd/yyyy"
                                                        // showTimeInput
                                                        />
                                                        <select name="" id="">
                                                            <option value="">09.00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="">End date</label>
                                                    <div>
                                                        <i className="fa fa-calendar-alt"></i>
                                                        <DatePicker
                                                            style={{ width: "75px" }}
                                                            selected={endDate1}
                                                            startDate={endDate1}
                                                            onChange={(date) => setEndDate1(date)}
                                                            minDate={startDate1}
                                                            timeInputLabel="Time:"
                                                            dateFormat="MM/dd/yyyy"
                                                        // showTimeInput
                                                        />
                                                        <select name="" id="">
                                                            <option value="">09.00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    availability > 1 && <i className="fa fa-trash-alt" onClick={() => setAvailability(1)}></i>
                                                }
                                                {
                                                    availability === 1 && <i className="fa fa-plus" onClick={() => setAvailability(2)}></i>
                                                }
                                            </div>
                                        </div>
                                        {
                                            availability > 1 && <div>
                                                <div>02</div>
                                                <div>
                                                    <div>
                                                        <label htmlFor="">Start date</label>
                                                        <div>
                                                            <i className="fa fa-calendar-alt"></i>
                                                            <DatePicker
                                                                style={{ width: "75px" }}
                                                                selected={startDate2}
                                                                startDate={startDate2}
                                                                onChange={(date) => setStartDate2(date)}
                                                                // maxDate={endDate1}
                                                                timeInputLabel="Time:"
                                                                dateFormat="MM/dd/yyyy"
                                                            // showTimeInput
                                                            />
                                                            <select name="" id="">
                                                                <option value="">09.00 AM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="">End date</label>
                                                        <div>
                                                            <i className="fa fa-calendar-alt"></i>
                                                            <DatePicker
                                                                style={{ width: "75px" }}
                                                                selected={endDate2}
                                                                startDate={endDate2}
                                                                onChange={(date) => setEndDate2(date)}
                                                                minDate={startDate2}
                                                                timeInputLabel="Time:"
                                                                dateFormat="MM/dd/yyyy"
                                                            // showTimeInput
                                                            />
                                                            <select name="" id="">
                                                                <option value="">09.00 AM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    {
                                                        availability > 2 && <i className="fa fa-trash-alt" onClick={() => setAvailability(2)}></i>
                                                    }
                                                    {
                                                        availability === 2 && <i className="fa fa-plus" onClick={() => setAvailability(3)}></i>
                                                    }
                                                </div>
                                            </div>
                                        }
                                        {
                                            availability > 2 && <div>
                                                <div>03</div>
                                                <div>
                                                    <div>
                                                        <label htmlFor="">Start date</label>
                                                        <div>
                                                            <i className="fa fa-calendar-alt"></i>
                                                            <DatePicker
                                                                style={{ width: "75px" }}
                                                                selected={startDate3}
                                                                startDate={startDate3}
                                                                onChange={(date) => setStartDate3(date)}
                                                                // maxDate={endDate1}
                                                                timeInputLabel="Time:"
                                                                dateFormat="MM/dd/yyyy"
                                                            // showTimeInput
                                                            />
                                                            <select name="" id="">
                                                                <option value="">09.00 AM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="">End date</label>
                                                        <div>
                                                            <i className="fa fa-calendar-alt"></i>
                                                            <DatePicker
                                                                style={{ width: "75px" }}
                                                                selected={endDate3}
                                                                startDate={endDate3}
                                                                onChange={(date) => setEndDate3(date)}
                                                                minDate={startDate3}
                                                                timeInputLabel="Time:"
                                                                dateFormat="MM/dd/yyyy"
                                                            // showTimeInput
                                                            />
                                                            <select name="" id="">
                                                                <option value="">09.00 AM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <i className="fa fa-trash-alt" style={{ visibility: "hidden" }}></i>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="mt-4">
                                        <button className="w-100 my-btn mb-3">Save</button>
                                        <button className="w-100 my-btn" style={{ background: "#EFEFEF", color: "black", border: "2px solid transparent" }}>Cancel</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </MainLayout>
        </>
    )
}

export default index