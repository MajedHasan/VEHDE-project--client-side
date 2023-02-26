import React, { useEffect, useState } from 'react'
import DashboardBanner from '../../components/common/DashboardBanner'
import DashboardLayout from '../../components/layout/DashboardLayout'
import DashboardBannerRightContent from "../../components/common/DashboardBannerRightContent"
import DashboardBannerLeftContent from '../../components/common/DashboardBannerLeftContent'

import styles from "../../styles/dashboard/VEHDEPass.module.css"

import ModalMd from "../../components/common/ModalMd"
import ActivateImg from "../../assets/img/dashboard/VEHDEPass/Activate.png"
import DeactivateImg from "../../assets/img/dashboard/VEHDEPass/Deactivate.png"
import Image from 'next/image'



const VEHDEPass = () => {

    const [screen, setScreen] = useState(null)
    const [membershipActive, setMembershipActive] = useState(false)
    const [modalMd, setModalMd] = useState(null)

    useEffect(() => {
        setModalMd({})
    }, [membershipActive])

    useEffect(() => {
        setModalMd(null)
    }, [])


    const handleConfirmBtn = () => {
        if (membershipActive) {
            setScreen("activated")
        }
        else {
            setScreen("deactivated")
        }
        setModalMd(null)
        setTimeout(() => {
            setScreen(null)
        }, 2000);
    }


    return (
        <>
            <DashboardLayout>
                <div className={styles.container}>
                    {
                        screen === null && <>
                            <DashboardBanner leftContent={<DashboardBannerLeftContent page="VEHDEPass" />} rightContent={<DashboardBannerRightContent page="VEHDEPass" />}></DashboardBanner>
                            <div className={styles.mainContent}>
                                <div>
                                    <h1>My host with VEHDE</h1>
                                    <p>Your VEHDEPass membership is currently inactive.
                                        Please activate your VEHDEPass by switching the toggle below.</p>
                                    <h4>I am currently NOT a VEHDEPass member</h4>
                                    <input type="checkbox" id="membership" hidden checked={membershipActive} onChange={(e) => setMembershipActive(!membershipActive)} />
                                    <label htmlFor="membership">
                                        <span>On</span>
                                        <span>Off</span>
                                    </label>
                                </div>
                                {
                                    membershipActive && <div className={styles.flashScreen}>
                                        <h2>Great news!</h2>
                                        <p>Your VEHDEPass membership is currently active.</p>
                                    </div>
                                }
                            </div>
                        </>
                    }
                    {
                        screen === "activated" && <>
                            <div className={styles.flashScreen}>
                                <Image src={ActivateImg} alt="" />
                                <h2>Great news!</h2>
                                <p>Your VEHDEPass membership has been successfully activated. Renters with VEHDEPass subscription are now eligible for <span>4.65%</span> rental discount on your listed cars.</p>
                            </div>
                        </>
                    }
                    {
                        screen === "deactivated" && <>
                            <div className={styles.flashScreen}>
                                <Image src={DeactivateImg} alt="" />
                                <h2>Deactivated</h2>
                                <p>Your VEHDEPass membership has been</p>
                            </div>
                        </>
                    }
                </div>
            </DashboardLayout>
            {
                modalMd && <ModalMd setModal={setModalMd}>
                    <div className={styles.modalContainer}>
                        <h2>{membershipActive ? "Activate " : "Deactivate"} | VEHDEPass</h2>
                        <p>
                            {
                                membershipActive ? "Thank you for your interest in VEHDEPass membership. Please enter the authorization code sent to your mobile phone number to confirm your VEHDEPass activation." : "Please enter the authorization code sent to your mobile phone number to confirm your VEHDEPass deactivation."
                            }
                        </p>
                        <div className={styles.formWrapper}>
                            <h1>VEHDE</h1>
                            <p>An authorization code was sent to
                                your mobile phone number</p>
                            <h4>XXX-XXX-1984</h4>
                            <div>
                                <div>
                                    <label htmlFor="">Please enter the authorization code below</label>
                                    <input type="text" placeholder='Enter your code' />
                                </div>
                                <button className="my-btn w-100" onClick={handleConfirmBtn}>Confirm</button>
                            </div>
                            <button>Request another authorization code</button>
                        </div>
                    </div>
                </ModalMd>
            }
        </>
    )
}

export default VEHDEPass