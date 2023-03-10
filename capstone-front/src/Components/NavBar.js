import React from "react"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavBar (props) {

    const isLogin = props.isLogin

    return (
        <ul className="navBox">
            {/* <li><a className="navItems">Home</a></li> */}
            <Link to = "/home" className="navItems"> Home </Link>
            <Link to = "/menu" className="navItems"> Menu </Link>
            <Link to = "/order" className="navItems"> Order </Link>
            <HashLink to = "/home/#contact" className="navItems" smooth> Contact Us </HashLink>
            {
                !isLogin?  <Link to = "/account" className="navItems"> Account </Link> : 
                <Link to = "/Profile" className="navItems"> Profile </Link>
            }
            <Link to = "/cart" className="navItems right"> My Cart </Link>
        </ul>
    )
}