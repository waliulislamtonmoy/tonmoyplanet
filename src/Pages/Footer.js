import React from 'react'
import "../assets/css/Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className='bg-dark text-white  pt-5 pb-5'>
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3 col-lg-3 col-sm-3 mx-auto mt-3">
                            <h5 className='text-uppercase mt-4 font-weight-bold text-warning'>TonmoyPlanet</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat adipisci quod atque ex nihil corrupti. Nam amet iure illum, ad voluptatum magni quo quos eveniet, temporibus pariatur ut dolores totam.</p>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-3 mx-auto mt-3">
                            <h5 className='text-uppercase mt-4 font-weight-bold text-warning'>Services</h5>
                            <p><a href="#link" className='text-white text-decoration-none text-uppercase'>Web Design</a></p>
                            <p><a href="#link" className='text-white text-decoration-none text-uppercase'>Web Development</a></p>
                            <p><a href="#link" className='text-white text-decoration-none text-uppercase'>Full Stack web development</a></p>
                            <p><a href="#link" className='text-white text-decoration-none text-uppercase'>Seo</a></p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-3 mx-auto mt-3">
                            <h5 className='text-uppercase mt-4 font-weight-bold text-warning'>Use full Links</h5>
                            <p><a href="#Home" className='text-white text-decoration-none text-uppercase'> Home</a></p>
                            <p><a href="#About" className='text-white text-decoration-none text-uppercase'> About</a></p>
                            <p><a href="#Resume" className='text-white text-decoration-none text-uppercase'> Resume</a></p>
                            <p><a href="#Skills" className='text-white text-decoration-none text-uppercase'> Skills</a></p>
                            <p><a href="#Servcices" className='text-white text-decoration-none text-uppercase'> Servcices</a></p>
                            <p><a href="#Project" className='text-white text-decoration-none text-uppercase'> Project</a></p>
                            <p><a href="#Contact" className='text-white text-decoration-none text-uppercase'> Contact</a></p>

                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-3 mx-auto mt-3">
                            <h5 className='text-uppercase mt-4 font-weight-bold text-warning'>Contact</h5>
                            <p><i class="bi bi-house"></i> 51/KA Mirpur-1, Dhaka 1216</p>
                            <p><i class="bi bi-envelope-open"></i> tonmoykhandiu@gmail.com</p>
                            <p ><a className='text-white text-decoration-none text-uppercase' href="https://www.linkedin.com/in/waliul-islam-tonmoy-2659a5251/"><i class="bi bi-linkedin"></i> linkdin</a></p>
                            <p ><a className='text-white text-decoration-none text-uppercase' href="https://github.com/waliulislamtonmoy"><i class="bi bi-github"></i> github</a></p>
                        </div>

                        <hr className='mb-4' />
                        <div className="row text-align-center">
                            <div className="col-md-7 col-md-8">
                                <p>CopyRight @2023 All right reserved by <a className='text-decoration-none text-warning font-weight-bold' href="#none" style={{ textDecoration: "none" }}><strong>TonmoyKhan</strong></a></p>
                            </div>

                            <div className="col-md-5 col-lg-4 ">
                                <div className="text-center text-md-right">
                                    <ul className='list-unstyled list-inline'>
                                        <li className='list-inline-item'>
                                            <a className='btn btn-floating btn-sm text-white' href="https://github.com/waliulislamtonmoy" target='_blank' rel="noreferrer"><i class="bi bi-github"></i></a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a className='btn btn-floating btn-sm text-white' href="https://www.linkedin.com/in/waliul-islam-tonmoy-2659a5251/" target='_blank' rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                                        </li>

                                        <li className='list-inline-item'>
                                            <a className='btn btn-floating btn-sm text-white' href="https://www.gmail.com"><i class="bi bi-envelope-fill" target='_blank' rel="noreferrer"></i></a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a className='btn btn-floating btn-sm text-white' href="https://www.facebook.com/tonmoykhan21" target='_blank' rel="noreferrer" ><i class="bi bi-facebook"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer