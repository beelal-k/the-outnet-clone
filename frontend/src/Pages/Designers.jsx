import React from 'react'
import { Link } from 'react-router-dom'
import InfoBanner from '../components/InfoBanner';
import '../css/Browse.css'
import products from '../data/data.js'

function Designers() {

  let items = products;


  return (
    <>
    
      <InfoBanner />
      <section className='container underHead text-left'>
        <div className=' underHeadLeft'>
          <h4 className=''>DESIGNERS</h4>
          <p className='small'>Need a style pick-me-up? Explore the popular pieces you can’t seem to get enough of. Including Sandro,
            Acne Studios and many more
            of the coveted menswear designers that are repeatedly
            added-to-basket — we think you’ll be quick off the mark with these!

          </p>
       
        </div>

        <div className='underHeadRight pt-4 w-50 text-end'>
          <img src='https://www.theoutnet.com/ycm/resource/blob/1229948/4ba1342536b4df929473d6c284f35a73/mens-clothing-image-data.jpg?imwidth=3000&improfile=isc' alt='...' className='' />
        </div>

      </section>

      <br />
      <br />
      <br />

      <section className='container d-flex '>
        <div className='pt-4' id='filterSection'>
          <p className=' pt-3'>Brand&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i className='fa fa-angle-down '></i></p>
          <input type='radio' />
          <label className='smol p-1'>MARCHESSA NOTEE</label>
          <br />
          <input type='radio' />
          <label className='smol p-1'>SAINT LAURENT</label>
          <br />
          <input type='radio' />
          <label className='smol p-1'>JIMMY CHOO</label>
        </div>
        &emsp;
        <div className='' id='itemSection'>

          {items.map(prod => {
            return (
              <>

                <div className='row'>
                  <div className='text-center pt-4'>
                    <Link to={`/browse/${prod.id}`}><img src={prod.image} alt='...' className='w-75' /></Link>
                    <Link to={`/browse/${prod.id}`} className='hrefs'><h6 className='pt-2'>{prod.brand}</h6></Link>
                    <p className='small'>{prod.desc}</p>
                    <h6>${prod.price}</h6>

                  </div>

                </div>
              </>

            )
          })



          }
        </div>

      </section>


    </>
  )
}

export default Designers