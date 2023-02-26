import styles from "../../styles/dashboard/payment/EarningTable.module.css"
import { fullYear, monthNames } from "../../pages/dashboard/Payment"

const EarningTable = ({ title, setEarningMonth, paymentName }) => {
    return (
        <div className={styles.container}>
            {
                title && <h2>{title}</h2>
            }
            <div>
                <span>Date</span>
                <span>{paymentName ? paymentName : "Payment($)"}</span>
            </div>
            <div onClick={() => setEarningMonth && setEarningMonth(`${monthNames[2]} ${fullYear}`)}>
                <span>Mar 2022</span>
                <span>$4,052.95</span>
            </div>
            <div onClick={() => setEarningMonth && setEarningMonth(`${monthNames[3]} ${fullYear}`)}>
                <span>April 2022</span>
                <span>$2,400.00</span>
            </div>
            <div onClick={() => setEarningMonth && setEarningMonth(`${monthNames[4]} ${fullYear}`)}>
                <span>May 2022</span>
                <span>$-80.00</span>
            </div>
            <div onClick={() => setEarningMonth && setEarningMonth(`${monthNames[5]} ${fullYear}`)}>
                <span>June 2021</span>
                <span>$30.00</span>
            </div>
            <div className={styles.totalPrice}>
                <span>TOTAL</span>
                <span>$6,402.95</span>
            </div>
        </div>
    )
}

export default EarningTable