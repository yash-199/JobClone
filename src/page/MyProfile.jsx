import React from 'react'
import image from "../assets/BannerBg.jpg"
import { MdEdit } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { RiHandbagLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
const MyProfile = () => {
    return (
        <section className='relative top-20'>
            <div className="container  mx-auto w-10/12 shadow-lg rounded-2xl bg-white">
                <div className="flex flex-wrap items-center p-8 md:p-10 gap-8 md:gap-12">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={image}
                            alt="Profile"
                            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-md"
                        />
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                        <h1 className="flex items-center text-2xl md:text-3xl font-semibold gap-3 text-gray-800">
                            Yash Kumar Jha
                            <MdEdit className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors" />
                        </h1>

                        <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between text-gray-600">
                            <p className="text-sm md:text-base">
                                at <span className="font-medium text-gray-800">Asian Institute of Medical Sciences</span>
                            </p>
                            <p className="text-sm md:text-base italic mt-2 md:mt-0">
                                Profile last updated — <span className="text-green-600">Yesterday</span>
                            </p>
                        </div>
                        <hr className='my-4' />
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center gap-4'>
                                <CiLocationOn />
                                <p>New Delhi, India</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <CiPhone />
                                <p>9873472655</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center gap-4'>
                                <RiHandbagLine />
                                <p>3 Years</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <MdOutlineMailOutline />
                                <p>byash0720@gmail.com</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center gap-4'>
                                <FaMoneyBill />
                                <p>4,20,000</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <SlCalender />
                                <p>1 month notice period</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Summary */}
            <div className='container shadow-lg mx-auto w-10/12  bg-white my-6 p-6'>
                <div className='flex justify-between items-center'>
                    <h1 className="flex items-center text-2xl md:text-xl font-semibold gap-3 text-gray-800">
                        Summary
                    </h1>
                    <p className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors">Add Employment</p>
                </div>
                {/* Details */}
                <div className='my-2'>
                    <p className="flex items-center text-lg md:text-lg font-semibold gap-3 text-gray-800">Web Developer
                        <MdEdit className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors" />
                    </p>
                    <p>Asian Institute of Medical Sciences</p>
                    <p>Full-time
                        Aug 2024 to Present (1 year 3 months)</p>
                    <p>Notice Period</p>
                </div>
            </div>

            {/* Resume Upload */}
            <div className='container shadow-lg mx-auto w-10/12  bg-white my-6 p-6'>
                <h1 className='text-2xl'>Resume</h1>
                <div className='flex justify-between items-center my-2'>
                    <div>
                        <p>Yash Kumar Jha</p>
                        <p className='text-sm text-slate-700'>uploaded On Date</p>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <MdOutlineFileDownload className='text-2xl' />
                        <RiDeleteBinLine className='text-2xl' />
                    </div>
                </div>
                <div className='border border-dashed  text-center py-10'>
                    <input type="file" name="" id="" />
                    <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
                </div>
            </div>

            {/* Key Skill */}
            <div className='container shadow-lg mx-auto w-10/12  bg-white my-6 p-6'>
                <h1 className="flex items-center text-2xl md:text-xl font-semibold gap-3 text-gray-800">
                    Key Skill
                    <MdEdit className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors" />
                </h1>
            </div>

            {/* Employment */}
            <div className='container shadow-lg mx-auto w-10/12  bg-white my-6 p-6'>
                <div className='flex justify-between items-center'>
                    <h1 className="flex items-center text-2xl md:text-xl font-semibold gap-3 text-gray-800">
                        Employment
                    </h1>
                    <p className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors">Add Employment</p>
                </div>
                {/* Details */}
                <div className='my-2'>
                    <p className="flex items-center text-lg md:text-lg font-semibold gap-3 text-gray-800">Web Developer
                        <MdEdit className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors" />
                    </p>
                    <p>Asian Institute of Medical Sciences</p>
                    <p>Full-time
                        Aug 2024 to Present (1 year 3 months)</p>
                    <p>Notice Period</p>
                </div>
            </div>

            {/* Education */}
            <div className='container shadow-lg mx-auto w-10/12  bg-white my-6 p-6'>
                <div className='flex justify-between items-center'>
                    <h1 className="flex items-center text-2xl md:text-xl font-semibold gap-3 text-gray-800">
                        Education
                    </h1>
                    <p className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors">Add Employment</p>
                </div>
                {/* Details */}
                <div className='my-2'>
                    <p className="flex items-center text-lg md:text-lg font-semibold gap-3 text-gray-800">MCA
                        <MdEdit className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors" />
                    </p>
                    <p>Amity University</p>
                    <p>Full-time
                        Aug 2024 to Present (1 year 3 months)</p>
                    <p>Notice Period</p>
                </div>
            </div>
        </section>

    )
}

export default MyProfile