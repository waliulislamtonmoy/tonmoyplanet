import React from 'react'
import "../assets/css/Resume.css";

import graduationcap from "../assets/images/graduationcap.png"
const Resume = () => {
    return (
        <div id='Resume' className='mx-auto pt-5 pb-5 ' style={{ backgroundColor: "#262626" }}>
            <div className="Resume-Banner text-white text-center mx-auto pt-5 pb-5">
                <h1 className='banner-text'>Resume</h1>
            </div>

            <div className="container">
                <div className="row g-2 text-align-center">
                    <div className="col-md-6 mx-auto pt-4 pb-5">
                        <div class="container card" style={{ maxWidth: "25rem", maxHeight: "13rem" }}>
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src={graduationcap} class="img-fluid rounded-start" alt="..." style={{ width: "60px", height: "60px" }} />
                                </div>
                                <div class="col-md-10 ">
                                    <div class="card-body">
                                        <h6 class="card-title">B.sc in Cse</h6>
                                        <p>2019-2022</p>
                                        <p class="lead card-text text-justify text-capitalize fw-bold">i completed my Bsc in Cse from Daffodil international University.</p>
                                    </div>
                                </div>
                            </div>
                        </div><br />

                        <div class="container card" style={{ maxWidth: "25rem", maxHeight: "13rem" }}>
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src={graduationcap} class="img-fluid rounded-start" alt="..." style={{ width: "60px", height: "60px" }} />
                                </div>
                                <div class="col-md-10 ">
                                    <div class="card-body">
                                        <h6 class="card-title">HSC</h6>
                                        <p>2017</p>
                                        <p class="lead card-text text-justify text-capitalize fw-bold">i completed my Hsc in Qadirabad Cantonment sapper collage from Nator.</p>
                                    </div>
                                </div>
                            </div>
                        </div><br />

                        <div class="container card" style={{ maxWidth: "25rem", maxHeight: "13rem" }}>
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src={graduationcap} class="img-fluid rounded-start" alt="..." style={{ width: "60px", height: "60px" }} />
                                </div>
                                <div class="col-md-10 ">
                                    <div class="card-body">
                                        <h6 class="card-title">SSC</h6>
                                        <p>2015</p>
                                        <p class="lead card-text text-justify text-capitalize fw-bold">i completed my Ssc in Chandpur High School from Nator.</p>
                                    </div>
                                </div>
                            </div>
                        </div><br />
                    </div>
                    <div className="col-md-6 mx-auto pt-4 pb-5">
                        <div class="container card" style={{ maxWidth: "25rem", maxHeight: "13rem" }}>
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src={graduationcap} class="img-fluid rounded-start" alt="..." style={{ width: "60px", height: "60px" }} />
                                </div>
                                <div class="col-md-10 ">
                                    <div class="card-body">
                                        <h6 class="card-title">Web Design</h6>
                                        <p>2021</p>
                                        <p class="lead card-text text-justify text-capitalize fw-bold">i completed my Web Design Course From Skill.jobs PlatForm.</p>
                                    </div>
                                </div>
                            </div>
                        </div><br />

                        <div class="container card" style={{ maxWidth: "25rem", maxHeight: "13rem" }}>
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src={graduationcap} class="img-fluid rounded-start" alt="..." style={{ width: "60px", height: "60px" }} />
                                </div>
                                <div class="col-md-10 ">
                                    <div class="card-body">
                                        <h6 class="card-title">Web Development</h6>
                                        <p>2022</p>
                                        <p class="lead card-text text-justify text-capitalize fw-bold">i completed my Web Development Course From Bohubrihi.com By Online </p>
                                    </div>
                                </div>
                            </div>
                        </div><br />

                        <div class="container card" style={{ maxWidth: "25rem", maxHeight: "14rem" }}>
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src={graduationcap} class="img-fluid rounded-start" alt="..." style={{ width: "60px", height: "60px" }} />
                                </div>
                                <div class="col-md-10 ">
                                    <div class="card-body">
                                        <h6 class="card-title">SEO</h6>
                                        <p>2023</p>
                                        <p class="lead card-text text-justify text-capitalize fw-bold ">i completed SEO Course from corosia Online platForm .</p>
                                    </div>
                                </div>
                            </div>
                        </div><br />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Resume