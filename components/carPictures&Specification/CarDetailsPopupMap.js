import styles from "../../styles/dashboard/carPictures&Specification/CarDetailsPopupMap.module.css"

const CarDetailsPopupMap = () => {
    return (
        <div className={styles.container}>
            <iframe src="https://maps.google.com" frameborder="0" className={styles.map}></iframe>
        </div>
    )
}

export default CarDetailsPopupMap