import React from 'react'
// import { useEffect } from 'react'
import jwt from 'jsonwebtoken'
// import { jwt } from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  // useEffect(() => {

  const token = localStorage.getItem('token');
  if (token) {
    const user = jwt.decode(token);
    if (!user) {
      localStorage.removeItem('token');
      navigate.push('/login');
    }

    //   }


    // })


    return (
      <>
        <h1>Dashboard</h1>
      </>

    )
  }
}
export default Dashboard