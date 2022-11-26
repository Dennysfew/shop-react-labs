
import './Cart.css'
import React from 'react'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { clearCart } from '../../../data/reducer'
import CartItem from './CartItem'
import './Cart.css'

export default function Cart() {
    const cart = useSelector((state) => state.items.cart);
    const dispatch = useDispatch();
    let totalSum = 0;
    cart.map(item => { totalSum = item.sum + totalSum })
    return (
        <>

            <main>
                <h1>Shopping Cart</h1>

                <div className="cartList">
                    {cart.length > 0 ? cart.map(item => 
                        <CartItem key={item.item.name} element={item.item} sum={item.sum} />)
                        : <div></div>}

                </div>
                {totalSum > 0 ? <div className="Total">
                    <h3>Total sum</h3>
                    <h3>{totalSum}</h3>

                </div>
                    : <h2 className='cartEmpty'>Cart is empty</h2>}
            </main>


            <div className='navigationCart'>

                <Link to='/catalog'> <button> Back to catalog</button> </Link>
                <button onClick={() => dispatch(clearCart())}> Clear</button>

            </div>


        </>




    )
}