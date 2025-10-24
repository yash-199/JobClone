import React from 'react'

const SearchJob = () => {
    return (
        <div>
            <div className='bg-white w-1/2 flex justify-between items-center gap-4 rounded-md mx-auto my-6'>
                <div className='p-2 outline-none'>
                    <input type="text" placeholder='Job Title or Company' className='outline-none text-center' />
                </div>
                <div className='w-[1px] h-10 bg-slate-200'></div>
                <div>
                    <select name="selectedFruit" className='text-gray-400' defaultValue="">
                        <option value="" disabled>
                            Select Location
                        </option>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                <div className='w-[1px] h-10 bg-slate-200'></div>
                <div>
                    <select className='text-gray-400'>
                        <option value="" disabled>Select Industry</option>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                <button className='bg-[#309689] py-6 px-6 text-white rounded-md'>Search Job</button>
            </div>
        </div>
    )
}

export default SearchJob
