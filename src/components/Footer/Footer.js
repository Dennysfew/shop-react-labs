import React from 'react'
import logo from "/Users/denys/shop-react-labs/src/components/images/logo.png"
import instagram from "./../images/instagram.png"
import twitter from "./../images/twitter.png"
import facebook from "./../images/facebook.png"
import '/Users/denys/shop-react-labs/src/components/Footer/Footer.css'

function Footer() {
  return (
    <footer>
      <img src={logo} className="logo" />
      <div className='footer-networks'>
        <img src={instagram} className="instagram" />
        <img src={twitter} className="twitter" />
        <img src={facebook} className="facebook" />
      </div>

    </footer>
  )
}

export default Footer
