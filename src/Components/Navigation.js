import React from 'react'
import "../assets/css/Navigation.css"

import TonmoyPlanetLogo from "../assets/images/tonmoyplanet.png"
// bg-dark" data-bs-theme="dark
const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg nav-color  fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="./">
                        <img src={TonmoyPlanetLogo} alt="TonmoyPlanet" className='nav-logo' />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#About">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Resume">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Project">Project</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Contact">Contact</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation