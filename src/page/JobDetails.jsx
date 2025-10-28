import React from "react";
import BannerBg from "../assets/BannerBg.jpg";
import logo from "../assets/react.svg";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { PiHandbagBold } from "react-icons/pi";

const JobDetails = () => {
    return (
        <div className="w-full min-h-screen">
            {/* ===== Hero Section ===== */}
            <div
                className="relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center"
                style={{ backgroundImage: `url(${BannerBg})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

                {/* Title */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Frontend Developer Job Details
                    </h1>
                </div>
            </div>

            {/* ===== Job Info Section ===== */}
            <div className="relative z-10 mx-auto w-11/12 md:w-10/12 bg-white shadow-lg rounded-2xl p-6 md:p-10 -mt-20">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <p className="bg-[#309689] text-white px-4 py-1 rounded-full text-sm font-medium">
                        10 Min ago
                    </p>
                    <div className="flex items-center gap-3 text-[#309689] text-2xl">
                        <CiBookmark className="cursor-pointer hover:text-black transition" />
                        <FaBookmark className="cursor-pointer hover:text-black transition" />
                    </div>
                </div>

                {/* Job Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-gray-200 pb-4 mb-6">
                    <img src={logo} alt="Company Logo" className="w-16 h-16 object-contain" />
                    <div>
                        <h2 className="text-2xl font-semibold">Frontend Developer</h2>
                        <p className="text-gray-500">Corporate Solutions Executive</p>
                    </div>
                </div>

                {/* Job Meta Info */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                    <div className="flex flex-wrap gap-5 text-gray-600">
                        <p className="flex items-center gap-2 text-sm">
                            <PiHandbagBold className="text-[#309689]" />
                            Industry Type
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <PiHandbagBold className="text-[#309689]" />
                            Working Type
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <PiHandbagBold className="text-[#309689]" />
                            Salary
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <PiHandbagBold className="text-[#309689]" />
                            Experience
                        </p>
                    </div>
                    <button className="px-6 py-2 bg-[#309689] text-white rounded-lg hover:bg-black transition">
                        Apply Now
                    </button>
                </div>

                {/* ===== Job Description Section ===== */}
                <section className="mb-10">
                    <h3 className="text-xl font-semibold mb-3">Job Description</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 text-justify text-gray-700 leading-relaxed">
                            <p>
                                Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue
                                non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo
                                fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi
                                faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis
                                viverra viverra odio mauris nunc.
                            </p>
                            <p className="mt-3">
                                Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae
                                vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing
                                cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi
                                dignissim pellentesque morbi vitae.
                            </p>
                        </div>

                        {/* Job Overview Card */}
                        <div className="bg-gray-100 rounded-lg p-4 md:w-[250px] shadow-sm">
                            <h4 className="font-semibold text-lg mb-3">Job Overview</h4>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li>📅 Posted: 10 min ago</li>
                                <li>🏢 Company: Reactify Inc.</li>
                                <li>💼 Type: Full-Time</li>
                                <li>💰 Salary: ₹6–8 LPA</li>
                                <li>📍 Location: Remote</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ===== Key Responsibilities ===== */}
                <section className="mb-10">
                    <h3 className="text-xl font-semibold mb-3">Key Responsibilities</h3>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non
                        vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed
                        tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis
                        lectus. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc.
                    </p>
                </section>

                {/* ===== Perks & Benefits ===== */}
                <section>
                    <h3 className="text-xl font-semibold mb-3">Perks & Benefits</h3>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Enjoy flexible work hours, a remote-friendly environment, and health
                        insurance. Work with a collaborative team on cutting-edge technologies and
                        career growth opportunities.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default JobDetails;
