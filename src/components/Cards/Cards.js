import React from 'react'
import CardItem from './CardItem.js'
import Child from './../images/Child.webp'
import men from './../images/men.jpeg'
import women from './../images/women.jpeg'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Our hottest proposition!</h1>


      <div className='cards__container'>
        <ul className='cards__items'>
          <CardItem
            src={Child}
            text='Explore new collection'
            label='Children'
            path='/catalog'
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
      </div>
      <div className='view-more-bt'>
        <button > View more</button>
      </div>
    </div>
  );
}

export default Cards;