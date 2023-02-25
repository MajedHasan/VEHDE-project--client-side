import styles from "../../styles/dashboard/Rental/RentalDataList.module.css"

import CarImg from "../../assets/img/dashboard/MyHost/Rental/car.png"
import Image from "next/image"
import { useState } from "react"

const RentalDataList = () => {

    const [showSingle, setShowSingle] = useState(null)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.tableWrapper}>
                    <table className="table table-hover">
                        <thead>
                            <th></th>
                            <th>Car</th>
                            <th>Renter</th>
                            <th>Pick-up date/ Location</th>
                            <th>Return date/ Location</th>
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
                                                    <span>See details</span>
                                                </h3>
                                                <p>Car Tag:
                                                    <a href="">(TY) 78613 -39053</a>
                                                </p>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3099</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            <a href="">4/19/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">5/14/22 @</a>
                                        </td>
                                        <td>
                                            <button className={styles.reservedBtn}>Reserved</button>
                                        </td>
                                        <td>
                                            $105/day
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 hosting
                                                    (rental) days</h4>
                                                <button>
                                                    <span>*Net pay:</span>
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
                                                <p>Car Tag:
                                                    <a href="">(TY) 78613 -39053</a>
                                                </p>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3092</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            <a href="">4/12/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">4/17/22 @</a>
                                        </td>
                                        <td>
                                            <button className={styles.activeBtn}>Active</button>
                                        </td>
                                        <td>
                                            $105/day
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 hosting
                                                    (rental) days</h4>
                                                <button>
                                                    <span>*Net pay:</span>
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
                                                <p>Car Tag:
                                                    <a href="">(TY) 78613 -39053</a>
                                                </p>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3088</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            <a href="">3/15/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">4/10/22 @</a>
                                        </td>
                                        <td>
                                            <button className={styles.completedBtn}>Completed</button>
                                        </td>
                                        <td>
                                            $105/day
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 hosting
                                                    (rental) days</h4>
                                                <button>
                                                    <span>*Net pay:</span>
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
                                                <p>Car Tag:
                                                    <a href="">(TY) 78613 -39053</a>
                                                </p>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3092</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            <a href="">4/12/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">4/17/22 @</a>
                                        </td>
                                        <td>
                                            <button className={styles.cancelledBtn}>Cancelled</button>
                                        </td>
                                        <td>
                                            $105/day
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 hosting
                                                    (rental) days</h4>
                                                <button>
                                                    <span>*Net pay:</span>
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
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span>See details</span>
                                                </h3>
                                                <p>Car Tag:
                                                    <a href="">(TY) 78613 -39053</a>
                                                </p>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3099</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            <a href="">4/19/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">5/14/22 @</a>
                                        </td>
                                        <td>
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
                                        </td>
                                        <td>
                                            $105/day
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 hosting
                                                    (rental) days</h4>
                                                <button>
                                                    <span>*Scheduled payments:</span>
                                                    <a href="">$2,493.75</a>
                                                </button>
                                                <button>
                                                    <span>Payment received:</span>
                                                    <a href="">$0.00</a>
                                                </button>
                                                <button>
                                                    <span>Outstanding payments:</span>
                                                    <a href="">$2,493.75</a>
                                                </button>
                                                <span>Pay details</span>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            }
                        </tbody>
                    </table>
                </div>
                {
                    showSingle !== null && <div className={styles.bottomInfo}>
                        <button>Cancel reservation</button>
                        {
                            showSingle === 1 && <a href="" className={styles.warningInfo}>
                                <span>ATTENTION:</span> Intention to Deliver Car (pick-up confirmation) is required <i className="fa fa-info"></i>
                            </a>
                        }
                        {
                            showSingle === 2 && <a href="" className={styles.successInfo}>
                                <i className="fa fa-check"></i>Intention to Deliver Car Confirmed
                            </a>
                        }
                        {
                            showSingle === 3 && <a href="" className={styles.warningInfo}>
                                <span>ATTENTION:</span> Drop-off confirmation is required. <i className="fa fa-info"></i>
                            </a>
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default RentalDataList