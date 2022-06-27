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
import RegisteredPages from './Pages/RegisteredPages'


function App() {
  return (
    <>

      {/* HEADER  */}
      <Header />
      {/* FIRST SECTION OF THE HOME PAGE */}


      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/browse/:id' element={<SingleItem />} />
        <Route path='/cart' element={<TestCart />} />
        {/* <Route path='/testcart' element={<TestCart />} /> */}
        <Route path='*' element={<ErrorPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/bestsellers' element={<Bestsellers />} />
        <Route path='/designers' element={<Designers />} />
        <Route element={<RegisteredPages />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>

      {/* THIS IS THE FOOTER */}


      <Footer />
    </>
  );
}

export default App;
