import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AccountDetails = () => {

    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState();

    const getUserDetails = async () => {
        try {
            const res = await fetch('http://localhost:80/dashboard/user-details', {
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



    const updatePassword = () => {
        const updateBtn = document.getElementById('updateBtn')
        const updatePassSection = document.getElementById('updateSection');

        updateBtn.style.display = "none"
        updatePassSection.style.display = "block"
    }

    const cancelUpdatePassword = () => {
        const updateBtn = document.getElementById('updateBtn')
        const updatePassSection = document.getElementById('updateSection');

        updateBtn.style.display = "block"
        updatePassSection.style.display = "none"
    }
    useEffect(() => {
        getUserDetails();
    }, [])

    const checkPassword = () => {
        if (document.getElementById('originalPassword').value === userData.password) {
            if (document.getElementById('newPassword').value === document.getElementById('reNewPassword').value) {
                const res = fetch('http://localhost:80/api/updatePassword', {
                    method: 'PUT',
                    body: JSON.stringify({ newPassword }),
                    headers: {
                        "content-type": "application/json"

                    },
                    credentials: "include"
                })
            }
            window.location.reload()
        }
        else{
            alert('Current password is incorrect');
        }
    }

    return (
        <>
            <main className='container mt-5 mb-5'>
                <div>
                    <h3>Account Details</h3>
                    <hr />
                    <p><h6 className='inline'>Name: </h6>{userData.firstName} {userData.lastName} </p>
                    <p><h6 className='inline'>Email: </h6>{userData.email}</p>
                    <p className=''><h6 className='inline'>Password: </h6><input type="password" disabled value={userData.password} className="inline" /></p>
                    <button className='btn btn-secondary' id='updateBtn' onClick={updatePassword}>Update password</button>
                </div>
                <div id="updateSection">

                    <input type="password" placeholder='Enter current password' className='p-1' id='originalPassword' />
                    <br />
                    <input type="password" placeholder='Enter new password' className='p-1' id='newPassword' onChange={(e) => setNewPassword(e.target.value)} />
                    <input type="password" placeholder='Re-enter new password' className='m-3 p-1' id='reNewPassword' />
                    <br />
                    <button className='btn btn-secondary' onClick={checkPassword}>Update</button>
                    <br />
                    <br />
                    <b><Link className="links" to='' onClick={cancelUpdatePassword}>Cancel</Link></b>
                </div>

            </main>

        </>
    )
}

export default AccountDetails