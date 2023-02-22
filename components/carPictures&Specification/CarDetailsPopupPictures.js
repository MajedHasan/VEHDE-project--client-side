import styles from "../../styles/dashboard/carPictures&Specification/CarDetailsPopupPictures.module.css"

import SingleView from "../../assets/img/dashboard/carPicturesDetails/SingleView.png"
import Image from "next/image"
import { useState } from "react"

import FlatView from "../../assets/img/dashboard/carPicturesDetails/FlatViewIcon.svg"
import ActiveFlatView from "../../assets/img/dashboard/carPicturesDetails/ActiveFlatViewIcon.svg"
import ThreeDViewIcon from "../../assets/img/dashboard/carPicturesDetails/3dViewIcon.svg"
import ActiveThreeDViewIcon from "../../assets/img/dashboard/carPicturesDetails/Active3dViewIcon.svg"
import ThreeDViewExterior from "../../assets/img/dashboard/carPicturesDetails/3dViewExterior.png"
import ThreeDViewInterior from "../../assets/img/dashboard/carPicturesDetails/3dViewInterior.png"


const CarDetailsPopupPictures = () => {

    const [view, setView] = useState("3d View")
    const [ThreeDView, setThreeDView] = useState("Exterior")
    const [singleViewImg, setSingleViewImg] = useState(null)

    return (
        <div className={styles.container}>
            <div className={styles.singleView}>
                <div className={styles.viewButtons}>
                    <button onClick={() => setView("Flat View")} className={`${view === "Flat View" && styles.activeViewBtn}`}>
                        <span>
                            <Image src={view === "Flat View" ? ActiveFlatView : FlatView} alt="" />
                        </span>
                        <span>Flat View</span>
                    </button>
                    <button onClick={() => setView("3d View")} className={`${view === "3d View" && styles.activeViewBtn}`}>
                        <span>
                            <Image src={view === "3d View" ? ActiveThreeDViewIcon : ThreeDViewIcon} alt="" />
                        </span>
                        <span>3d View</span>
                    </button>
                </div>
                <Image src={singleViewImg ? singleViewImg : SingleView} alt="" />
            </div>
            <div className={styles.gallery}>
                {
                    view === "3d View" && <>
                        <div className={styles.threeDView}>
                            <Image src={ThreeDViewInterior} onClick={() => setSingleViewImg(ThreeDViewExterior)} alt="Ops" />
                            <Image src={ThreeDViewInterior} onClick={() => setSingleViewImg(ThreeDViewInterior)} alt="" />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default CarDetailsPopupPictures