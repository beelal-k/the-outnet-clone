import React from 'react'
import '../css/App.css'
import Main1 from '../components/Main1.jsx'
import Sub1 from '../components/Sub1.jsx'
import Main2 from '../components/Main2.jsx'
import Sub2 from '../components/Sub2'
import InfoBanner from '../components/InfoBanner'
function Home() {

    return (
        <>
            <InfoBanner />
            <Main1 />


            <Sub1 />

            <Main2 />

            <Sub2 />

        </>
    )
}

export default Home