import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import styles from "../../styles/dashboard/Profile.module.css"

import PaymentMethod from "../../assets/img/dashboard/Profile/PaymentMethod.png"
import RentalRates from "../../assets/img/dashboard/Profile/RentalRates.png"
import ContactIcon from "../../assets/img/dashboard/Profile/ContactIcon.png"
import Password from "../../assets/img/dashboard/Profile/Password.png"

import Link from 'next/link'
import Image from 'next/image'

const profile = () => {
    return (
        <DashboardLayout>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div>
                        <h2>My profile</h2>
                        <p>Please review and update your profile information where applicable.</p>
                    </div>
                    <div>
                        <div>
                            <Image src={PaymentMethod} alt='' />
                            <span>Payment method</span>
                        </div>
                        <Link href="">
                            <Image src={RentalRates} alt='' />
                            <span>Rental rates</span>
                        </Link>
                        <Link href="">
                            <Image src={ContactIcon} alt='' />
                            <span>Contact information</span>
                        </Link>
                        <Link href="">
                            <Image src={Password} alt='' />
                            <span>Change password</span>
                        </Link>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default profile