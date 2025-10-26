import React from 'react'
import Banner from '../component/Banner/Banner'
import RecentJob from '../component/RecentJob'
import CategoryJob from '../component/CategoryJob'
import About from '../component/About'

const Home = () => {
    return (
        <div>
            <Banner />
            <RecentJob />
            <CategoryJob />
            <About />
        </div>
    )
}

export default Home
