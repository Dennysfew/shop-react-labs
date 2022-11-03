import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import './ItemDetails.css'

function ItemDetails() {
    let {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [clothes, setClothes] = useState({id: 1, name: "none", price: 0, img: "", description: "", sex: "", color:""})

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/clothes/get/${id}`).then(res => setClothes(res.data))
    }, [id])

  return (
    <>
    {loading ?
        <Loader/>
        :
    <div className="novelty">
      
        <section className='item-details'>
          <img src={clothes.img} />
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
              <button className='add-bt'>Add to cart</button>
            </section>
          </div>
        </section>
    </div>
     }
     </>
  )
}

export default ItemDetails;