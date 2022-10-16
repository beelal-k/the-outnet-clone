import React from 'react'
import '../css/App.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
// import { useEffect } from 'react'
// import { Cookies } from 'react-cookie'
// import Login from '../Pages/Login'

const Header = () => {

    const [user, setUser] = useState();
    // const [refreshKey, setRefreshKey] = useState(0)
    const getName = async () => {
        try {
            const res = await fetch('http://localhost:80/api/header', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'content-type': 'application/json'
                },
                credentials: 'include'
            })

            const data = await res.json();
            setUser(data);
            console.log(data);
        }
        catch (err) {
            console.log(err)

        }
    }

    useEffect(() => {
        getName();

    }, [])


    return (

        <>

            <div className='text-end ' id='track'>
                Track Your Order | Create A Return | Customer Care | Delivery | Returns
            </div>
            <header className=' d-flex'>
                &emsp;
                &emsp;&emsp;&nbsp;
                <div className=' col-xl-4' id='leftHead'>
                    <Link to='/dashboard'><img src="https://img.icons8.com/small/30/000000/gender-neutral-user.png" alt='...' className='profIcon inline' /></Link>
                    {user ?
                    // eslint-disable-next-line
                        <Link to='/dashboard' className="hrefs"><p className='sign inline smol'>{user ? 'Hello,' + ' ' + user.firstName : "Sign In"}</p></Link>
                        :

                    // eslint-disable-next-line
                        <Link to='/login' className="hrefs"><p className='sign inline smol'>{user ? 'Hello,' + ' ' + user.firstName : "Sign In"}</p></Link>
                    }
                    <p className='border-end' id='gspace'>&emsp;</p>
                    {

                    }
                    <Link to='/logout' className='hrefs'><span className={`sign inline smol ${user ? null : "hide"}`}>&emsp;Log Out</span></Link>
                </div>
                <div className='col-xl-4  '>
                    <Link to='/'><img src={logo} alt='...' className=' logo' /></Link>
                </div>
                <div className='col-xl-3' id='rightHead'>
                    <img src="https://img.icons8.com/fluency-systems-regular/25/000000/search--v1.png" alt='...' className='inline' />
                    <p className='inline smol ' id='search'>Search</p>
                    <p className='border-end' id='gspace'>&emsp;</p>&emsp;
                    <Link to='/testcart'><img src="https://img.icons8.com/material-outlined/25/000000/like--v1.png" alt='...' className='inline' /></Link>&emsp;
                    <Link to='/cart'><img src="https://img.icons8.com/small/30/000000/shopping-bag.png" alt='...' className='inline' /></Link>
                </div>
            </header>

            <nav className='container offset-xl-2' id='navbar'>
                <ul className='inline smol' id='navbarUL'>
                    <Link to='/superbrands' className='link'><li>Superbrands</li></Link>
                    <Link to='/browse' className='link'><li><b>Just In</b></li></Link>
                    <Link to='/bestsellers' className='link'><li>Bestsellers</li></Link>
                    <Link to='/designers' className='link'><li>Designers</li></Link>
                    <Link to='/superbrands' className='link'><li>Clothing</li></Link>
                    <Link to='/superbrands' className='link'><li>Shoes</li></Link>
                    <Link to='/superbrands' className='link'><li>Bags</li></Link>
                    <Link to='/superbrands' className='link'><li>Accessories</li></Link>
                    <Link to='/superbrands' className='link'> <li>70% Off</li></Link>
                    <Link to='/superbrands' className='link'><li>Iris & Ink</li></Link>
                    <Link to='/superbrands' className='link'><li>Editorial</li></Link>

                </ul>

            </nav>

        </>
    )
}

export default Header