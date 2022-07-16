import React from 'react'
import { useEffect, useState } from 'react'
// import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'
// import Header from '../components/Header';
import InfoBanner from '../components/InfoBanner';
import '../css/Dashboard.css';

const Dashboard = () => {
  // let temp = 0;
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  // let fName = userData.firstName;


  const callDashboard = async () => {
    try {
      const res = await fetch('http://localhost:80/dashboard', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        credentials: 'include'

      })


      const data = await res.json();
      setUserData(data);
      // console.log(userData)
      console.log(data)
      // temp = 1;

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error;
      }

    }

    catch (err) {
      console.log(err)
      // if (temp === 1) {
      navigate('/login')
      // }
    }

  }

  useEffect(() => {
    callDashboard();

  }, [])



  return (
    <>
      <InfoBanner />
      <div className='container mt-5'>
        <div>
          <h5 className='morning'>GOOD MORNING {userData ? userData.firstName.toUpperCase() : ''} </h5>
          <h4 id='accHead'>Welcome to your Account</h4>
        </div>

        <div className='mt-3 d-flex flex-wrap'>
          <section className=' mt-3 sections'>
            <h6>My Orders</h6>
            <p>Track your orders to create a return</p>
          </section>
          <section className=' mt-3 sections'>
            <h6>Wishlist</h6>
            <p>Save items you love!</p>
          </section>
          <section className=' mt-3 sections'>
            <h6>Address Book</h6>
            <p>Managae your addresses</p>
          </section>
          <section className=' mt-3 sections'>
            <h6>Account Details</h6>
            <p>Change your sign in information</p>
          </section>
          <section className=' mt-3 sections'>
            <h6>Saved Cards</h6>
            <p>View and delete your payment details</p>
          </section>
          <section className=' mt-3 sections'>
            <h6>Marketing Preferences</h6>
            <p>Tailor your emails from us</p>
          </section>
        </div>
      </div>

    </>

  )
}

export default Dashboard