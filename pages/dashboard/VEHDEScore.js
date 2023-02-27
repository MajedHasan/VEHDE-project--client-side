import DashboardLayout from "../../components/layout/DashboardLayout"
import DashboardBanner from "../../components/common/DashboardBanner"
import DashboardBannerLeftContent from "../../components/common/DashboardBannerLeftContent"
import DashboardBannerRightContent from "../../components/common/DashboardBannerRightContent"

import ModalLg from "../../components/common/ModalLg"
import ModalMd from "../../components/common/ModalMd"

import styles from "../../styles/dashboard/VEHDEScore.module.css"
import { useState } from "react"
import EarningTable from "../../components/payment/EarningTable"
import EarningDetailTable from "../../components/payment/EarningDetailTable"
import { fullYear, monthNames } from "./Payment"


const VEHDEScore = () => {

    const [viewScore, setViewScore] = useState(null)
    const [cashOut, setCashOut] = useState(null)
    const [earningMonth, setEarningMonth] = useState(`${monthNames[new Date().getMonth()]} ${fullYear}`)

    const scoreHeading = ["Date", "Score Claimed", "Category", "$ Equivalent", "Score Balance"]
    const scoreData = [
        ["Mar 30, 2022", "100", "Cash Out", "$100.00", "60"],
        ["Mar 22, 2022", "75", "Cash Out", "$75.00", "160"],
        ["Mar 18, 2022", "85", "Rental", "$85.00", "235"],
    ]
    const [totalScore, setTotalScore] = useState(100)

    return (
        <>
            <DashboardLayout>
                <div className={styles.container}>
                    <DashboardBanner leftContent={<DashboardBannerLeftContent page="VEHDEScore" setViewScore={setViewScore} setCashOut={setCashOut} />} rightContent={<DashboardBannerRightContent page="VEHDEScore" />} />
                </div>
            </DashboardLayout>
            {
                cashOut && <ModalMd setModal={setCashOut}>
                    {
                        totalScore && <>
                        </>
                    }
                    {
                        !totalScore && <>
                        </>
                    }
                </ModalMd>
            }
            {
                viewScore && <ModalLg setModal={setViewScore}>
                    <div className={styles.viewScoreModalHeading}>
                        <h2>VEHDE Score | History</h2>
                        <div>
                            <h4>VEHDE Score Balance</h4>
                            <span>100</span>
                        </div>
                    </div>
                    <div className={styles.rentalsBoxWrapper}>
                        <EarningTable title="VEHDEScore History" paymentName="Score Claimed" score={true} setEarningMonth={setEarningMonth} />
                        <EarningDetailTable title={`My VEHDEScore Earning | ${earningMonth}`} heading={scoreHeading} data={scoreData} score={true} />
                    </div>
                </ModalLg>
            }
        </>
    )
}

export default VEHDEScore