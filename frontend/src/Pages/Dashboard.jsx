import React from 'react'
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem('token');
        navigate.push('/login');
      }
      else {

        navigate(-1);

      }

    }


  })


  return (
    <>
      <h1>Dashboard</h1>
    </>

  )
}

export default Dashboard