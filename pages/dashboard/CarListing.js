import DashboardLayout from "../../components/layout/DashboardLayout"

import styles from "../../styles/dashboard/CarListing.module.css"


const CarListing = () => {

    const [modal, setModal] = useState(null)

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
            {modal &&
                <div style={{ position: "fixed", top: "0px", left: "0px", width: "100%", minHeight: "100vh", height: "fit-content", background: "rgba(0, 0, 0, 0.5)", zIndex: "999999", display: "flex", justifyContent: "center", alignItems: "center", overflow: "scroll" }}>
                    <div style={{ padding: "25px", background: "#FFFFFF", borderRadius: "15px", maxWidth: "750px", width: "100%", margin: "10px", marginTop: "30px", maxHeight: "85vh", overflow: "scroll", position: "relative" }}>
                        <button style={{ background: "#DE4F4D", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", border: "none", color: "white", position: "absolute", top: "0px", right: "0px" }} onClick={() => setModal(null)}>
                            <span style={{ fontSize: "30px" }}>&times;</span>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default CarListing