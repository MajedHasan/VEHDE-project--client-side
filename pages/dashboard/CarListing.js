import DashboardLayout from "../../components/layout/DashboardLayout"

import styles from "../../styles/dashboard/CarListing.module.css"


const CarListing = () => {
    return (
        <>
            <DashboardLayout>
                <div className={styles.wrapper}>
                    <h2>Please complete the information below for listing your car to rent with VEHDE.</h2>
                    <div className={styles.formWrapper}>
                        <div className="mb-3">
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your car make</label>
                                <select name="" id="">
                                    <option value="">Make</option>
                                </select>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your car model</label>
                                <select name="" id="">
                                    <option value="">Model</option>
                                </select>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your car type</label>
                                <select name="" id="">
                                    <option value="">Type</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your manufactured</label>
                                <select name="" id="">
                                    <option value="">Year manufactured</option>
                                </select>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your location</label>
                                <div>
                                    <select name="" id="">
                                        <option value="">State</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">City</option>
                                    </select>
                                    <input type="text" placeholder="Zip" />
                                    <input type="text" placeholder="Street" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="">Availability</label>
                                <button>Overview</button>
                            </div>
                            <div>
                                <label htmlFor="">Schedule 1</label>
                                <button>03/16/22 / 09.00 AM</button>
                            </div>
                            <div>
                                <label htmlFor="">Schedule 2</label>
                                <button>Add schedule</button>
                            </div>
                            <div>
                                <label htmlFor="">Schedule 3</label>
                                <button>Add schedule</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className={styles.inputBox}>
                                <label htmlFor="">Regular rent rate ($/day)</label>
                                <input type="text" placeholder="Enter your rate" />
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Rush hour rent rate ($/day)</label>
                                <input type="text" placeholder="Enter your rate" />
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">ERH rate</label>
                                <select name="" id="">
                                    <option value="">Add rate</option>
                                </select>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Discount</label>
                                <select name="" id="">
                                    <option value="">Add disc</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className={styles.inputBox}>
                                <textarea name="" id="" placeholder="A brief description about yourself. No more than 200 characters*"></textarea>
                            </div>
                            <button className={styles.inputBox}>
                                <i class="fa-regular fa-image"></i>
                                <span>My picture upload*</span>
                            </button>
                        </div>
                        <div className="">
                            <button className="my-btn w-100">Next</button>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default CarListing