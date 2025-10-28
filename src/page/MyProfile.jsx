import React from 'react'
import BannerBg from "../assets/BannerBg.jpg";
import { LuUpload } from "react-icons/lu";
const MyProfile = () => {
    return (
        <div className='w-full min-h-screen'>

            {/* Hero Section */}
            <div className='relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center'
                style={{ backgroundImage: `url(${BannerBg})` }}
            >
                {/* Overlay */}
                <div className='absolute inset-0 bg-black/90 backdrop-blur-sm'></div>
                {/* Title */}
                <div className='relative z-10 text-center text-white'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>
                        My Profile
                    </h1>
                </div>
            </div>

            {/* Profile Info */}
            <div className='relative z-10 mx-auto w-10/12 md:w-8/12 bg-white shadow-lg rounded-2xl p-6 md:p-10 -mt-20'>
                {/* Uplaod Image */}
                <div className="w-full flex items-center gap-10">
                    {/* Upload Box */}
                    <div>
                        <label
                            htmlFor="logo-upload"
                            className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-[#309689] transition"
                        >
                            <img
                                src={BannerBg}
                                alt="Uploaded Logo"
                                className="w-full h-full object-contain rounded-md"
                            />
                            <>
                                <LuUpload className="text-gray-400 text-2xl mb-1" />
                                <span className="text-gray-600 text-sm font-medium">
                                    Browse Logo
                                </span>
                            </>
                            <input
                                id="logo-upload"
                                type="file"
                                accept=".jpg,.png"
                                className="hidden"
                            />
                        </label>
                    </div>
                    <div>
                        {/* File Guidelines */}
                        <p className="text-lg text-gray-500 mt-2 ">
                            Max file size: <b>1MB</b> | Min dimension: <b>330×300</b> | Allowed:{" "}
                            <b>.jpg, .png</b>
                        </p>
                    </div>

                </div>

                <div className='w-full border border-dashed bg-slate-400 h-0.5 my-10'>

                </div>
                {/* User Information */}

                <div className="my-4">
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                        {/* First Name */}
                        <div className="flex-1 min-w-[250px]">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Enter Full name"
                                className="w-full bg-slate-100 border border-gray-300 rounded-md px-3 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#309689]"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex-1 min-w-[250px]">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Job Title
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Enter last name"
                                className="w-full bg-slate-100 border border-gray-300 rounded-md px-3 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#309689]"
                            />
                        </div>
                    </div>
                    {/* Phone & Email */}
                    <div className='flex flex-wrap justify-between items-center gap-4 mb-8'>
                        {/* Phone */}
                        <div className='flex-1 min-w-[250px]'>
                            <label htmlFor="phoneno" className='block text-sm font-medium text-gray-700 mb-1'>
                                Phone No
                            </label>
                            <input type="number" placeholder='Enter Phone No.'
                                className='w-full bg-slate-100 border border-gray-300 rounded-md px-3 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#309689]'
                                name="" id="" />
                        </div>
                        {/* Email */}
                        <div className='flex-1 min-w-[250px]'>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                                Email
                            </label>
                            <input type="email" placeholder='Enter Email'
                                className='w-full bg-slate-100 border border-gray-300 rounded-md px-3 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#309689]'
                                name="" id="" />
                        </div>
                    </div>

                    {/* Website and Salary */}
                    <div className='flex flex-wrap justify-between items-center gap-4 mb-8'>
                        {/* WEBSITE */}
                        <div className='flex-1 min-w-[250px]'>
                            <label htmlFor="website" className='block text-sm font-medium text-gray-700 mb-1'>
                                Website
                            </label>
                            <input type="text" placeholder='Enter your portfolio'
                                className='w-full bg-slate-100 border border-gray-300 rounded-md px-3 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#309689]'
                                name="" id="" />
                        </div>
                        {/* SALARY */}
                        <div className='flex-1 min-w-[250px]'>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                                Current CTC
                            </label>
                            <input type="email" placeholder='Enter CTC'
                                className='w-full bg-slate-100 border border-gray-300 rounded-md px-3 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#309689]'
                                name="" id="" />
                        </div>
                        <div className='flex-1 min-w-[250px]'>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                                Expected ETC
                            </label>
                            <input type="email" placeholder='Enter ETC'
                                className='w-full bg-slate-100 border border-gray-300 rounded-md px-3 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#309689]'
                                name="" id="" />
                        </div>
                    </div>

                    {/* Experience & DOB */}
                    <div className='flex flex-wrap justify-between items-center gap-4 mb-8'>
                        {/* WEBSITE */}
                        <div className='flex-1 min-w-[250px]'>
                            <label htmlFor="website" className='block text-sm font-medium text-gray-700 mb-1'>
                                Experience
                            </label>
                            <input type="number" placeholder='Enter Experience'
                                className='w-full bg-slate-100 border border-gray-300 rounded-md px-3 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#309689]'
                                name="" id="" />
                        </div>
                        {/* SALARY */}
                        <div className='flex-1 min-w-[250px]'>
                            <label htmlFor="DOB" className='block text-sm font-medium text-gray-700 mb-1'>
                                DOB
                            </label>
                            <input type="date" placeholder='Enter CTC'
                                className='w-full bg-slate-100 border border-gray-300 rounded-md px-3 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#309689]'
                                name="" id="" />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default MyProfile
