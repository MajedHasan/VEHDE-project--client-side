import Image from "next/image"
import { useState } from "react"
import ModalLg from "../../components/common/ModalLg"
import DashboardLayout from "../../components/layout/DashboardLayout"
import Reservation from "../../components/Rental/Reservation"
import styles from "../../styles/dashboard/Rental/MyRental.module.css"


const MyRenter = () => {

    const [reservationModal, setReservationModal] = useState(null)

    return (
        <>
            <DashboardLayout>
                <div className={styles.container}>
                    <h2>My Rental with VEHDE</h2>
                    <p>From here. To your destination.</p>
                    <p>Let’s make it a wonderful journey.</p>
                    <div>
                        <div onClick={() => setReservationModal({})}>
                            <Image src={require("../../assets/img/dashboard/MyRenter/Reservation.png")} alt="" />
                            <h4>Reservation</h4>
                        </div>
                        <div>
                            <Image src={require("../../assets/img/dashboard/MyRenter/Discount.png")} alt="" />
                            <h4>Discount</h4>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
            {
                reservationModal !== null && <ModalLg setModal={setReservationModal}>
                    <Reservation />
                </ModalLg>
            }
        </>
    )
}

export default MyRenter