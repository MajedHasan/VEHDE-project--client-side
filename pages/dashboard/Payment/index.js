import React, { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

import OverviewIcon from "../../../assets/img/dashboard/Payment/Overview.png"
import RentalsIcon from "../../../assets/img/dashboard/MyHost/Rentals.png"
import VEHDEScoreIcon from "../../../assets/img/dashboard/Payment/VEHDEScore.png"
import ViewMyPaymentIcon from "../../../assets/img/dashboard/Payment/ViewMyPayment.png"
import Link from 'next/link'
import Image from 'next/image'

import styles from "../../../styles/dashboard/Payment.module.css"
import EarningTable from '../../../components/payment/EarningTable'
import EarningDetailTable from '../../../components/payment/EarningDetailTable'
import CarImg from "../../../assets/img/dashboard/MyHost/Rental/car.png"



export const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export const fullYear = new Date().getFullYear()

const Payment = () => {

    const [activeBox, setActiveBox] = useState("overview")
    const [earningMonth, setEarningMonth] = useState(`${monthNames[new Date().getMonth()]} ${fullYear}`)
    const [userRole, serUserRole] = useState("renter")

    return (
        <DashboardLayout>
            {
                userRole === "host" && <div className={styles.wrapper}>
                    <div>
                        <div className={activeBox === "overview" && styles.activeBox} onClick={() => setActiveBox("overview")}>
                            <Image src={OverviewIcon} alt='' />
                            <span>Overview</span>
                        </div>
                        <div onClick={() => setActiveBox("rentals")} className={activeBox === "rentals" && styles.activeBox}>
                            <Image src={RentalsIcon} alt='' />
                            <span>Rentals</span>
                        </div>
                        <div className={activeBox === "vehde score" && styles.activeBox} onClick={() => setActiveBox("vehde score")}>
                            <Image src={VEHDEScoreIcon} alt='' />
                            <span>VEHDE Score</span>
                        </div>
                        <Link href="/dashboard/Payment/PaymentMethod" className={activeBox === "payment method" && styles.activeBox} onClick={() => setActiveBox("payment method")}>
                            <Image src={ViewMyPaymentIcon} alt='' />
                            <span>View My Payment Method</span>
                        </Link>
                    </div>
                    {
                        activeBox === "overview" && <div className={styles.overviewBoxWrapper}>
                            <EarningTable title="Earning Overview" />
                        </div>
                    }
                    {
                        activeBox === "rentals" && <div className={styles.rentalsBoxWrapper}>
                            <EarningTable title="Rental Earning" setEarningMonth={setEarningMonth} />
                            <EarningDetailTable title={`My Rental Earning | ${earningMonth}`} />
                        </div>
                    }
                    {
                        activeBox === "vehde score" && <div className={styles.rentalsBoxWrapper}>
                            <EarningTable title="VEHDEScore Earning" setEarningMonth={setEarningMonth} />
                            <EarningDetailTable title={`My VEHDEScore Earning | ${earningMonth}`} />
                        </div>
                    }
                </div>
            }
            {
                userRole === "renter" && <>
                    <div className={styles.renterContainer}>
                        <div className={styles.renterBanner}>
                            <h2>Payment</h2>
                            <p><span>ATTENTION:</span> You currently have one or more outstanding payments to make at this moment.</p>
                            <p>Please click “Pay Fees” below to pay any outstanding fees applicable to any of your scheduled
                                reservations, or “Add- On to pay for additional services like Protection (auto insurance) and
                                VEHSAVE.”?</p>
                            <div>
                                <button className='my-btn'>Pay Fees</button>
                                <button>Add-On</button>
                            </div>
                        </div>
                        <div className={styles.tableContainer}>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Car</th>
                                        <th>RSRVE Code <i className='fa fa-chevron-down'></i></th>
                                        <th>Scheduled Costs</th>
                                        <th>Payment Status</th>
                                        <th>Required Action <i className='fa fa-chevron-down'></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h5>Toyota Venza LE 2022</h5>
                                            <span>See details</span>
                                        </td>
                                        <td>
                                            <Link href="">ATX-001-3099</Link>
                                        </td>
                                        <td>
                                            <Link href="">$3,285.52</Link>
                                        </td>
                                        <td>Pending</td>
                                        <td>
                                            <button className={styles.tableSuccessBtn}>YES: Rental Deposit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h5>Toyota Venza LE 2022</h5>
                                            <span>See details</span>
                                        </td>
                                        <td>
                                            <Link href="">ATX-001-3099</Link>
                                        </td>
                                        <td>
                                            <Link href="">$3,285.52</Link>
                                        </td>
                                        <td>Part-paid</td>
                                        <td>
                                            <button className={styles.tableSuccessBtn}>YES: Rental Fees</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h5>Toyota Venza LE 2022</h5>
                                            <span>See details</span>
                                        </td>
                                        <td>
                                            <Link href="">ATX-001-3099</Link>
                                        </td>
                                        <td>
                                            <Link href="">$3,285.52</Link>
                                        </td>
                                        <td>Paid</td>
                                        <td>
                                            <button>none</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button className="my-btn w-100">View My Fees and Payment Schedules</button>
                        </div>
                    </div>
                </>
            }
        </DashboardLayout>
    )
}

export default Payment