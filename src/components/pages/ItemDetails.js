import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import './ItemDetails.css'
import Loader from '../Loader/Loader';
import { useDispatch } from "react-redux"
import { addToCart } from '../../data/reducer.js';
function ItemDetails() {
    let {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [clothes, setClothes] = useState({id: 1, name: "none", price: 0, img: "", description: "", sex: "", color:""})
    
    const dispatch = useDispatch();
    let itemToCart = {name: clothes.name, price: clothes.price, count: 1, image: clothes.image};

    // const handleAddToCart = (clothes) => {
    //     dispatch(addToCart(clothes))
    // };
    setTimeout(() => {
        setLoading(false)
    }, 100)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/сlothes/${id}`).then(res => setClothes(res.data))
    }, [id])

  return (
    <>
    {loading ?
        <Loader/>
        :
    <div className="novelty">
      
        <section className='item-details'>
          <img src={clothes.image} />
          <div class="item-details__info">
            <div className='characteristics'>
              <p>{clothes.sex}</p>
              <p>{clothes.color}</p>
            </div>
            <h2 className='title'> {clothes.name}</h2>
            <p>
              {clothes.description}
            </p>

            <section className='choice'>
              <h2>
                {clothes.price} $
              </h2>
              <Link to='/catalog'>
                <button className='go-back-bt'>Go Back</button>
              </Link>
              <button className='add-bt' onClick={() => { dispatch(addToCart( itemToCart)) }}>Add to cart</button>
            </section>
          </div>
        </section>
    </div>
     }
     </>
  )
}

export default ItemDetails;