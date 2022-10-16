import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoBanner from '../components/InfoBanner';
import '../css/Dashboard.css';
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();


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
      console.log(data)

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error;
      }

    }

    catch (err) {
      console.log(err)
      navigate('/login')
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
          <Link to='/dashboard/user-details' className='links mt-3 sections'>
            <section className=' '>
            <h6>Account Details</h6>
            <p>Change your sign in information</p>
          </section></Link>
          <section className=' mt-3 sections'>
            <h6>Saved Cards</h6>
            <p>View and delete your payment details</p>
          </section>
          <section className=' mt-3 sections'>
            <h6>Marketing Preferences</h6>
            <p>Tailor your emails from us</p>
          </section>
          <Link to='/dashboard/delete-account' className='deleteLink mt-3 sections deleteSection'>
            <section className='  '>
              <h6>Delete Account</h6>
              <p>Delete your account permanently</p>
        </section>
        </Link>
      </div>
    </div>

    </>

  )
}

export default Dashboard