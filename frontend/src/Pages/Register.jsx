import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    let [show, setShow] = useState('hide')
    let [red, setRed] = useState('')

    let [firstName, setfirstName] = useState('');
    let [lastName, setlastName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [promo, setPromo] = useState(true);


    // let checkEmpty = (e) => {
    //     if (e.length <= 0) {
    //         setShow('')
    //         setRed('borderRed')

    //     }
    //     else {
    //         setShow('hide')
    //         setRed('');
    //     }

    const registerUser = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:80/api/register', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password, promo }),
            headers: {
                'content-type': 'application/json'
            }
            
        })

        result = await result.json();
        console.log(result);
        navigate('/login');
    }

    return (
        <>
            <div className='container d-flex border mt-4 p-5 g-4' id='LoginBack'>
                <div className='container bg-white border' id='loginSect'>
                    <h6 className='border-bottom pb-4'>Register now</h6>
                    <form>
                        <label className={`pt-2 pb-1 labels ${red}`} id='' >Email Address</label><br />
                        <input type='email' className='loginInps' name='email' onChange={(e) => { setEmail(e.target.value); }} />
                        <span className={`smol red ${show}`}>Email is required</span>
                        <br />
                        <br />
                        {/* <input type='radio' id='registered' name='reg_user' className='radios'/>
                    <label className='' for="registered">&emsp;I'm already registered</label>
                    <br />
                    <input type='radio' id='newUser' name='reg_user' className='radios'/>
                    <label className='' for="newUser">&emsp;I'm new to THE OUTNET</label> */}
                        {/* <form action=""> */}
                        <Link to='/login' className='hrefs'>
                            <label className="form-control">
                                <input type="radio" name="radio" id='registered' className='radios' />
                                I'm already registered
                            </label>
                        </Link>

                        <Link to='/register' className='hrefs'>
                            <label className="form-control">
                                <input type="radio" name="radio" id='newUser' className='radios' defaultChecked />
                                I'm new to THE OUTNET
                            </label>
                        </Link>
                        {/* </form> */}
                        <br />
                        {/* <label className={`pt-2 pb-1 labels registered ${inverseToggle}`}>Password</label><br />
                        <input type='password' className={`loginInps ${inverseToggle}`} name='password' /> */}
                        <label className="pb-1 labels newUser">Create New Password</label><br />
                        <input type='password' className={`loginInps`} name='password' onChange={(e) => { setPassword(e.target.value); }} />
                        <p className={`smol`}>Your password must be eight characters or more and contain an uppercase letter and number</p>
                        <label className={`pt-2 pb-1 labels newUser `}>First Name</label><br />
                        <input type='text' className={`loginInps `} name='firstName' onChange={(e) => { setfirstName(e.target.value); }} />
                        <span className={`smol red ${show}`}>First name is required</span>
                        <br className={``} />
                        <br className={``} />
                        <label className={`pt-2 pb-1 labels newUser `}>Last Name</label><br />
                        <input type='text' className={`loginInps `} name='lastName' id='' onChange={(e) => { setlastName(e.target.value); }} />
                        <span className={`smol red ${show}`}>Last name is required</span>
                        <br className={``} />
                        <br className={``} />
                        <p>Want to remain stylishly in the know? Please tick here to receive THE OUTNET's promotional emails.</p>
                        <label className="form-control">
                            <input type="radio" name="promos" id='promoYes' className='radios' />
                            Yes please!
                        </label>
                        <label className="form-control">
                            <input type="radio" name="promos" id='promoNo' className='radios' />
                            No thanks
                        </label>
                        <p className='smol'>Find out more about our <Link to='...' className="blk">Privacy Policy</Link></p>
                        <button id='signBtn' onClick={(e) => { registerUser(e); }}>Register</button>
                        <br />
                        <br />
                    </form>

                </div>
            </div>

        </>

    )
}

export default Register