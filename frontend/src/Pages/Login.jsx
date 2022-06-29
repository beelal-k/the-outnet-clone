import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { useState } from 'react'

const Login = () => {

    const navigate = useNavigate()

    let [show, setShow] = useState('hide')
    let [red, setRed] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    // let [user, setUser] = useState()


    let checkEmpty = (e) => {
        let temp = e.target.value;
        if (temp.length <= 0) {
            setShow('')
            setRed('borderRed')
        }
        else {
            setShow('hide')
            setRed('');
        }

    }

    let data;

    const loginUser = async (e) => {

        e.preventDefault();

        const result = await fetch('http://localhost:80/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }

        )
        data = await result.json();

        console.log(data.user)
        if (result.status === 400 || !data) {
            alert('Invalid Credentials')
        }
        else {
            alert('Login Successful!')
            navigate('/')

        }
        // if (data.user === true) {
        //     alert('Login successful!')
        //     navigate('/');
        // }
        // else {
        //     alert('Please check your username and password')
        // }

        // console.log(result)
        // console.log(result.token)
    }

    return (
        <>
            <div className='container d-flex border mt-4 p-5 g-4' id='LoginBack'>
                <div className='container bg-white border' id='loginSect'>
                    <h6 className='border-bottom pb-4'>Welcome</h6>
                    {/* <br /> */}
                    <form>
                        <label className='pt-2 pb-1 labels' id='' >Email Address</label><br />
                        <input type='email' className={`loginInps ${red}`} name='email' onChange={(e) => setEmail(e.target.value)} />
                        <span className={`smol red ${show}`}>Email is required</span>
                        <br />
                        <br />
                        <Link to='/login' className='hrefs'>
                            <label className="form-control">
                                <input type="radio" name="radio" id='registered' className='radios' defaultChecked />
                                I'm already registered
                            </label>
                        </Link>
                        <Link to='/register' className='hrefs'>
                            <label className="form-control">
                                <input type="radio" name="radio" id='newUser' className='radios' />
                                I'm new to THE OUTNET
                            </label>
                        </Link>
                        {/* </form> */}
                        <br />
                        <label className={`pt-2 pb-1 labels registered`}>Password</label><br />
                        <input type='password' className={`loginInps ${red}`} name='password' onChange={(e) => setPassword(e.target.value)} />
                        <span className={`smol red ${show}`}>Password is required</span>
                        <br className={``} />
                        <br className={``} />
                        <br className={``} />
                        {/* <label className={` pb-1 labels newUser ${toggle}`}>Create New Password</label><br />
                        <input type='password' className={`loginInps ${toggle}`} name='password' />
                        <p className={`smol ${toggle}`}>Your password must be eight characters or more and contain an uppercase letter and number</p>
                        <label className={`pt-2 pb-1 labels newUser ${toggle}`}>First Name</label><br />
                        <input type='text' className={`loginInps ${toggle}`} name='firstName' />
                        <br className={`${toggle}`}/>
                        <br className={`${toggle}`}/>
                        <label className={`pt-2 pb-1 labels newUser ${toggle}`}>Last Name</label><br />
                        <input type='text' className={`loginInps ${toggle}`} name='lastName' id='' />
                        <br className={`${toggle}`}/>
                        <br className={`${toggle}`}/>
                        */}
                        <button id='signBtn' onClick={loginUser}>Sign In</button>
                        <br />
                        <br />
                        <Link to="/forgot" id='forgot' className={``}><p className={`smol registered`} >Forgot your password?</p></Link>
                    </form>

                </div>
            </div>

        </>

    )
}

export default Login