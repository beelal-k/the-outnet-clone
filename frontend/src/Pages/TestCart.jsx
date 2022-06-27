import React from 'react'
import CartItem from '../components/CartItem'
import '../css/TestCart.css'
import cart from '../data/cartData';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import Cart from './Cart';

const TestCart = () => {

    // let total = () => {

    //     let temp;
    //     let cartTemp=[];
    //     temp = cart.map(x => Number(x.price))
    //     for(let i = 0; i <= temp.length; i++){
    //         let num = temp[i] + temp[i+1]
    //         cartTemp.push(num)
    //         // console.log(num)        
    //     }
    //     console.log(temp)
    //     console.log(cartTemp)


    // }
    let temp = 0;
    let len;
    let subPrice = 0;
    let shipPrice = 0;
    let totalPrice = 0;
    // let total = () => {

    if (cart.length >= 1) {
        shipPrice = 2;
        temp = cart.map(x => temp = temp + Number(x.price));
        len = temp.length;
        subPrice = temp[len - 1];
        console.log(len);
        console.log(temp);
        totalPrice = shipPrice + subPrice;
    }
    // console.log(total);
    // }

    return (
        <>

            <div className='backTest'>
                <div className='heading' id='top'>
                    <h6>Shopping Bag</h6>
                    <p>Amount of items // To be added with data</p>

                </div>
                <div className='something'>
                    <div className='nothing'>
                        {
                            cart.length >= 1 ? cart.map(prod => { return (<CartItem product={prod} />) }) : <div className='text-center pt-5 mt-5 '><h1>Cart is empty!</h1><Link to="/" className='goshopping'><h6>GO SHOPPING!</h6></Link></div>
                        }

                    </div>


                    <div className='testRight' id='right'>
                        <div className='nothing2'>
                            <h6 className='text-center pb-2'>Order Summary</h6>
                            <div className='d-flex col justify-content-between'>
                                <p>Sub-Total</p>
                                <p id='subPrice'>${subPrice}</p>
                            </div>
                            <div className='d-flex col justify-content-between'>
                                <p>Shipping</p>
                                <p id='shipPrice'>${shipPrice}</p>
                            </div>

                            <br />
                            <hr className='container p-0' />
                            <div className='d-flex col justify-content-between pt-2'>
                                <h6>Total (USD)</h6>
                                <h6 id='totalPrice'>${totalPrice}</h6>
                            </div>
                            <br />
                            <button className='checkout'>Proceed To Checkout</button>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default TestCart