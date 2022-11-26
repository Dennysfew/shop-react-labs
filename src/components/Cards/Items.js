import React, { useEffect, useState } from 'react'
import CardItem from './CardItem.js'
import './Cards.css'
import './Items.css'
import axios from "axios";
import Loader from "../../components/Loader/Loader.js";

function Items() {


  const [loading, setLoading] = useState(true)
  const [clothers, setClothers] = useState([])

  useEffect(() => {
      axios.get('http://localhost:8080/api/сlothes').then(res => {
          setClothers(res.data)
      })
  }, [])
  setTimeout(() => {
    setLoading(false)
}, 200)




  const [filtered, setFiltered] = useState(clothers)
  const [value, setValue] = useState('')
  useEffect(() => {
    setFiltered(clothers)
  }, [clothers])

  function sexFilter(sex) {
    if (sex === 'Sex') {
      setFiltered(clothers)
    } else {
      let newClothes = [...clothers].filter(item => item.sex === sex)
      setFiltered(newClothes)
    }
  }
  function colorFilter(color) {
    if (color === 'Color') {
      setFiltered(clothers)
    } else {
      let newClothes = [...clothers].filter(item => item.color === color)
      setFiltered(newClothes)
    }
  }
  function priceFilter(price) {
    if (price === 'Price') {
      setFiltered(clothers)
    } else if (price === '50$-100$') {
      let newClothes = [...clothers].filter(item => item.price > 50 && item.price < 100)
      setFiltered(newClothes)
    } else {
      let newClothes = [...clothers].filter(item => item.price > 100 && item.price < 150)
      setFiltered(newClothes)
    }
  }

  const filteredArray = filtered.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })
  let rendered_items_list = filteredArray.map(
    (item) =>
      <CardItem
        src={item.image}
        text={item.name}
        label={item.sex}
        price={item.price}
        sex={item.sex}
        color={item.color}
        description={item.description}
        id={item.id}
        key={item.id}
      />
  )

  return (
    
    <>
     {loading ?
     <Loader/>
     :
     <div>
      <section className='filters_section'>
        <select className='select_filter' name="prices" id="prices" onChange={() => priceFilter(document.getElementById("prices").options[document.getElementById("prices").selectedIndex].text)}>
          <option value="placeholder" disabled="" selected="">Price</option>
          <option value="range50-100">50$-100$</option>
          <option value="range100-150">100$-150$</option>
        </select>


        <select className='select_filter' name="sex" id="sex" onChange={() => sexFilter(document.getElementById("sex").options[document.getElementById("sex").selectedIndex].text)}>
          <option value="all" disabled="" selected="" name="all">Sex</option>
          <option value="men">men</option>
          <option value="women" name="women">women</option>
          <option value="kids" name="kids">kids</option>
        </select>


        <select className='select_filter' name="color" id="color" onChange={() => colorFilter(document.getElementById("color").options[document.getElementById("color").selectedIndex].text)}>
          <option value="placeholder" disabled="" selected="">Color</option>
          <option value="red">red</option>
          <option value="blue">Blue</option>
          <option value="white">Oatmeal</option>
          <option value="green">Light Sand</option>
        </select>

        <div className='second_catalog'>
          <input className='input_catalog' type="text" name="name" placeholder="Type me..." onChange={(event) => setValue(event.target.value)} />
          <button className='catalog_but'>Apply</button>
        </div>
      </section>
      <ul className='cards__items'>
        {rendered_items_list}
      </ul>
      </div>
}
    </>
  );
}

export default Items;