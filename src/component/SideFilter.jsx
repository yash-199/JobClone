import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const SideFilter = () => {
    return (
        <div className='bg-[#309689] text-white w-1/5 p-5 rounded-md'>
            <h1 className='text-xl my-1 flex gap-4 font-semibold mb-2'>Search by Title</h1>
            <div className='flex gap-3 px-2 bg-white items-center py-2 rounded-sm'>
                <CiSearch className='text-slate-600' />
                <input type="text" placeholder='Job title or company' className='outline-none' />
            </div>

            <h1 className='text-xl mt-4 mb-2 font-semibold'>Location</h1>
            <div className='flex px-2 bg-white text-black items-center py-2 rounded-sm'>
                <CiLocationOn className='text-slate-400' />
                <select className='outline-none'>
                    <option value="" disabled>Choose Location</option>
                    <option value="">Choose Location</option>
                    <option value="">Choose Country, State or City</option>
                    <option value="">Choose Country, State or City</option>
                    <option value="">Choose Country, State or City</option>
                </select>
            </div>
            <h1 className='text-xl mt-4 mb-2 font-semibold'>Category</h1>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">All</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Software</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Finance</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Video Editor</label>
            </div>
            <button className='text-[#309689] py-1 px-4 bg-white rounded w-full my-3'>Show More</button>

            <h1 className='text-xl mt-2 mb-2 font-semibold'>Job Type</h1>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">All</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Full Time</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Part-Time</label>
            </div >
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Contract</label>
            </div>
            <h1 className='text-xl mt-4 mb-2 font-semibold'>Experience</h1>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">All</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Intership</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Entry Level</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Associate</label>
            </div>
            <h1 className='text-xl mt-4 mb-2 font-semibold'>Job Posted</h1>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">All</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Last Hour</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Last 24 Hours</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Last 1 Weeks</label>
            </div>
            <h1 className='text-xl mt-4 mb-2 font-semibold'>Onsite/Remote</h1>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">All</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Hybrid</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">on-site</label>
            </div>
            <div className='my-1 flex gap-4'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remote</label>
            </div>

        </div>
    )
}

export default SideFilter
