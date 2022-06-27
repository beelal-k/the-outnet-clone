import React from 'react'
import { useState } from 'react';
import trash from '../images/delete.png'
// import cart from '../data/cartData';

const CartItem = ({ product }) => {

    let [amount, setAmount] = useState(1)


    let increment = () => {
        if (amount >= 1) {
            setAmount(amount + 1);
        }
    }

    let decrement = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }

    }

    return (
        <>
            <div className='testLeft '>
                <img src={product.image} className='cartImg' alt='...' />
                <div className='cartInfo'>
                    <h6>{product.brand}</h6>
                    <p>{product.desc}</p>
                    <p>Color&emsp;|&emsp;{product.color}</p>
                    <p id='prodPrice'>${product.price}</p>
                    <button className='inline amountBtns' id='subBtn' onClick={decrement}>-</button>
                    &emsp;
                    <p className='inline smol' id='amount'>{amount}</p>
                    &emsp;
                    <button className='inline amountBtns' id='addBtn' onClick={increment}>+</button>
                    &emsp;&emsp;<img src={trash} alt="..."/>

                </div>

            </div>

        </>
    )
}

export default CartItem