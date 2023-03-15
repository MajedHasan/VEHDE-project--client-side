import styles from "../../../styles/renter/Review/ProtectionBox.module.css"

import Protection1 from "../../../assets/img/Renter/Review/Protection1.png"
import Protection2 from "../../../assets/img/Renter/Review/Protection2.png"
import Image from "next/image"


const ProtectionBox = () => {
    return (
        <div className={styles.container}>
            <h2>Protection (Optional)</h2>
            <div>
                <div>
                    <button>10% Save</button>
                    <h4>Regular Insurance</h4>
                    <Image src={Protection1} alt="" />
                    <div className={styles.checkbox}>
                        <input type="checkbox" name="" id="" />
                        <span>$9.95/DAY</span>
                    </div>
                </div>
                <div>
                    <button>10% Save</button>
                    <h4>VEHSAVE</h4>
                    <Image src={Protection2} alt="" />
                    <div className={styles.checkbox}>
                        <input type="checkbox" name="" id="" />
                        <span>$9.95/DAY</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProtectionBox