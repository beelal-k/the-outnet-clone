import React from 'react'
import { useState } from 'react';
import trash from '../images/delete.png'
// import cart from '../data/cartData';
// import { ToastContainer, toast } from 'react-toastify';
// import { cssTransition } from 'react-toastify';
import 'animate.css'
import 'react-toastify/dist/ReactToastify.css';
import '../css/CartItem.css'

const CartItem = ({ product }) => {

    let [amount, setAmount] = useState(1)

    // let cartFilter;
    // console.log(cartFilter)
    // const bounce = cssTransition({
    //     enter: "animate__animated animate__wobble",
    //     exit: "animate__animated animate__wobble"
    // })

    // const test = () => {
    //     toast.dark("This is how toast works!", {
    //         transition: bounce,
    //         pauseOnHover: false,
    //         closeButton: true,
    //         progress: 0,
    //         closeOnClick: true,
    //         autoClose: 500
    //     });
    // }


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

    // let filCart;
    // let temp;

    const delItem = async (e) => {
        const res = await fetch(`http://localhost:80/api/delprod/${e}`, {
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
                    {/* <ToastContainer limit={1} position="bottom-right" transition={bounce} autoClose={true} draggable={50} /> */}
                </div>

            </div>

        </>
    )
}

export default CartItem