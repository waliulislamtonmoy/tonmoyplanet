import React from 'react'
import "../assets/css/Home.css";

const Home = () => {
    return (
        <div className='home-section' id="Home">
            <div className=" container-fluid details bg-dark text-white  mx-auto pt-5  ">
                <div className="container   mx-auto pt-5 pb-5 ">
                    <p className='pt-5 pb-2'>Hello !</p>
                    <h5>I Am Waliul Islam Tonmoy</h5>
                    <h3>A Full Stack  <span className=' text-warning'>[</span> MERN  <span className=' text-warning'>]</span> Developer.</h3>
                    <p className='lead mt-3'>Web Designer. Algorithms Expert. I Am a passionate tech lover & problem solver always ready to face new challenges.</p>
                    <div className="socail-icon mx-auto pt-5 pb-5">
                        <ul className='list-styled  list-inline'>
                            <li className='list-inline-item px-4'><a href="https://www.facebook.com/tonmoykhan21" target='_blank' rel="noreferrer"><i class="bi bi-facebook" style={{ fontSize: "40px", color: "white" }}></i></a></li>
                            <li className='list-inline-item px-4'><a href="#https://www.linkedin.com/in/waliul-islam-tonmoy-2659a5251/" target='_blank' rel="noreferrer"><i class="bi bi-linkedin  " style={{ fontSize: "40px", color: "white" }} ></i></a></li>
                            <li className='list-inline-item px-4'><a href="https://github.com/waliulislamtonmoy" target='_blank' rel="noreferrer"><i class="bi bi-github  " style={{ fontSize: "40px", color: "white" }} ></i></a></li>
                        </ul>
                    </div>
                    <div className="hero-contact mx-auto pt-5 pb-5">
                        <div className="pt-3 pb-3">
                            <button className='btn btn-success px-4 py-3 m-1'><a className='text-white text-uppercase text-decoration-none ' href="#Contact">Contact-Me</a></button>
                            <button className='btn btn-warning px-4 py-3 m-1'><a className='text-white text-uppercase text-decoration-none' href="https://drive.google.com/file/d/1QrRVryE8tMafIgbfK_byrIf_WlHqAqyR/view" target='_blank' rel="noreferrer" >download-cv</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home