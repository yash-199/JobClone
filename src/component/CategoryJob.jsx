import React from 'react'
import content from "../assets/content.svg"
import marketResearch from "../assets/research.svg"
import marketingSale from "../assets/marketing.svg"
import customerHelp from "../assets/customer.svg"
import finance from "../assets/finance.svg"
import software from "../assets/lightning.svg"
import HumanResource from "../assets/human.svg"
import management from "../assets/management.svg"
import retailProduct from "../assets/retail.svg"
import securityAnalyst from "../assets/security.svg"
const CategoryJob = () => {
    const JobCategory = [
        {
            name: "Content Writer",
            position: "142 Job Available",
            image: content
        },
        {
            name: "Market Research",
            position: "253 Job Available",
            image: marketResearch
        },
        {
            name: "Marketing & Sale",
            position: "142 Job Available",
            image: marketingSale
        },
        {
            name: "Customer Help",
            position: "142 Job Available",
            image: customerHelp
        },
        {
            name: "Finance",
            position: "142 Job Available",
            image: finance
        },
        {
            name: "Software",
            position: "142 Job Available",
            image: software
        },
        {
            name: "Human Resource",
            position: "142 Job Available",
            image: HumanResource
        },
        {
            name: "Management",
            position: "142 Job Available",
            image: management
        },
        {
            name: "Retails & Product",
            position: "142 Job Available",
            image: retailProduct
        },
        {
            name: "Security Analyst",
            position: "142 Job Available",
            image: securityAnalyst
        },

    ]
    return (
        <section className='bg-[#309689]  px-10 py-6 rounded-lg mx-4'>
            <div className='my-10'>
                <h1 className='text-center text-3xl text-white font-semibold'>Browse by Category</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {JobCategory.map((job) => (
                    <div key={job} className="border flex items-center gap-4 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                        <div className='border border-[#309689] rounded-full p-1'>
                            <img src={job.image} alt="" />
                        </div>
                        <div>
                            <p className='text-lg'>{job.name}</p>
                            <p className='text-sm text-gray-400'>{job.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryJob
