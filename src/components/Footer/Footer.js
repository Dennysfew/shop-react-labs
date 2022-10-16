import React from 'react'
import instagram from "./../images/instagram.png"
import twitter from "./../images/twitter.png"
import facebook from "./../images/facebook.png"
import '../Footer/Footer.css'

function Footer() {
  return (
    <footer>
      <img src={instagram} className="instagram" />
      <img src={twitter} className="twitter" />
      <img src={facebook} className="facebook" />
    </footer>
  )
}

export default Footer
