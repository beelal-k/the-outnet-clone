import React from 'react'
import '../css/App.css'


function Main1() {
    return (
        <>
            <main className='container d-flex pt-5 g-0 text-center'>
                <div className='w-50'>
                    <img src='https://www.theoutnet.com/cms/ycm/resource/blob/1261094/04d135d071d9d055f4c2a562dfa8efae/main-1-image-data.jpg/w1500_q80.jpg' alt='...' className='w-100' />
                    <br />
                    <br />
                    <h6>24-HR FLASH SALE</h6>
                    <p className='smol'>For a limited time, enjoy more savings on already-discounted styles!</p>
                    <button className='mainBtns'>SHOP EXTRA 20% OFF</button>
                </div>
                &emsp;&nbsp;
                <div className='w-50'>
                    <img src='https://www.theoutnet.com/cms/ycm/resource/blob/1261106/8265d19173eb9720cf82cf3366478685/main-2-image-data.jpg/w1500_q80.jpg' alt='...' className='w-100' />
                    <br />
                    <br />
                    <h6>BRUNELLO CUCINELLI AT UP TO 70% OFF</h6>
                    <p className='smol'>Embrace the best from the luxurious label</p>
                    <button className='mainBtns'>SHOP BRUNELLO CUCINELLI</button>
                </div>
            </main>


        </>

    )
}

export default Main1