import React from 'react'
import BannerBg from "../assets/BannerBg.jpg"
import SideFilter from '../component/SideFilter'
import AllJobs from '../component/AllJobs'
const Jobs = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${BannerBg})`, // ✅ Correct syntax
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "50vh", // Add some height to make it visible
                position: "relative"
            }}
        >
            <div style={{
                position: "absolute",
                inset: 0,
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(0, 0, 0, 0.8)", // optional dark overlay
            }}>
            </div>
            <div style={{ position: "relative", zIndex: "1", textAlign: "center", paddingTop: "150px" }}>
                <h1 className='text-4xl text-white'>Find Jobs</h1>
            </div>
            <div className='flex relative top-2/3 justify-between items-start px-14'>
                <SideFilter />
                <AllJobs className="" />
            </div>
        </div>
    )
}

export default Jobs
