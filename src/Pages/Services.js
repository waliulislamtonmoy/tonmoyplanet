import React from 'react'
import "../assets/css/Services.css";

import webdesign from "../assets/images/webdesign.jpg"
import webdevelopment from "../assets/images/web-development.jpg"
import softwaredevelopment from "../assets/images/softwaredevelopment.jpg"

const Services = () => {
    return (
        <div className='service-section pt-5 pb-5 mx-auto' id="Services">
            <hr className='container ' />
            <div className="mx-auto pt-5 pb-4 text-center ">
                <h1 className='fw-bold'>Services</h1>
            </div>

            <div className="service-card">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="container text-black mb-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="card" style={{ width: "22rem", height: "20rem" }}>
                                <img src={webdesign} alt="" className='img-fluid' style={{ height: "200px" }} />
                                <div className="card-body">
                                    <h3 className='card-title text-center'>Web Design</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="container text-black mb-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="card" style={{ width: "22rem", height: "20rem" }}>
                                <img src={webdevelopment} alt="" className='img-fluid' style={{ height: "200px" }} />
                                <div className="card-body">
                                    <h3 className='card-title text-center'>Web Development</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="container text-black mb-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="card" style={{ width: "22rem", height: "20rem" }}>
                                <img src={softwaredevelopment} alt="" className='img-fluid' style={{ height: "200px" }} />
                                <div className="card-body">
                                    <h3 className='card-title text-center'>Software Development</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services