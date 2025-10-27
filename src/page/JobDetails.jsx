import React from 'react'
import BannerBg from "../assets/BannerBg.jpg"
import logo from "../assets/react.svg"
const JobDetails = () => {
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
            <div style={
                {
                    position: "relative",
                    zIndex: "1",
                    textAlign: "center",
                    paddingTop: "150px"
                }
            }>
                <h1 className='text-4xl text-white'> Frontend Developer Job Details</h1>
            </div>
            <div className='relative top-1/2 z-10 m-10 w-10/12'>
                <p className='bg-[#309689] py-1 px-4 text-white rounded  my-3 w-[120px]'>10Min ago</p>
                {/* Company Name and Icon */}
                <div>
                    <img src={logo} alt="" />
                    <p>Corporate Solutions Executive</p>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
