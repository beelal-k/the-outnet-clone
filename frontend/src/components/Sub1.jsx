import React from 'react'
import '../css/Sub1.css'
import '../css/App.css'

function Sub1() {
  return (
    <>
      <main className='container d-flex pt-5 mt-4 g-0 text-center'>
        <div className='width'>
          <img src='https://www.theoutnet.com/cms/ycm/resource/blob/1261210/63df7e8e392bde75e8c0d68955787808/promo-1-image-data.jpg/w1500_q80.jpg' alt='...' className='w-100' />
          <br />
          <br />
          <h6>STAR SHIRTS AT UP TO 60% OFF</h6>
          <p className='smol'>Find a few you'll always go to!</p>
          <button className='mainBtns'>SHOP SHIRTS</button>
        </div>
        
        &emsp;&nbsp;
        
        <div className='width'>
          <img src='https://www.theoutnet.com/cms/ycm/resource/blob/1261198/457cc3a4f58afb7576af45e3c184510c/promo-2-image-data.jpg/w1500_q80.jpg' alt='...' className='w-100' />
          <br />
          <br />
          <h6><span className='vsmol'>NEW SEASON AT OUTNET</span> <br/>  A WHOLE LOT MORE</h6>
          <p className='smol'>Seize the day this MAy with more color, joy and style for less!</p>
          <button className='mainBtns'>SHOP NEW SEASON</button>
        </div>
        
        &emsp;&nbsp;

        <div className='width'>
          <img src='https://www.theoutnet.com/cms/ycm/resource/blob/1261202/a65cc64a2b66da7b5e9b5c49e945b03f/promo-3-image-data.jpg/w1500_q80.jpg' alt='...' className='w-100' />
          <br />
          <br />
          <h6>PRETTY MIDIS AT UP TO 60% OFF</h6>
          <p className='smol'>Get your wardrobe ready for spring wit midi or two</p>
          <button className='mainBtns'>SHOP MIDI DRESSES</button>
        </div>
      </main>

    </>
  )
}

export default Sub1