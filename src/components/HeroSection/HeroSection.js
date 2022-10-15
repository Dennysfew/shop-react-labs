import React from 'react'
import puma_family from './../images/puma-family.jpg'
import './HeroSection.css'

function HeroSection() {
  return (
    <div>
        <section className='about'>
      <img src={puma_family} className="puma-family" />
      <div class="about-article">
        <h2>
          Puma Discounct Shop
        </h2>
        <p>We are selling originals by the lowest price on market</p>
        <button className='buy-now'>BUY</button>
      </div>
    </section>
    </div>
  )
}

export default HeroSection
