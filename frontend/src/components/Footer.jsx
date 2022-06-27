import React from 'react'
import '../css/App.css'


function Footer() {
    return (
        <>
            <br />
            <hr className='container' />
            <footer className='container d-flex'>


                <div className='container d-flex pt-3'>
                    <div className=' w-50'>
                        <p className='help'>Help and Information</p>
                        <ul className='lists '>
                            <li>About Us</li>
                            <li>Affiliates</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Help</li>
                            <li>Our Considered Pledge</li>
                            <li>Clothing Care Guides</li>
                            <li>How To Find Your Size With Fit Finder</li>
                            <li>Delivery</li>
                            <li>Returns & Refunds</li>
                            <li>Tract Your Order</li>
                            <li>Create A Return</li>
                            <li>Tract Your Return</li>
                            <li>Payment</li>
                            <li>Student Discount</li>
                            <li>Our Resale Service</li>
                        </ul>

                    </div>
                    <div className='rightfooter'>
                        <p className='bold'>Want to stay stylishly in the know?</p>
                        <p className=''>Sign up today for email exclusives including early access to Sale, the latest trends and arrivals from your favorite designers and can’t miss promotions.</p>
                        <input type='email' placeholder='Enter your Email Address' className='email'></input>
                        <button type='submit' className='emailBtn'>Subscribe</button>
                        <br />
                        <br />
                        <p className='bold'>24/7 Customer Care</p>
                        <img src="https://img.icons8.com/ios-glyphs/22/000000/phone--v1.png" alt='...' />
                        <p className='inline number'>&emsp;+1 888 9 688638</p>
                        <br />
                        <br />
                        <img src="https://img.icons8.com/material-outlined/25/000000/filled-message.png" alt='...' />
                        <p className='inline'>&emsp;customercare@theoutnet.com</p>
                    </div>
                </div>

            </footer>
            <br />
            <hr className='container' />
            <div className='container text-end'>
                <p className='vsmol'>© 2009 - 2022 THE OUTNET , part of YOOX NET-A-PORTER GROUP.
                    <br />
                    The individuals featured on this site do not endorse THE OUTNET or the products shown.</p>
            </div>

        </>
    )
}

export default Footer