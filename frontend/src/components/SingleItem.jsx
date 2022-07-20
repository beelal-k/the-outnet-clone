import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
// import products from '../data/data.js'
import '../css/SingleItem.css'
// import { Link } from 'react-router-dom'
import InfoBanner from './InfoBanner.jsx'
// import cart from '../data/cartData.js'
import { useEffect } from 'react'


const SingleItem = () => {

    // let items = products

    let { _id } = useParams();

    const [item, setItem] = useState([]);
    const [prodID, setprodID] = useState();

    const getProduct = async () => {

        const res = await fetch("http://localhost:80/browse", {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            credentials: 'include'

        })

        const data = await res.json();
        // setProduct(data)
        const temp = data.filter(e => e._id === _id)
        console.log(temp)
        setItem(temp)
        setprodID(_id)
        // console.log(product)
        // console.log(data);  


    }

    // console.log(product)
    // let prodData = products.find(e => e.id === Number(_id))

    console.log(_id)


    useEffect(() => {
        getProduct();
        window.scrollTo(0, 0)

    }, [])

    // const handleClick = async (e) => {
    //     e.preventDefault()
    //     try {
    //         fetch("http://localhost:80/api/a2c", {
    //             method: 'PUT',
    //             body: JSON.stringify({ prodID }),
    //             headers: {
    //                 "content-type": "application/json"
    //             }
    //         })
    //         // const data = await res.json();
    //         // console.log(data);
    //         console.log("Product added to cart");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


    // console.log(product[0].brand)

    // const addCart = () => {

    //     let temp = [];
    //     let item = items.find(x => x.id === Number(_id))
    //     temp.push(item)

    //     cart.push(temp[0])
    //     temp = []
    //     console.log(cart)
    //     // console.log(temp)
    //     // console.log(products)
    // }
    // console.log(product)

    return (
        <>
            <InfoBanner />

            <br />
            <br />
            <br />

            {item.map(e => {
                return (
                    <>
                        <section className='container d-flex'>

                            <div id='itemleft' className='text-center'>
                                <img src={e.image} alt='...' className='w-50' />
                            </div>

                            <div id='itemright' className='container'>

                                <span className='smol'>JUST IN</span><br />
                                <span className='big'>{e.brand}</span><br />
                                <span className='smol'>{e.desc}</span>
                                <br />
                                <br />
                                <h6>${e.price}</h6>
                                <br />
                                <p className='smol'>Color: {e.color}</p>
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
                                <button className='col-11' id='add2cart'>Add To Bag</button>
                                <br />
                                <button className='col-11' id='add2wish'>Add To Wish List</button>

                            </div>


                        </section>
                    </>
                )
            })

            }

            <div id='alsoSection' className='container'>
                <br />
                <br />
                <hr className='col-12' />
                <h6 className='pt-2'>
                    You May Also Like
                </h6>
                {/* <div className='container' id='alsoItems'>
                    {product.filter(prod => prod.brand === product.brand).map(prods => {
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
                </div> */}
            </div>

        </>
    )
}

export default SingleItem