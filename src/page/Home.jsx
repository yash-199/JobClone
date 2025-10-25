import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner/Banner'
import RecentJob from '../component/RecentJob'
import CategoryJob from '../component/CategoryJob'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <RecentJob />
            <CategoryJob />
        </div>
    )
}

export default Home
