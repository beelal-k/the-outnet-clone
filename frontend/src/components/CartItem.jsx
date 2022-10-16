import React from 'react'
import { useState } from 'react';
import trash from '../images/delete.png'

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

    const delItem = async (e) => {
        await fetch(`http://localhost:80/api/delprod/${e}`, {
            method: 'put',
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            credentials: 'include'

        
        })

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
                    &emsp;&emsp;<button onClick={() => delItem(product._id)}><img src={trash} alt="..." /></button>
                </div>

            </div>

        </>
    )
}

export default CartItem