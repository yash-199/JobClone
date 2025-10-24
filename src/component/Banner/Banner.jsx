import React from "react";
import BannerBg from "../../assets/BannerBg.jpg";
import SearchJob from "./SearchJob";
import Icon from "./Icon";

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${BannerBg})`, // ✅ Correct syntax
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh", // Add some height to make it visible
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
            {/* Add content here if needed */}
            <div
                style={{
                    position: "relative",
                    zIndex: "1",
                    color: "white",
                    textAlign: "center",
                    paddingTop: "200px"
                }}>
                <h1 className="text-6xl font-semibold">Find Your Dream Job Today!</h1>
                <p className="text-md text-gray-400 my-4">Connecting Talent with Opportunity: Your Gateway to career Success</p>
                <SearchJob />
                <Icon />
            </div>
        </div>
    );
};

export default Banner;
