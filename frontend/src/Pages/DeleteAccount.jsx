import React from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteAccount = () => {
    
    const navigate = useNavigate();

    const deleteAccount = () =>{
        if (document.getElementById('confirmDelete').value === "Yes, delete my account"){
            const res = fetch('http://localhost:80/api/delete-account', {
                method:'DELETE',
                headers:{
                    "content-type": "application/json"
                },
                credentials:"include"
            })

            navigate('/')
            

        }else{
            alert('Please enter the exact sentence');
        }
    }
    
    
    return (
        <>
            <main className='container pt-5 mt-5 mb-5 text-center'>
                <h4 className='mb-3'>Deleting your account will remove everything and cannot be recovered.</h4>
                <i className=''>Please enter: <b>"Yes, delete my account"</b> to confirm.</i>
                <br/>
                <input type="text" className='mt-4 p-2' placeholder='Confirm here' id='confirmDelete'/>
                <br/>
                <button className='btn btn-danger mt-4' onClick={deleteAccount}>Delete account</button>
            </main>
        </>


    )
}

export default DeleteAccount