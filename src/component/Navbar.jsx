import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
import "../styles/nav.css"

const Navbar = () => {
    const productsNB = useSelector(state => state.cart.length)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light py-2 shadow-sm bg-white">
                <div className="container">
                    <NavLink className="myLogo navbar-brand fw-bold fs-3 " to="/"><img src='/pi/logo123.jpg' alt="Background" height="60px" width="100px"></img> SOCCER SHOP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="fs-4 nav-link active " to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-4  nav-link " to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className=" fs-4 nav-link " to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="fs-4  nav-link " to="contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-2 "></i>Login</NavLink>
                            <NavLink to="/signUp" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-2"></i>Sign Up</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-2"></i>Cart[{productsNB}]</NavLink>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar