import React from 'react'
import { Link, useLocation } from "react-router-dom"
import Clothes from '../../models/Clothes';
import './ItemDetails.css'

function ItemDetails() {
  const location = useLocation();
  const state = location.state;
  console.log(state)

  return (
    <div className="novelty">
      {state && (<>
        <section className='item-details'>
          <img src={state.img} />
          <div class="item-details__info">
            <div className='characteristics'>
              <p>{state.sex}</p>
              <p>{state.color}</p>
            </div>
            <h2 className='title'> {state.name}</h2>
            <p>
              {state.description}
            </p>

            <section className='choice'>
              <h2>
                {state.price} $
              </h2>
              <Link to='/catalog'>
                <button className='go-back-bt'>Go Back</button>
              </Link>
              <button className='add-bt'>Add to cart</button>
            </section>
          </div>


        </section>

      </>
      )}
    </div>

  )
}

export default ItemDetails;