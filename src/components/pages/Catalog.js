import React from 'react'
import Cards from '../Cards/Cards'
import Items from '../Cards/Items'
import './Catalog.css'

function Catalog() {
 
  return (
    <div>
       
      <section className='filters_section'>
        <select className='select_filter' name="prices" id="prices">
        <option value="placeholder" disabled="" selected="">Sort by</option>
          <option value="range50-100">50$-100$</option>
          <option value="range100-150">100$-150$</option>
        </select>

        <select className='select_filter' name="sex" id="sex">
        <option value="placeholder" disabled="" selected="">Sex</option>
          <option value="men">men</option>
          <option value="women">women</option>
          <option value="kids">kids</option>
        </select>
        <select className='select_filter' name="color" id="color">
        <option value="placeholder" disabled="" selected="">Color</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="white">white</option>
          <option value="green">green</option>
        </select>
        <div className='second_catalog'>
          <input className='input_catalog' type="text" name="name" placeholder="Type me..."/>
          <button className='catalog_but'>Apply</button>
        </div>
      </section>
<Items/>
    </div>
 
  )
}

export default Catalog
