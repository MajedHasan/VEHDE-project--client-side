import styles from "../../styles/dashboard/DashboardBannerLeftContent.module.css"

const DashboardBannerLeftContent = ({ page }) => {
    return (
        <div className={styles.container}>
            {
                page === "VEHDEPass" && <>
                    <h2>VEHDEPass</h2>
                    <p>VEHDEPass reduces rental’s costs by <span>4.65%</span> for any car listed by hosts participating in VEHDEPass advantage. Thus, VEHDEPass creates additional incentive for renters to reserve your listed car. Renters must also be a VEHDEPass member to be eligible for the <span>4.65%</span> rental discount.</p>
                    <p>VEHDEPass subscription is free for host and can be cancelled any time. </p>
                    <p>Please check <span>VEHDEPass</span> for more information.</p>
                </>
            }
            {
                page === "payment" && <>
                    <h2>Payment Method</h2>
                    <p>Active payment method is the one approved by VEHDE and you are currently using to make or receive payments. To change your active payment method, please select another approved method, and switch its status to Active. Please allow up to 24hrs for VEHDE to confirm your change of preferred payment method.</p>
                    <button className={styles.button}>Add New Payment Method</button>
                </>
            }
            {
                page === "availability" && <>
                    <h2>Host | Time Availability</h2>
                    <p>Please review your time availability to host. You can add up to 3 times for each listed car. You are free to turn on or off your availability at any time. This information enables you to receive renter’s reservations for your car.</p>
                    <p>Please <span>download VEHDE host app</span> for real-time interactions
                        with VEHDE and renters.</p>
                    <button className={styles.button}>Download host app</button>
                </>
            }
        </div>
    )
}

export default DashboardBannerLeftContent