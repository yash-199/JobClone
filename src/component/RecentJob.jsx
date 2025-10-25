import React from 'react'
import { PiHandbagBold } from "react-icons/pi";
const RecentJob = () => {
    // Mock data for jobs
    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "TechNova Pvt Ltd",
            location: "Delhi, India",
            industryType: "Software Company",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            salary: "$38000-$40000",
            WorkingType: "Full Time"
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "CodeFlow Technologies",
            location: "Bengaluru, India",
            industryType: "Software Company",
            skills: ["Node.js", "Express", "MongoDB", "REST API", "React", "JavaScript", "HTML"],
            salary: "$38000-$40000",
            WorkingType: "Full Time"
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "PixelEdge Studio",
            location: "Mumbai, India",
            industryType: "Agency",
            skills: ["Figma", "Adobe XD", "Prototyping"],
            salary: "$38000-$40000",
            WorkingType: "Full Time"
        },
        {
            id: 4,
            title: "Frontend Developer",
            company: "TechNova Pvt Ltd",
            location: "Delhi, India",
            industryType: "Software Company",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            salary: "$38000-$40000",
            WorkingType: "Full Time"
        },
        {
            id: 5,
            title: "Backend Developer",
            company: "CodeFlow Technologies",
            location: "Bengaluru, India",
            industryType: "Software Company",
            skills: ["Node.js", "Express", "MongoDB", "REST API"],
            salary: "$38000-$40000",
            WorkingType: "Full Time"
        },
        {
            id: 6,
            title: "UI/UX Designer",
            company: "PixelEdge Studio",
            industryType: "Agency",
            location: "Mumbai, India",
            skills: ["Figma", "Adobe XD", "Prototyping"],
            salary: "$38000-$40000",
            WorkingType: "Full Time"
        }
    ];

    return (
        <section className='bg-white text-black py-12'>
            <div className='max-w-6xl mx-auto px-4'>
                <h1 className="text-3xl font-bold mt-20 text-center">Recent Job Openings</h1>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4 my-4'>
                {jobs.map(job => (
                    <div key={job.id} className="border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                        <h3 className="font-semibold text-xl mb-1">{job.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{job.company} · {job.location}</p>

                        {/* Skill tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {job.skills.slice(0, 4).map((skill, index) => (
                                <span
                                    key={index}
                                    className="text-sm font-medium bg-[#309689] text-white py-1 px-3 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                            {job.skills.length > 4 && (
                                <span
                                    className="text-sm font-medium bg-[#309689] text-white py-1 px-3 rounded-full"
                                >
                                    + {job.skills.length - 4} more
                                </span>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <p className='text-sm flex justify-center items-center gap-2 text-gray-400'><PiHandbagBold className='text-[#309689]' /> {job.industryType}</p>
                            <p className='text-sm flex justify-center items-center gap-2 text-gray-400'><PiHandbagBold className='text-[#309689]' /> {job.WorkingType}</p>
                            <p className='text-sm flex justify-center items-center gap-2 text-gray-400'><PiHandbagBold className='text-[#309689]' /> {job.salary}</p>
                        </div>
                        <button className="mt-auto px-5 py-2 rounded-lg bg-black text-white hover:bg-[#309689] transition-all">
                            View
                        </button>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#309689] py-4 px-4 text-white rounded'>View All Job Opening</button>
            </div>
        </section>
    )
}

export default RecentJob;
