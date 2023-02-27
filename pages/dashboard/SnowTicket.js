import React, { useState } from 'react'
import DashboardBanner from '../../components/common/DashboardBanner'
import DashboardBannerLeftContent from '../../components/common/DashboardBannerLeftContent'
import DashboardBannerRightContent from '../../components/common/DashboardBannerRightContent'
import DashboardLayout from '../../components/layout/DashboardLayout'

import VEHDEScorestyles from "../../styles/dashboard/VEHDEScore.module.css"
import styles from "../../styles/dashboard/SnowTicket.module.css"

import ModalMd from "../../components/common/ModalMd"

const SnowTicket = () => {

    const [submitNewTicket, setSubmitNewTicket] = useState(null)
    const [modalScreen, setModalScreen] = useState(null)

    return (
        <>
            <DashboardLayout>
                <div className={VEHDEScorestyles.container}>
                    <DashboardBanner leftContent={<DashboardBannerLeftContent page="SnowTicket" setSubmitNewTicket={setSubmitNewTicket} />} rightContent={<DashboardBannerRightContent page="SnowTicket" />} />
                    <div className={styles.infoContainer}>
                        <div>
                            <div>
                                <h2>Overview</h2>
                                <div>
                                    <p>10/10</p>
                                </div>
                                <h3>Snow Tickets</h3>
                            </div>
                            <div >
                                <h2>Pending</h2>
                                <div onClick={() => setModalScreen("pending")}>
                                    <p>2/10</p>
                                </div>
                                <h3>Snow Tickets</h3>
                            </div>
                            <div >
                                <h2>Resolved</h2>
                                <div onClick={() => setModalScreen("resolved")}>
                                    <i class="fa-solid fa-check"></i>
                                    <p>8/10</p>
                                </div>
                                <h3>Snow Tickets</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
            {
                modalScreen && <ModalMd setModal={setModalScreen}>
                    <div className={styles.modalWrapper}>
                        {
                            modalScreen === "pending" && <>
                                <div>
                                    <h1>Pending | Snow Ticket</h1>
                                    <p>Please review your Snow Tickets and close any resolved ticket, edit, or reply VEHDE, where necessary</p>
                                </div>
                                <div className={styles.table}>
                                    <div>
                                        <span>Ticket No</span>
                                        <span>Issue</span>
                                        <span>Date created</span>
                                        <span>Status</span>
                                        <span>Review</span>
                                    </div>
                                    <div>
                                        <p>CA769245</p>
                                        <div>
                                            <p>I need access to my VEHDE account</p>
                                            <span onClick={() => setModalScreen("detail")}>Details here</span>
                                        </div>
                                        <p>1/14/22</p>
                                        <p>Assigned to Tier 1.1</p>
                                        <div>
                                            <p>Edit ticket</p>
                                            <p>Reply VEHDE</p>
                                            <p>Close ticket</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>CA769245</p>
                                        <div>
                                            <p>I need access to my VEHDE account</p>
                                            <span onClick={() => setModalScreen("detail")}>Details here</span>
                                        </div>
                                        <p>1/14/22</p>
                                        <p>Assigned to Tier 1.1</p>
                                        <div>
                                            <p>Edit ticket</p>
                                            <p>Reply VEHDE</p>
                                            <p>Close ticket</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            modalScreen === "resolved" && <>
                                <div>
                                    <h1>Resolved | Snow Ticket</h1>
                                    <p>You can view your Resolved Snow Tickets and let us know if you have questions or concerns.</p>
                                </div>
                                <div className={styles.table}>
                                    <div>
                                        <span>Ticket No</span>
                                        <span>Issue</span>
                                        <span>Date created</span>
                                        <span>Status</span>
                                        <span>Review</span>
                                    </div>
                                    <div>
                                        <p>CA769245</p>
                                        <div>
                                            <p>I need access to my VEHDE account</p>
                                            <span>Details here</span>
                                        </div>
                                        <p>1/14/22</p>
                                        <p>Assigned to Tier 1.1</p>
                                        <div>
                                            <i className="fa fa-lock"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <p>CA769245</p>
                                        <div>
                                            <p>I need access to my VEHDE account</p>
                                            <span>Details here</span>
                                        </div>
                                        <p>1/14/22</p>
                                        <p>Assigned to Tier 1.1</p>
                                        <div>
                                            <i className="fa fa-lock"></i>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    {
                        modalScreen === "detail" && <div className={styles.detail}>
                            <div>
                                <h2>Snow Ticket | CA769245</h2>
                                <h3>To: VEHDE</h3>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>JW</div>
                                        <div>
                                            <h6>Bill Baldwin</h6>
                                            <span>Aug 15, 2022, 2:45 PM</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Hello:</p>
                                        <p>I am experiencing delay in my payment for the past three days. Please help
                                            resolve it as soon as possible
                                        </p>
                                        <p>Thanks,
                                            <span>JW</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className={styles.activeVehde}>1.1</div>
                                        <div>
                                            <h6>Bill Baldwin</h6>
                                            <span>Aug 15, 2022, 2:45 PM</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Hello Jane,</p>
                                        <p>We are sorry about the delay in your payments. We are here to help you resolve this issue, please can you confirm your payment method and give us the details here?
                                        </p>
                                        <p>Thanks,
                                            <span style={{ color: "#DE4F4D" }}>VEHDE Customer Service</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <textarea name="" placeholder='Type reply here'></textarea>
                                <div>
                                    <button className="my-btn">Reply</button>
                                    <button>Thank you! Ticket resolved</button>
                                </div>
                            </div>
                        </div>
                    }
                </ModalMd>
            }
        </>
    )
}

export default SnowTicket