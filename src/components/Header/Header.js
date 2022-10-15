import React from "react";
import logo from "/Users/denys/shop-react-labs/src/components/images/logo.png"
import '/Users/denys/shop-react-labs/src/components/Header/Header.css'

function Header() {
    return (
        <header>
            <img src={logo} className="logo" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Catalog</a>  
                <a href="#">Cart</a>
                <a href="#">Account</a>           
            </nav>

            
        </header>
    )
}

export default Header;