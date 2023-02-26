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


export const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export const fullYear = new Date().getFullYear()

const Payment = () => {

    const [activeBox, setActiveBox] = useState("overview")
    const [earningMonth, setEarningMonth] = useState(`${monthNames[new Date().getMonth()]} ${fullYear}`)

    return (
        <DashboardLayout>
            <div className={styles.wrapper}>
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
        </DashboardLayout>
    )
}

export default Payment