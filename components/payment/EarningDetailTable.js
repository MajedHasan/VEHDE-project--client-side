import earningTableStyles from "../../styles/dashboard/payment/EarningTable.module.css"
import styles from "../../styles/dashboard/payment/EarningDetailTable.module.css"

const EarningDetailTable = ({ title, paymentName }) => {
    return (
        <div className={styles.container}>
            {
                title && <h2>{title}</h2>
            }
            <div>
                <span>Pay Date</span>
                <span>Car</span>
                <span>RSRVE Code</span>
                <span>Renter</span>
                <span>{paymentName ? paymentName : "Payment($)"}</span>
            </div>
            <div>
                <span>Mar 29, 2022</span>
                <span>2022 TY VENZA LE</span>
                <span>ATX-001-3088</span>
                <span>Emma @ TX 78703</span>
                <span>$4,052.95</span>
            </div>
            <div>
                <span>Mar 20, 2022</span>
                <span>2022 TY VENZA LE</span>
                <span>ATX-001-3088</span>
                <span>Emma @ TX 78703</span>
                <span>$4,052.95</span>
            </div>
            <div>
                <span>Mar 15, 2022</span>
                <span>2022 TY VENZA LE</span>
                <span>ATX-001-3088</span>
                <span>Emma @ TX 78703</span>
                <span>$4,052.95</span>
            </div>
            <div className={`${earningTableStyles.totalPrice} ${styles.totalPrice}`}>
                <span>TOTAL</span>
                <span>$6,402.95</span>
            </div>
        </div>
    )
}

export default EarningDetailTable