import { blogData } from '@/assets/assets'
import { ArrowRight, Book } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
    return (
        <div className='px-[4%] mb-20 py-5'>
            <div className='flex items-center gap-3 border border-[#13161F] rounded-xl w-fit
            font-bold text-[#13161f] py-1 px-6'>
                <Book />
                <p className='text-[#4D5056]'>
                    Blogs —
                </p>
            </div>
            <h2 className='text-[#232939] text-3xl leading-12 mt-4 font-semibold'>
                Insights, Tips, and Resources
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                {
                    blogData.map((blog) => (
                        <div key={blog.id} className='card bg-white p-3 rounded-2xl'>
                            <div className="card-header relative">
                                <Image src={blog.image} alt='' width={400} height={220} className='object-cover aspect-3/2 rounded-t-2xl w-full h-full' />
                                <p className='bg-white absolute w-fit top-2 left-2 px-4 py-1 rounded-md'>{blog.shortText}</p>
                            </div>
                            <div className="card-body mt-5 px-5">
                                <h2 className='text-xl font-semibold leading-6 text-[#232939]'>{blog.title}</h2>
                                <p className='text-[#657694] my-5'>{blog.description}</p>
                                <button className='flex items-center justify-center gap-4 py-3 px-8 border 
                                border-gray-200 rounded-full text-[#232939] font-bold'>READ MORE
                                    <ArrowRight className='text-[#735DFF] tracking-widest' /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mt-10'>
                <p className='bg-[#232939] px-10 font-semibold tracking-widest py-5 rounded-full text-white cursor-pointer w-fit'>ALL BLOGS</p>
            </div>
        </div>
    )
}

export default Blog