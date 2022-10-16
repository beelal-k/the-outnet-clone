import React from 'react'
import '../css/Cart.css'


const Cart = () => {

    return (
        <>

            <div className='p-1' id='background'>
                <header className=' container col-12 ' id='top'>
                    <h6>Shopping Bag</h6>
                    <p>Amount of items // To be added with data</p>
                </header>
                <div className='container d-flex'>
                    <section id='left' className='container d-flex align-items-center'>
                        

                    </section>
                    &nbsp;&nbsp;
                    <section id='right' className=' container d-flex'>
                        <h6 className='text-center pb-2'>Order Summary</h6>
                        <div className='d-flex col justify-content-between'>
                            <p>Sub-Total</p>
                            <p>PRICE</p>
                        </div>
                        <div className='d-flex col justify-content-between'>
                            <p>Shipping</p>
                            <p>PRICE</p>
                        </div>

                        <br />
                        <hr className='container p-0' />
                        <div className='d-flex col justify-content-between pt-2'>
                            <h6>Total (USD)</h6>
                            <h6>PRICE</h6>
                        </div>
                        <br />
                        <button className='checkout'>Proceed To Checkout</button>
                    </section>
                </div >
                &emsp;
            </div >
        </>

    )

}

export default Cart