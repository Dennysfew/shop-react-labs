import React from 'react'
import CardItem from './CardItem.js'
import Child from './../images/Child.webp'
import men from './../images/men.jpeg'
import women from './../images/women.jpeg'
import './Cards.css'
import './Items.css'
import Clothes from '../../models/Clothes.js'
function Items() {



  let rendered_items_list = Clothes.map(
    (item) => 
    <CardItem
    src={item.image}
    text={item.name}
    label={item.sex}
    path='/catalog'
    price={item.price}
  />
)

  return (
  
          <ul className='cards__items'>
            {rendered_items_list}
            {/* <CardItem
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
             <CardItem
              src={women}
              text='Explore new collection'
              label='Women'
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
         <CardItem
              src={women}
              text='Explore new collection'
              label='Women'
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
            <CardItem
              src={women}
              text='Explore new collection'
              label='Women'
              path='/catalog'
              price='70'
            /> */}
            
          </ul>
      
    
  );
}

export default Items;