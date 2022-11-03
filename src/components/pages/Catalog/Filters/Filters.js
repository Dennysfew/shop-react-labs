import React, { useState } from 'react'
import './Filters.css'
function Filters() {
    

    return (

        <section className='filters_section'>
            <select className='select_filter' name="prices" id="prices">
                <option value="placeholder" disabled="" selected="">Sort by</option>
                <option value="range50-100">50$-100$</option>
                <option value="range100-150">100$-150$</option>
            </select>

            <select className='select_filter' name="sex" id="sex">
                {/* <option value="placeholder" disabled="" selected="" onClick={() => sexFilter('all')} >Sex</option>
                <option value="men" onClick={() => sexFilter('men')}>men</option>
                <option value="women" onClick={() => sexFilter('women')}>women</option>
                <option value="kids" onClick={() => sexFilter('kids')}>kids</option> */}
            </select>
            <select className='select_filter' name="color" id="color">
                <option value="placeholder" disabled="" selected="">Color</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="white">white</option>
                <option value="green">green</option>
            </select>
            <div className='second_catalog'>
                <input className='input_catalog' type="text" name="name" placeholder="Type me..." />
                <button className='catalog_but'>Apply</button>
            </div>
        </section>

    )
}

export default Filters