import { assets } from '@/assets/assets'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const OurVision2 = () => {
    return (
        <section className='bg-gray-100 py-15'>
            <div className='container mx-auto px-4'>
                <span className='flex items-center gap-2 w-fit text-[#13161f]
                 font-semibold border border-black rounded-xl px-5 py-1 tracking-widest mb-8'><Star />Our Vision -</span>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='bg-white p-5 rounded-lg'>
                        <h2 className='text-primary font-semibold text-xl pb-25'>Impact</h2>
                        <p className='text-[#475b82]'>We build with purpose — every decision is made to create meaningful change for our users.</p>
                    </div>
                    <div className='bg-white p-2 rounded-lg'>
                        <Image src={assets.about2} alt='' className='w-full object-cover rounded-lg' />
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <h2 className='text-primary font-semibold text-xl pb-25'>Collaboration</h2>
                        <p className='text-[#475b82]'>Great things happen when we work together — we value diverse voices and shared goals.</p>
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <h2 className='text-primary font-semibold text-xl pb-25'>Precision</h2>
                        <p className='text-[#475b82]'>Every detail matters. We strive for clarity, consistency, and excellence in everything we do.</p>
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <h2 className='text-primary font-semibold text-xl pb-25'>Reliability</h2>
                        <p className='text-[#475b82]'>We deliver on our promises — our users trust us to create stable, dependable solutions.</p>
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <h2 className='text-primary font-semibold text-xl pb-25'>Innovation</h2>
                        <p className='text-[#475b82]'>We challenge norms, explore new ideas, and push boundaries to stay ahead.</p>
                    </div>
                    <div className='bg-white p-2 rounded-lg'>
                        <Image src={assets.about3} alt='' className='w-full object-cover rounded-lg' />
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <h2 className='text-primary font-semibold text-xl pb-25'>Community</h2>
                        <p className='text-[#475b82]'>We grow with our people — supporting, sharing, and celebrating progress together.</p>
                    </div>
                 </div>
            </div>
        </section>
    )
}

export default OurVision2