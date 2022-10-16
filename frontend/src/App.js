import React from 'react'
import './css/App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Browse from './Pages/Browse.jsx'
import SingleItem from './components/SingleItem.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import TestCart from './Pages/TestCart'
import Login from './Pages/Login'
import Bestsellers from './Pages/Bestsellers'
import Designers from './Pages/Designers'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Logout from './Pages/Logout'
import AccountDetails from './Pages/AccountDetails'
import DeleteAccount from './Pages/DeleteAccount'


function App() {

  
  
  return (
    <>
    
      <Header />


      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/browse/:_id' element={<SingleItem />} />
        <Route path='/cart' element={<TestCart />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/bestsellers' element={<Bestsellers />} />
        <Route path='/designers' element={<Designers />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/dashboard/user-details" element={<AccountDetails />} />
        <Route path="/dashboard/delete-account" element={<DeleteAccount />} />
      </Routes>



      <Footer />
    </>
  );
}

export default App;
