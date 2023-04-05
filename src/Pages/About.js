import React from 'react'
import "../assets/css/About.css";

import tonmoy from "../assets/images/t1.JPG"

const About = () => {
    return (
        <div className='About  mx-auto  pt-5 pb-5   ' id="About" style={{ backgroundColor: "#fff0f6" }} >
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6 mx-auto pt-5 pb-4">
                        <img src={tonmoy} alt="" className='img-fluid rounded  ' />
                    </div>
                    <div className="col-md-6 mx-auto pt-5 pb-4">
                        <div className="banner">
                            <h3 className='text-uppercase font-weight-bold  text-center border-bottom border-5 border-danger'>About</h3>
                        </div>
                        <dl class="row">
                            <dt class="col-sm-3">Name  </dt>
                            <dd class="col-sm-9">Md.Waliul Islam Tonmoy</dd>

                            <dt class="col-sm-3">Email  </dt>
                            <dd class="col-sm-9"><p>tonmoykhandiu@gmail.com</p></dd>

                            <dt class="col-sm-3">Address</dt>
                            <dd class="col-sm-9">51/KA Mirpur-1, Dhaka 1216</dd>

                            <dt class="col-sm-3 text-truncate">Zip code</dt>
                            <dd class="col-sm-9">1216</dd>

                            <dt class="col-sm-3 text-truncate">Study  </dt>
                            <dd class="col-sm-9">
                                <p>B.sc in Cse</p>
                                <p>Daffodil Internation University</p>
                            </dd>
                        </dl>
                        <div className="project mx-auto mt-5 pb-4">
                            <button className='btn btn-warning px-5 py-3 text-black'><span style={{ fontSize: "40px" }}>12</span></button>
                            <br />
                            <h3 className='mt-3'>Almost 12 Project Completed</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About