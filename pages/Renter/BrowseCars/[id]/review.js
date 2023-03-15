import { useState } from "react"
import MainLayout from "../../../../components/layout/MainLayout"
import MainBox from "../../../../components/Rental/Review/MainBox"
import ProtectionBox from "../../../../components/Rental/Review/ProtectionBox"
import ReivewHeaderBox from "../../../../components/Rental/Review/ReivewHeaderBox"


const review = () => {

    const [screen, setScreen] = useState(null)

    return (
        <MainLayout>
            <div style={{ background: "#F6F6F6", padding: "40px 0px" }}>
                <div className="container">
                    {
                        screen === null && <ReivewHeaderBox></ReivewHeaderBox>
                    }
                    <MainBox hideEstCost={screen === null ? true : false} hidePrice={screen === "protection" ? true : false} hideList={screen === "protection" ? true : false} hideageResidency={screen === "protection" ? true : false}></MainBox>

                    {
                        screen === null && <div>
                            <button className="my-btn mx-auto" style={{ padding: "15px 100px" }} onClick={() => setScreen("protection")}>Next</button>
                        </div>
                    }
                    {
                        screen === "protection" && <ProtectionBox></ProtectionBox>
                    }
                </div>
            </div>
        </MainLayout>
    )
}

export default review