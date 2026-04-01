import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Progress = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto px-4'>
                <div className='space-y-8 py-10'>
                    <h2 className='text-white text-5xl'>Fueling Progress, Driven by Innovators</h2>
                    <p className='text-[#d2d9e5] text-xl'>At Pimjo, we build more than tools — we build momentum. Our team is dedicated to equipping developers, designers, and startups with products that simplify complexity, accelerate progress, and unlock creative freedom. Everything we do is centered around helping you bring better ideas to life, faster.</p>
                </div>
                <div>
                    <Image src={assets.about1} alt='' className='w-full object-cover rounded-2xl' />
                </div>
            </div>
        </section>
    )
}

export default Progress