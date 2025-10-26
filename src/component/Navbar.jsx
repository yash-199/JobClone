import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className='fixed w-full z-10 text-white'>
            <div className='flex justify-between p-6'>
                <h1>Job Portal</h1>
                <ul className='flex justify-center items-center gap-4'>
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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
