import React from 'react'
import CardItem from './../Cards/CardItem'
import Child from './../../images/Child.webp'
import men from './../../images/men.jpeg'
import women from './../../images/women.jpeg'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Our hottest proposition🔥!</h1>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
              src={Child}
              text='Explore new collection'
              label='Children'
              path='/catalog'
            />
            <CardItem
              src={men}
              text='Explore new collection'
              label='Men'
              path='/catalog'
            />
            <CardItem
              src={women}
              text='Explore new collection'
              label='Women'
              path='/catalog'
            />
          </ul>
      </div>
    </div>
  );
}

export default Cards;