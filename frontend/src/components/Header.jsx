import React from 'react'
import '../css/App.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { Cookies } from 'react-cookie'
// import Login from '../Pages/Login'

function Header({ user }) {

    const logOut = () => {

        Cookies.remove("jwtoken", {path: '/'})

    }


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
                    <Link to='/login' className="hrefs"><p className='sign inline smol'>{user ? user.firstName : "Sign In"}</p></Link>
                    <p className='border-end' id='gspace'>&emsp;</p>
                    <button className='sign inline smol' onClick={logOut}>&emsp;Log Out</button>
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
                    <Link to='/browse' className='link'><li>Just In</li></Link>
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