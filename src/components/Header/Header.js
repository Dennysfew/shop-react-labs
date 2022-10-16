import React from "react";
import logo from "../images/logo.png"
import '../Header/Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img src={logo} className="logo" />
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/catalog'> Catalog</Link>
                <Link to='/'> Cart </Link>
                <Link to='/'> Account</Link>
            </nav>
        </header>
    )
}

export default Header;
