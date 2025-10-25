import React from 'react'
import { PiHandbagBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
const Icon = () => {
    return (
        <div className='flex items-center justify-between mx-auto w-1/2 my-12 z-50'>
            <div className='flex justify-between items-center gap-4 text-left'>
                <div>
                    <PiHandbagBold className='bg-[#309689] text-white text-6xl p-4 rounded-full' />
                </div>
                <div>
                    <p>25,580</p>
                    <p className='text-sm text-gray-400'>Jobs</p>
                </div>
            </div>
            <div className='flex justify-between items-center gap-4 text-left'>
                <div>
                    <FaUsers className='bg-[#309689] text-white text-6xl p-4 rounded-full' />
                </div>
                <div>
                    <p>25,580</p>
                    <p className='text-sm text-gray-400'>Candidates</p>
                </div>
            </div>
            <div className='flex  justify-between items-center gap-4 text-left'>
                <div>
                    <BsBuildings className='bg-[#309689] text-white text-6xl p-4 rounded-full' />
                </div>
                <div>
                    <p>25,580</p>
                    <p className='text-sm text-gray-400'>Companies</p>
                </div>
            </div>
        </div>
    )
}

export default Icon
