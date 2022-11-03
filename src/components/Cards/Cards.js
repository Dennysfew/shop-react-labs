import React, { useState } from 'react'
import CardItem from './CardItem.js'
import Child from './../images/Child.webp'
import men from './../images/men.jpeg'
import women from './../images/women.jpeg'
import './Cards.css'



const Cards = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='cards'>
      <h1>Our hottest proposition!</h1>
     
        <ul className='cards__items'>
          <CardItem
            src={Child}
            text='Explore new collection'
            label='Children'
            path='/item'
            price='70'
          />
          <CardItem
            src={men}
            text='Explore new collection'
            label='Men'
            path='/catalog'
            price='70'
          />
          <CardItem
            src={women}
            text='Explore new collection'
            label='Women'
            path='/catalog'
            price='70'
          />
           </ul>
           
         { show && <ul className='cards__items '>
           <CardItem
            src={women}
            text='Explore new collection'
            label='Womeттn'
            path='/catalog'
            price='70'
            
          />
          <CardItem
            src={women}
            text='Explore new collection'
            label='Womeттn'
            path='/catalog'
            price='70'
       
          />
        </ul>}
        
      <div className='view-more-bt'>
      <button className="view-more" onClick={() => setShow(!show)}>View more</button>
      </div>
    </div>
  );
}








export default Cards;