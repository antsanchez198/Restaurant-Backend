import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavBar(props) {

    const isLogin = props.isLogin

    useEffect(() => {
        var navItems = document.getElementsByClassName("navItems");
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    })

    return (
        <ul className="navBox">
            <Link to="/home" class="navItems active"> Home </Link>
            <Link to="/menu" class="navItems"> Menu </Link>
            <Link to="/order" class="navItems"> Order </Link>
            <HashLink to="/home/#contact" class="navItems" smooth> Contact Us </HashLink>
            {
                !isLogin ? <Link to="/account" class="navItems"> Account </Link> :
                    <Link to="/Profile" class="navItems"> Profile </Link>
            }
            <Link to="/cart" class="navItems right"> My Cart
            </Link>

        </ul>
    )
}