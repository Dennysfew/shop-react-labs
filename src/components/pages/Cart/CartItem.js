import React from 'react'
import { useDispatch } from "react-redux"
import { setNewPrice, removeFromCart } from '../../../data/reducer.js'
import './CartItem.css'

export default function CartItem(props) {
    const dispatch = useDispatch();

    return (
        <div className="container">

            <img className='CartImg' src={props.element.image} />
            <h3>
                {props.element.name}
            </h3>

            <h4>Total price: </h4>
            {props.sum}

            <div className="changeCount">
                <button onClick={() => dispatch(setNewPrice({ item: props.element, sum: props.sum - props.element.price, count: parseInt(props.element.count) - 1 }))} > - </button>
                <div className="count">{props.element.count}</div>
                <button onClick={() => dispatch(setNewPrice({ item: props.element, sum: props.sum + props.element.price, count: parseInt(props.element.count) + 1 }))}> + </button>
            </div>
            <button onClick={() => dispatch(removeFromCart(props.element))} > Remove </button>

        </div>

    )
}