import React from 'react'

import styles from "../../styles/dashboard/ModalLg.module.css"

const ModalLg = ({ children, setModal, title, subtitle }) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalBoxWrapper}>
                <button className={styles.modalCloseBtn} onClick={() => setModal(null)}>
                    <i className="fa fa-times" style={{ fontSize: "25px" }}></i>
                </button>
                <div >
                    {title && <h2 className={styles.heading}>{title}</h2>}
                    {subtitle && <p className={styles.subHeading}>{subtitle}</p>}
                    {
                        children
                    }
                </div>

            </div>
        </div>
    )
}

export default ModalLg