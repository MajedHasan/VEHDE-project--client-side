import Head from 'next/head'
import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import styles from "../styles/FAQ.module.css"

const FAQ = () => {
    return (
        <>
            <Head>
                <title>VEHDE - FAQ</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <section id={styles.heroSection}>
                    <div className="container">
                        <div className="wrapper">
                            <div className="row align-items-center">
                                <div className="col-lg-5 mb-lg-0 mb-5">
                                    <h1>Frequently Asked Questions</h1>
                                </div>
                                <div className="col-lg-7 text-center">
                                    {/* <Image src={HeroSectionImg} alt="Patent Vaccination Program Image" className='img-fluid' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section02}>
                    <div className="container">
                        <div className="wrapper">
                            <div className="accordion" id="accordionExample">
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Can I cancel my car rental reservation before the scheduled rental pick-up date?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Renter is expected to follow the standard auto incident reporting guideline, in accordance with the applicable local laws, and in relation to auto accidents reporting procedures. Also, renter shall report “rental interruption” through an incident reporting option, “Snow Ticket” in the VEHDE account.
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            Can I cancel and return rental car back to host before the scheduled drop-off date?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Renter is expected to follow the standard auto incident reporting guideline, in accordance with the applicable local laws, and in relation to auto accidents reporting procedures. Also, renter shall report “rental interruption” through an incident reporting option, “Snow Ticket” in the VEHDE account.
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            Can I cancel and return rental car back to host before the scheduled drop-off date?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Renter is expected to follow the standard auto incident reporting guideline, in accordance with the applicable local laws, and in relation to auto accidents reporting procedures. Also, renter shall report “rental interruption” through an incident reporting option, “Snow Ticket” in the VEHDE account.
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            What if renter fails to return rental car to host as scheduled in the drop-off?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Renter is expected to follow the standard auto incident reporting guideline, in accordance with the applicable local laws, and in relation to auto accidents reporting procedures. Also, renter shall report “rental interruption” through an incident reporting option, “Snow Ticket” in the VEHDE account.
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                            What if rental car develops mechanical fault before the scheduled drop-off date?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headheadingFiveingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Renter is expected to follow the standard auto incident reporting guideline, in accordance with the applicable local laws, and in relation to auto accidents reporting procedures. Also, renter shall report “rental interruption” through an incident reporting option, “Snow Ticket” in the VEHDE account.
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingSix">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                            What if renter has auto accident with the rental car before the scheduled drop-off date?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Renter is expected to follow the standard auto incident reporting guideline, in accordance with the applicable local laws, and in relation to auto accidents reporting procedures. Also, renter shall report “rental interruption” through an incident reporting option, “Snow Ticket” in the VEHDE account.
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingSeven">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                            Is there earliest date I can reserve a car?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Renter is expected to follow the standard auto incident reporting guideline, in accordance with the applicable local laws, and in relation to auto accidents reporting procedures. Also, renter shall report “rental interruption” through an incident reporting option, “Snow Ticket” in the VEHDE account.
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingEight">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                            Is there latest date I can reserve a car?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Renter is expected to follow the standard auto incident reporting guideline, in accordance with the applicable local laws, and in relation to auto accidents reporting procedures. Also, renter shall report “rental interruption” through an incident reporting option, “Snow Ticket” in the VEHDE account.
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingNine">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                                            Can I return rental car back to host after delivery before the scheduled drop-off date?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Renter is expected to follow the standard auto incident reporting guideline, in accordance with the applicable local laws, and in relation to auto accidents reporting procedures. Also, renter shall report “rental interruption” through an incident reporting option, “Snow Ticket” in the VEHDE account.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export default FAQ