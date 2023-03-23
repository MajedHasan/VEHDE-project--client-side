import styles from "../../styles/dashboard/Rental/Reservation.module.css"

import CarImg from "../../assets/img/dashboard/MyHost/Rental/car.png"
import Image from "next/image"
import { useState } from "react"
import ModalMd from "../../components/common/ModalMd"
import ModalLg from "../common/ModalLg"
import CarDetailsPopupHeader from "../carPictures&Specification/CarDetailsPopupHeader"
import CarDetailsPopupPictures from "../carPictures&Specification/CarDetailsPopupPictures"
import CarDetailsPopupMap from "../carPictures&Specification/CarDetailsPopupMap"
import RentalDataPopupHeader from "./RentalDataPopupHeader"
import Link from "next/link"
import MainBox from "./Review/MainBox"


const Reservation = () => {

    const [showSingle, setShowSingle] = useState(null)
    const [showModalSm, setShowModalSm] = useState(null)
    const [showModalLg, setShowModalLg] = useState(null)
    const [modificationModal, setModificationModal] = useState(null)
    const [showCancellationModal, setShowCancellationModal] = useState(null)

    return (
        <>
            <div className={styles.container}>
                {
                    showSingle !== null && <span onClick={() => setShowSingle(null)}>
                        <i className="fa fa-arrow-left"></i>
                    </span>
                }
                <h2 className="text-center">Reservation</h2>
                <div className={styles.tableWrapper}>
                    <table className="table table-hover">
                        <thead>
                            <th></th>
                            <th>Car</th>
                            <th>Pick-up date/ Location</th>
                            <th>Return date/ Location</th>
                            <th>Host</th>
                            <th>Driver</th>
                            <th className={styles.statusTh}>
                                <div>
                                    <span>Status <i className="fa fa-chevron-down"></i></span>
                                </div>
                            </th>
                            <th>Rate</th>
                            <th>Schedules/ Payment</th>
                        </thead>
                        <tbody>
                            {
                                showSingle === null && <>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span onClick={() => setShowModalLg(1)}>See details</span>
                                                </h3>
                                                <p onClick={() => setModificationModal(1)}>RSRVE Code:
                                                    <a href="#">ATX-001-3099</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">4/19/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">5/14/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/A
                                        </td>
                                        <td>
                                            <div>
                                                <button className={styles.reservedBtn}>Reserved</button>
                                                <button className={styles.warningInfoBtnInTable}>
                                                    ATTENTION: Payment of rental deposit is required
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 rental days</h4>
                                                <button>
                                                    <span>*Total costs:</span>
                                                    <a href="">$2,493.75</a>
                                                </button>
                                                <span onClick={() => setShowSingle(1)}>Pay details</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span>See details</span>
                                                </h3>
                                                <p onClick={() => setModificationModal(2)}>RSRVE Code:
                                                    <a href="#">ATX-001-3092</a>
                                                </p>
                                            </div>
                                        </td>

                                        <td>
                                            <a href="">4/12/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">4/17/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/A
                                        </td>
                                        <td>
                                            <div>
                                                <button className={styles.activeBtn}>Active</button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>5 rental days</h4>
                                                <button>
                                                    <span>*Total costs:</span>
                                                    <a href="">$2,493.75</a>
                                                </button>
                                                <span onClick={() => setShowSingle(2)}>Pay details</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span>See details</span>
                                                </h3>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3088</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">3/15/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">4/10/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/a
                                        </td>
                                        <td>
                                            <div>
                                                <button className={styles.completedBtn}>Completed</button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 rental days</h4>
                                                <button>
                                                    <span>*Total costs:</span>
                                                    <a href="">$2,493.75</a>
                                                </button>
                                                <span onClick={() => setShowSingle(3)}>Pay details</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span>See details</span>
                                                </h3>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3092</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">4/12/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">4/17/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/A
                                        </td>
                                        <td>
                                            <div>
                                                <button className={styles.cancelledBtn}>Cancelled</button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 rental days</h4>
                                                <button>
                                                    <span>*Total costs:</span>
                                                    <a href="">$2,493.75</a>
                                                </button>
                                                <span onClick={() => setShowSingle(4)}>Pay details</span>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            }
                            {
                                showSingle !== null && <>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                            {
                                                showSingle === 2 && <div className={styles.cancelRentalBtn} onClick={() => setShowCancellationModal(true)}>
                                                    <span>Cancel rental</span>
                                                    <i className="fa fa-chevron-down"></i>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span>See details</span>
                                                </h3>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3099</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">4/19/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">5/14/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/A
                                        </td>
                                        <td>
                                            <div>
                                                {
                                                    showSingle === 1 && <button className={styles.reservedBtn}>Reserved</button>
                                                }
                                                {
                                                    showSingle === 2 && <button className={styles.activeBtn}>Active</button>
                                                }
                                                {
                                                    showSingle === 3 && <button className={styles.completedBtn}>Completed</button>
                                                }
                                                {
                                                    showSingle === 4 && <button className={styles.cancelledBtn}>Cancelled</button>
                                                }
                                                {
                                                    showSingle === 3 && <button className={styles.warningInfoBtnInTable}>
                                                        Renter confirmed drop-off. Waiting for host’s confirmation.
                                                    </button>
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>26 days of car rentals</h4>
                                                <button>
                                                    <span onClick={() => setShowModalSm(1)}>*Total costs:</span>
                                                    <a href="">$2,493.75</a>
                                                </button>
                                                <button>
                                                    <span>Payment made:</span>
                                                    <a href="">$0.00</a>
                                                </button>
                                                <button>
                                                    <span>Remaining costs:</span>
                                                    <a href="">$2,493.75</a>
                                                </button>
                                                <span>Cost details</span>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            }
                        </tbody>
                    </table>
                </div>
                {
                    showSingle === null && <div>
                        <Link href="/Renter/BrowseCars" className="my-btn">Reserve another car</Link>
                    </div>
                }
                {
                    showSingle !== null && <div className={styles.bottomInfo}>
                        <Link href="/Renter/BrowseCars" className="my-btn w-100">Reserve another car</Link>
                    </div>
                }
            </div>
            {
                modificationModal && <ModalMd setModal={setModificationModal}>
                    <div className={styles.modificationModal}>
                        <h2>RSRVE Code <span>ATX-001-3099</span></h2>
                        <p>This is a 25-day reservation for <span>Toyota Venza LE 2022</span></p>
                        <div>
                            <button className="my-btn">
                                {
                                    modificationModal === 1 && "Modify Reservation"
                                }
                                {
                                    modificationModal === 2 && "Modify Rental"
                                }
                            </button>
                            <button>
                                {
                                    modificationModal === 1 && "Cancel Reservation"
                                }
                                {
                                    modificationModal === 2 && "Cancel Rental"
                                }
                            </button>
                        </div>
                        <Link href="/Renter/BrowseCars">Reserve another car here</Link>
                    </div>
                </ModalMd>
            }
            {
                showModalSm && <>
                    <ModalMd setModal={setShowModalSm}>
                        <div className={styles.paymentScheduleModal}>
                            <h2>Payment schedule</h2>
                            <div>
                                <div>
                                    <span>Duration</span>
                                    <span>Scheduled</span>
                                    <span>Paid</span>
                                </div>
                                <table>
                                    <thead>
                                        <th>DD</th>
                                        <th>$</th>
                                        <th>MM/DD/YY</th>
                                        <th>$</th>
                                        <th>MM/DD/YY</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >11</td>
                                            <td >1,097.25</td>
                                            <td>5/14/2022</td>
                                            <td>------</td>
                                            <td>------</td>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td>1,396.50</td>
                                            <td>5/3/2022</td>
                                            <td>------</td>
                                            <td>------</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>For further details, please check the VEHDE Host <a href="">Payment Policy</a></p>
                        </div>
                    </ModalMd>
                </>
            }
            {
                showModalLg && <>
                    <ModalLg setModal={setShowModalLg}>
                        <RentalDataPopupHeader hideHighlight={true} />
                        <MainBox hideEstCost={true} hideList={true} hidePrice={true} hideageResidency={true} />
                        <div className={styles.rentalDataList}>
                            <div>
                                <h3>Highlighted Features</h3>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>Hybrid powertrain with 219 net system horse power</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>Electronic On-Demand All-Wheel Drive (AWD)</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>Height-adjustable hands-free power liftgate with jam protection</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>8-way power-adjustable driver's seat with lumbar support</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>Toyota Safety Sense™ 2.0 (TSS 2.0) 173 and Star Safety System™</span>
                                </div>
                                <h4>Save Money</h4>
                                <p><span>5% discount</span> for at least <span>7-day reservation</span> applies to this rental</p>
                            </div>
                            <CarDetailsPopupPictures />
                        </div>
                    </ModalLg>
                </>
            }
            {
                showCancellationModal && <>
                    <ModalLg setModal={setShowCancellationModal}>
                        <div className={styles.cancellationModal}>
                            <h2>
                                Cancellation of active rental for
                                Toyota Venza LE 2022 (RSRVE Code ATX-001-3088)</h2>
                            <p>
                                We are sad that this rental is being cancelled. Instead of cancelling your rental,
                                you may submit Heat Ticket for us to try resolve any rental issue you may have.
                            </p>
                            <div>
                                <div>
                                    <input type="text" placeholder="Cancel Car Rental" readOnly />
                                </div>
                            </div>
                            <div>
                                <h3>Please select one of the reasons for cancellation of your renta</h3>
                                <div>
                                    <select name="" id="">
                                        <option value="">Reason for car rental cancellation</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <h3>Car drop-off date and location:</h3>
                                <div>
                                    <select name="" id="">
                                        <option value="">Car Drop-off Date</option>
                                    </select>
                                </div>
                                <p>
                                    NOTE: Drop-off date cannot be later than 24 hours after cancellation. Car must be
                                    delivered to host as scheduled to avoid late drop-off penalty fees.
                                </p>
                            </div>
                            <div>
                                <div>
                                    <select name="" id="">
                                        <option value="">Car Drop-off location</option>
                                    </select>
                                </div>
                                <p>
                                    NOTE: Drop-off location is same as the one specified by the renter during reservation.
                                </p>
                            </div>
                            <div>
                                <button className="my-btn mx-auto">Cancel car rental</button>
                            </div>
                        </div>
                    </ModalLg>
                </>
            }
        </>
    )
}

export default Reservation