import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import InfoBanner from '../components/InfoBanner';
import '../css/Browse.css'


function Browse() {

  
  const [product, setProduct] = useState([]);
  
  
  const getProducts = async () => {
    
    const res = await fetch("http://localhost:80/browse", {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      credentials: 'include'
      
    })

    const data = await res.json();
    setProduct(data)

    
    
  }

  useEffect(() => {

    getProducts();
    
  }, [])
  
  console.log(product)

  
  return (
    <>

      <InfoBanner />
      <section className='container underHead text-left'>
        <div className=' underHeadLeft'>
          <h4 className=''>JUST IN</h4>
          <p className='small'>With our brand-new campaign out now, it’s safe to say
            that the secret’s out:
            Smart Women Shop THE OUTNET.
            Count yourself as one of them?
            Join an army of other savvy shoppers by scrolling Just In, it’s where the brainstorming begins after all…

          </p>
          <div className='small'>
            <a href='...' className='blk'>Clothing</a>&emsp;
            <a href='...' className='blk'>Dresses</a>&emsp;
            <a href='...' className='blk'>Shoes</a>&emsp;
            <a href='...' className='blk'>Bags</a>
          </div>
        </div>

        <div className='underHeadRight pt-4 w-50 text-end'>
          <img src='https://www.theoutnet.com/ycm/resource/blob/462652/3abe73457fd8bea8b45fc9c883b230a5/just-in-s-data.jpg?imwidth=3000&improfile=isc' alt='...' className='' />
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

          {product.map(prod => {
            return (
              <>

                <div className='row'>
                  <div className='text-center pt-4'>
                    <Link to={`/browse/${prod._id}`}><img src={prod.image} alt='...' className='w-75' /></Link>
                    <Link to={`/browse/${prod._id}`} className='hrefs'><h6 className='pt-2'>{prod.brand}</h6></Link>
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

export default Browse