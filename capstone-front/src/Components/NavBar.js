import React from "react"
import { Link } from "react-router-dom"

export default function NavBar (props) {

    const isLogin = props.isLogin

    return (
        <ul className="navBox">
            {/* <li><a className="navItems">Home</a></li> */}
            <Link to = "/home" className="navItems"> Home </Link>
            <Link to = "/menu" className="navItems"> Menu </Link>
            <Link to = "/order" className="navItems"> Order </Link>
            <Link to = "/contact" className="navItems"> Contact Us </Link>
            {
                !isLogin?  <Link to = "/account" className="navItems"> Account </Link> : 
                <Link to = "/Profile" className="navItems"> Profile </Link>
            }
            <Link to = "/cart" className="navCart"> My Cart </Link>
        </ul>
    )
}