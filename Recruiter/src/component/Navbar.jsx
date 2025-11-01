import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className='fixed w-full z-10 text-black shadow-lg rounded'>
            <div className='flex justify-between p-6'>
                <h1>Job Portal</h1>
                <ul className='flex justify-center items-center gap-4'>
                    <li>Dashboard</li>
                    <li>Company Profile</li>
                    <li>Post Job</li>
                    <li>Manage Job</li>
                    <li>All Applicants</li>
                    <li>Shortlisted Resume</li>
                </ul>
                <div className='flex justify-center items-center gap-4'>
                    <button>Upload CV</button>
                    <button onClick={() => navigate('/register')} className='bg-[#309689] py-1 px-4 text-white rounded'>Register</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
