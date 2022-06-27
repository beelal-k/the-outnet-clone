import React from 'react'
import '../css/App.css'

const InfoBanner = () => {
    return (
        <>
            <div className='border-bottom p-2 container mb-2'>
            </div>

            <div className='container' id='underNav'>
                &emsp;
                &emsp;
                &emsp;
                <img src="https://img.icons8.com/pastel-glyph/28/000000/fast-delivery--v1.png" alt='...' className='' />
                <div className='inline underNavtext' >
                    Free express shipping over $300
                    <p className=' inline' id='underNavborder'>&emsp;</p>
                </div>

                <div className='inline smol'>
                    &emsp;
                    &emsp;
                    &emsp;&emsp;
                    <img src="https://img.icons8.com/pastel-glyph/32/000000/hanger--v1.png" alt='...' className='' />
                    <div className='inline underNavtext' >
                        15% off your first clothing order with FIRST15
                        <p className=' inline' id='underNavborder2'>&emsp;</p>
                    </div>
                    <p className='inline underNavtext'>
                        &emsp;
                        &emsp;
                        &emsp;
                        Shop now, pay later with Klarna. Learn more
                    </p>

                </div>



            </div>
        </>
    )
}

export default InfoBanner