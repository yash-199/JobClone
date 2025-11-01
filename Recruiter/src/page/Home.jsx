import React from 'react'
import DashBoardCard from '../component/DashBoardCard'

const Home = () => {
    return (
        <div className='container w-10/12 mx-auto pt-32'>
            <div className=''>
                <h1 className='text-3xl font-semibold'>Dashboard Home</h1>
                <p className='text-gray-400'>Ready to jump back in?</p>
            </div>
            <DashBoardCard />
        </div>
    )
}

export default Home
