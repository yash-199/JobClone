import React, { useState } from 'react'

const Login = () => {
    const [LoggedIn, setLoggedIn] = useState('Register')
    return (
        <div className='relative top-32'>
            <div className='mx-auto w-1/4 shadow-lg p-6'>
                <h1 className='text-center text-2xl'>  {LoggedIn === "Register" ? "Register to Job Clone" : "Login to Job Clone"}</h1>
                {/* Input fields */}
                {LoggedIn === 'Register' ? (
                    // Two-column layout for register
                    <div className='grid lg:grid-cols-2 gap-2 my-2'>
                        <div className='border border-gray-300 rounded'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='w-full p-2 outline-none'
                            />
                        </div>
                        <div className='border border-gray-300 rounded'>
                            <input
                                type='text'
                                placeholder='Email'
                                className='w-full p-2 outline-none'
                            />
                        </div>
                    </div>
                ) : (
                    // Single full-width input for login
                    <div className='my-2 border border-gray-300 rounded'>
                        <input
                            type='text'
                            placeholder='Email'
                            className='w-full p-2 outline-none'
                        />
                    </div>
                )}
                {LoggedIn === "Register" && (
                    <div className='mt-4 border border-gray-300 rounded'>
                        <input type="text" placeholder='Phone No.' className='w-full p-2 outline-none' />
                    </div>
                )}
                <div className='mt-4 border border-gray-300 rounded'>
                    <input type="password" placeholder='Password' className='w-full p-2 outline-none' />
                </div>
                {LoggedIn === "Register" && (
                    <div className='mt-4 border border-gray-300 rounded'>
                        <input type="password" placeholder='Re-trype Password' className='w-full p-2 outline-none' />
                    </div>
                )}
                <div className='mt-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className='mx-2'>Agree our terms and policy</label>
                </div>
                <button className='bg-[#309689] py-1 px-4 text-white rounded w-full my-2'>{LoggedIn === "Register" ? "Register" : "Login"}</button>
                {LoggedIn === "Register" ? (
                    <>
                        Already have an account?{' '}
                        <span
                            className='text-[#309689] cursor-pointer font-semibold'
                            onClick={() => setLoggedIn('Login')}
                        >
                            Sign in
                        </span>
                    </>
                ) : (
                    <>
                        Don’t have an account?{' '}
                        <span
                            className='text-[#309689] cursor-pointer font-semibold'
                            onClick={() => setLoggedIn('Register')}
                        >
                            Register
                        </span>
                    </>
                )}
            </div>
        </div >
    )
}

export default Login
