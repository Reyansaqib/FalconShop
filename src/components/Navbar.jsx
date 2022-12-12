import React from 'react'
import { Link } from 'react-router-dom'
import "./mystyle.css"

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg background fixed-top">
                <div class="container-fluid">
                    <Link class="navbar-brand text-light textfont" to="/">Falcon Shop</Link>
                    <button class="navbar-toggler" style={{color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="mytoggler">
                            <div className="mytogglerline"></div>
                            <div className="mytogglerline"></div>
                            <div className="mytogglerline"></div>
                        </div>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link text-light textfont" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light textfont" aria-current="aboutus" to="/">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light textfont" to="/shops/all/all/all">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light textfont" to="/cart">Cart</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light textfont" to="/profile">Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light textfont" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light textfont" to="/contactus">Contact Us</Link>
                            </li>


                        </ul>
                        <form class="d-flex" role="search">
                            <input className="form-control me-2 textfont" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-light textfont" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}
