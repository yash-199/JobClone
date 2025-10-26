import React from 'react'
import jobSearch from "../assets/jobsearch.png"
const About = () => {
    return (
        <section>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 mt-20 mx-4'>
                <div>
                    <img src={jobSearch} alt="" />
                </div>
                <div className='px-10'>
                    <h1 className='text-4xl capitalize'>Job search for people <br /> passionate about startup</h1>
                    <div className='my-6 w-[500px]'>
                        <div className='my-2'>
                            <h1 className='text-black text-xl'>1. Create Account</h1>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo a quam varius maximus. Maecenas sodales tortor quis tincidunt commodo.</p>
                        </div>
                        <div className='my-2'>
                            <h1 className='text-black text-xl'>2. Search for Jobs</h1>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo a quam varius maximus. Maecenas sodales tortor quis tincidunt commodo.</p>
                        </div>
                        <div className='my-2'>
                            <h1 className='text-black text-xl'>3. Save & Apply</h1>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo a quam varius maximus. Maecenas sodales tortor quis tincidunt commodo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
