import React from 'react'
import '../css/App.css'
// import Header from '../components/Header.jsx'
// import Footer from '../components/Footer.jsx'
import Main1 from '../components/Main1.jsx'
import Sub1 from '../components/Sub1.jsx'
import Main2 from '../components/Main2.jsx'
import Sub2 from '../components/Sub2'
// import slider from 'react-slick'
// import SimpleSlider from '../components/Carousel'
import InfoBanner from '../components/InfoBanner'
// import { useEffect } from 'react'
function Home() {

    return (
        <>
            <InfoBanner />
            <Main1 />

            {/* <SimpleSlider /> */}

            <Sub1 />

            <Main2 />

            <Sub2 />

        </>
    )
}

export default Home