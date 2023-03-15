import styles from "../../../styles/renter/Review/MainBox.module.css"

import MainBoxCarImg from "../../../assets/img/Renter/Review/MainBoxCarImg.png"
import FourDoorImg from "../../../assets/img/dashboard/carPicturesDetails/4Door.png"
import FiveSeatsImg from "../../../assets/img/dashboard/carPicturesDetails/5Seats.png"
import TwentyToTwentyThreeMpgImg from "../../../assets/img/dashboard/carPicturesDetails/20-23mpg.png"
import AutomaticImg from "../../../assets/img/dashboard/carPicturesDetails/Automatic.png"
import CheckmarkImg from "../../../assets/img/dashboard/carPicturesDetails/checkmark.png"
import CalendarIcon from "../../../assets/img/calendar-icon.png"

import Image from "next/image"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";



const MainBox = ({ hidePrice, hideList, hideageResidency, hideEstCost }) => {

    const [pickUpDate, setPickUpDate] = useState(new Date())
    const [pickUpDateTime, setPickUpDateTime] = useState("10:10 PM")
    const [dropOffDate, setDropOffDate] = useState(new Date())


    return (
        <div className={styles.container}>
            <div>
                <div className={styles.fourImgBox}>
                    <div>
                        <Image src={FourDoorImg} alt="" />
                        <span>4 door</span>
                    </div>
                    <div>
                        <Image src={FiveSeatsImg} alt="" />
                        <span>5 Seats</span>
                    </div>
                    <div>
                        <Image src={TwentyToTwentyThreeMpgImg} alt="" />
                        <span>37-40 mpg</span>
                    </div>
                    <div>
                        <Image src={AutomaticImg} alt="" />
                        <span>Automatic</span>
                    </div>
                </div>
                <div className={styles.pickUpDropOffBox}>
                    <div>
                        <label htmlFor="">Pick-up</label>
                        <div className={styles.datePickerBox}>
                            <Image src={CalendarIcon} alt="Calendar Icon" />
                            <div className="d-flex gap-1 align-items-center">
                                <div className="d-flex align-items-center gap-1" style={{ maxWidth: "80px" }}>
                                    <DatePicker
                                        style={{ width: "75px" }}
                                        selected={pickUpDate}
                                        onChange={(date) => setPickUpDate(date)}
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy"
                                    />
                                    <i class="fa fa-angle-down" style={{ fontSize: "12px" }}></i>
                                </div>
                                <select name="" id="" style={{ border: "none", background: "transparent", outline: "none", fontSize: "13px", fontWeight: 500, marginLeft: "15px", maxHeight: "200px", color: "#000000" }}>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="12:00 PM">12:30 PM</option>
                                    <option value="12:00 PM">01:00 PM</option>
                                    <option value="12:00 PM">01:30 PM</option>
                                    <option value="12:00 PM">02:00 PM</option>
                                    <option value="12:00 PM">02:30 PM</option>
                                    <option value="12:00 PM">03:00 PM</option>
                                    <option value="12:00 PM">03:30 PM</option>
                                    <option value="12:00 PM">04:00 PM</option>
                                    <option value="12:00 PM">04:30 PM</option>
                                    <option value="12:00 PM">05:00 PM</option>
                                    <option value="12:00 PM">05:30 PM</option>
                                    <option value="12:00 PM">06:00 PM</option>
                                    <option value="12:00 PM">06:30 PM</option>
                                    <option value="12:00 PM">07:00 PM</option>
                                    <option value="12:00 PM">07:30 PM</option>
                                    <option value="12:00 PM">08:00 PM</option>
                                    <option value="12:00 PM">08:30 PM</option>
                                    <option value="12:00 PM">09:00 PM</option>
                                    <option value="12:00 PM">09:30 PM</option>
                                    <option value="12:00 PM">10:00 PM</option>
                                    <option value="12:00 PM">10:30 PM</option>
                                    <option value="12:00 PM">11:00 PM</option>
                                    <option value="12:00 PM">11:30 PM</option>

                                    <option value="12:00 PM">12:00 AM</option>
                                    <option value="12:00 AM">12:30 AM</option>
                                    <option value="12:00 AM">01:00 AM</option>
                                    <option value="12:00 AM">01:30 AM</option>
                                    <option value="12:00 AM">02:00 AM</option>
                                    <option value="12:00 AM">02:30 AM</option>
                                    <option value="12:00 AM">03:00 AM</option>
                                    <option value="12:00 AM">03:30 AM</option>
                                    <option value="12:00 AM">04:00 AM</option>
                                    <option value="12:00 AM">04:30 AM</option>
                                    <option value="12:00 AM">05:00 AM</option>
                                    <option value="12:00 AM">05:30 AM</option>
                                    <option value="12:00 AM">06:00 AM</option>
                                    <option value="12:00 AM">06:30 AM</option>
                                    <option value="12:00 AM">07:00 AM</option>
                                    <option value="12:00 AM">07:30 AM</option>
                                    <option value="12:00 AM">08:00 AM</option>
                                    <option value="12:00 AM">08:30 AM</option>
                                    <option value="12:00 AM">09:00 AM</option>
                                    <option value="12:00 AM">09:30 AM</option>
                                    <option value="12:00 AM">10:00 AM</option>
                                    <option value="12:00 AM">10:30 AM</option>
                                    <option value="12:00 AM">11:00 AM</option>
                                    <option value="12:00 AM">11:30 AM</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <i className="fa fa-map-marker-alt"></i>
                            <input type="text" placeholder="- - - - - - -" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Drop-off</label>
                        <div className={styles.datePickerBox}>
                            <Image src={CalendarIcon} alt="Calendar Icon" />
                            <div className="d-flex gap-1 align-items-center">
                                <div className="d-flex align-items-center gap-1" style={{ maxWidth: "80px" }}>
                                    <DatePicker
                                        style={{ width: "75px" }}
                                        selected={dropOffDate}
                                        onChange={(date) => setDropOffDate(date)}
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy"
                                    />
                                    <i class="fa fa-angle-down" style={{ fontSize: "12px" }}></i>
                                </div>
                                <select name="" id="" style={{ border: "none", background: "transparent", outline: "none", fontSize: "13px", fontWeight: 500, marginLeft: "15px", maxHeight: "200px", color: "#000000" }}>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="12:00 PM">12:30 PM</option>
                                    <option value="12:00 PM">01:00 PM</option>
                                    <option value="12:00 PM">01:30 PM</option>
                                    <option value="12:00 PM">02:00 PM</option>
                                    <option value="12:00 PM">02:30 PM</option>
                                    <option value="12:00 PM">03:00 PM</option>
                                    <option value="12:00 PM">03:30 PM</option>
                                    <option value="12:00 PM">04:00 PM</option>
                                    <option value="12:00 PM">04:30 PM</option>
                                    <option value="12:00 PM">05:00 PM</option>
                                    <option value="12:00 PM">05:30 PM</option>
                                    <option value="12:00 PM">06:00 PM</option>
                                    <option value="12:00 PM">06:30 PM</option>
                                    <option value="12:00 PM">07:00 PM</option>
                                    <option value="12:00 PM">07:30 PM</option>
                                    <option value="12:00 PM">08:00 PM</option>
                                    <option value="12:00 PM">08:30 PM</option>
                                    <option value="12:00 PM">09:00 PM</option>
                                    <option value="12:00 PM">09:30 PM</option>
                                    <option value="12:00 PM">10:00 PM</option>
                                    <option value="12:00 PM">10:30 PM</option>
                                    <option value="12:00 PM">11:00 PM</option>
                                    <option value="12:00 PM">11:30 PM</option>

                                    <option value="12:00 PM">12:00 AM</option>
                                    <option value="12:00 AM">12:30 AM</option>
                                    <option value="12:00 AM">01:00 AM</option>
                                    <option value="12:00 AM">01:30 AM</option>
                                    <option value="12:00 AM">02:00 AM</option>
                                    <option value="12:00 AM">02:30 AM</option>
                                    <option value="12:00 AM">03:00 AM</option>
                                    <option value="12:00 AM">03:30 AM</option>
                                    <option value="12:00 AM">04:00 AM</option>
                                    <option value="12:00 AM">04:30 AM</option>
                                    <option value="12:00 AM">05:00 AM</option>
                                    <option value="12:00 AM">05:30 AM</option>
                                    <option value="12:00 AM">06:00 AM</option>
                                    <option value="12:00 AM">06:30 AM</option>
                                    <option value="12:00 AM">07:00 AM</option>
                                    <option value="12:00 AM">07:30 AM</option>
                                    <option value="12:00 AM">08:00 AM</option>
                                    <option value="12:00 AM">08:30 AM</option>
                                    <option value="12:00 AM">09:00 AM</option>
                                    <option value="12:00 AM">09:30 AM</option>
                                    <option value="12:00 AM">10:00 AM</option>
                                    <option value="12:00 AM">10:30 AM</option>
                                    <option value="12:00 AM">11:00 AM</option>
                                    <option value="12:00 AM">11:30 AM</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <i className="fa fa-map-marker-alt"></i>
                            <input type="text" placeholder="- - - - - - -" />
                        </div>
                    </div>
                </div>
                {
                    !hideList && <div className={styles.list}>
                        <div>
                            <Image src={CheckmarkImg} alt="" />
                            <span>8-way power-adjustable driver's seat with lumbar
                                support</span>
                        </div>
                        <div>
                            <Image src={CheckmarkImg} alt="" />
                            <span>Toyota Safety Sense™ 2.0 (TSS 2.0) 173 and Star
                                Safety System™</span>
                        </div>
                    </div>
                }
                {
                    !hideageResidency && <div className={styles.ageResidencyBox}>
                        <div>
                            <div>
                                <i className="fa fa-info"></i>
                            </div>
                            <label htmlFor="">Age:</label>
                            <select name="" id="">
                                <option value="25+">25+</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <i className="fa fa-info"></i>
                            </div>
                            <label htmlFor="">Residency:</label>
                            <select name="" id="">
                                <option value="USA">USA</option>
                            </select>
                        </div>
                    </div>
                }
                {
                    !hideEstCost && <div className={styles.estimatedCostBox}>
                        <h4>Base cost</h4>
                        <span>$2,958</span>

                        <h4>Add-On</h4>
                        <span>$364</span>

                        <h4>Estimated taxes & fees</h4>
                        <span>$1,054</span>

                        <h4>Estimated Total Costs</h4>
                        <span>$4,376</span>
                    </div>
                }
            </div>
            <div>
                <Image src={MainBoxCarImg} alt="" />
                {
                    !hidePrice && <>
                        <h2>$2,958</h2>
                        <h3>Base Cost</h3>
                    </>
                }
            </div>
        </div>
    )
}

export default MainBox