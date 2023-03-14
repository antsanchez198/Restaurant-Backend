import React from "react"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavBar(props) {

    const isLogin = props.isLogin

    return (
        <ul className="navBox">
            {/* <li><a className="navItems">Home</a></li> */}
            <Link to="/home" className="navItems"> Home </Link>
            <Link to="/menu" className="navItems"> Menu </Link>
            <Link to="/order" className="navItems"> Order </Link>
            <HashLink to="/home/#contact" className="navItems" smooth> Contact Us </HashLink>
            {
                !isLogin ? <Link to="/account" className="navItems"> Account </Link> :
                    <Link to="/Profile" className="navItems"> Profile </Link>
            }
            <Link to="/cart" className="navItems right"> My Cart
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg></Link>
        </ul>
    )
}