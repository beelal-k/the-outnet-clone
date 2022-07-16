import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/data.js'
import '../css/SingleItem.css'
import { Link } from 'react-router-dom'
import InfoBanner from './InfoBanner.jsx'
import cart from '../data/cartData.js'


const SingleItem = () => {

    let items = products

    let { id } = useParams();
    let prodData = products.find(e => e.id === Number(id))

    const addCart = () => {

        let temp = [];
        let item = items.find(x => x.id === Number(id))
        temp.push(item)

        cart.push(temp[0])
        temp = []
        console.log(cart)
        // console.log(temp)
        // console.log(products)
    }

    return (
        <>
            <InfoBanner />

            <br />
            <br />
            <br />

            <section className='container d-flex'>

                <div id='itemleft' className='text-center'>
                    <img src={prodData.image} alt='...' className='w-50' />
                </div>

                <div id='itemright' className='container'>

                    <span className='smol'>JUST IN</span><br />
                    <span className='big'>{prodData.brand}</span><br />
                    <span className='smol'>{prodData.desc}</span>
                    <br />
                    <br />
                    <h6>${prodData.price}</h6>
                    <br />
                    <p className='smol'>Colour: Pink</p>
                    <br />
                    <span className='smol'>Select a size</span>
                    <br />
                    <button className='btns'>US 2</button>
                    <button className='btns'>US 4</button>
                    <button className='btns'>US 6</button>
                    <button className='btns'>US 8</button>
                    <br />
                    <br />
                    <br />
                    <button className='col-11' id='add2cart' onClick={addCart}>Add To Bag</button>
                    <br />
                    <button className='col-11' id='add2wish'>Add To Wish List</button>

                </div>


            </section>


            <div id='alsoSection' className='container'>
                <br />
                <br />
                <hr className='col-12' />
                <h6 className='pt-2'>
                    You May Also Like
                </h6>
                <div className='container' id='alsoItems'>
                    {items.filter(prod => prod.brand === prodData.brand).map(prods => {
                        return (
                            <>

                                <div className='row w-25'>
                                    <div className='text-center pt-4'>
                                        <img src={prods.image} alt='...' className='w-75' />
                                        <Link to={`/browse/${prods.id}`} className='hrefs'><h6 className='pt-2'>{prods.brand}</h6></Link>
                                        <p className='small'>{prods.desc}</p>
                                        <h6>${prods.price}</h6>

                                    </div>

                                </div>
                            </>

                        )
                    })



                    }
                </div>
            </div>

        </>
    )
}

export default SingleItem