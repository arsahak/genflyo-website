import { assets } from '@/assets/assets'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const GreatTeams = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto px-4 py-25'>
                <div className=''>
                    <h2 className='text-white text-5xl py-5 font-semibold'>Great teams build great products.</h2>
                    <p className='text-xl text-[#d2d9e5]'>Want to craft something extraordinary and make a lasting impact? At Pimjo, our tools empower countless web projects, design and websites, shaping the digital world and influencing millions forever.</p>
                    <p className='text-white font-semibold text-xl py-5'>Join our team and help redefine the future of the web.</p>
                    <div className='py-5'>
                        <button className='font-bold tracking-widest text-primary cursor-pointer
                        bg-white px-8 py-4 rounded-full'>
                            <p className='tracking-widest flex items-center gap-2'>SEE OPENINGS<ArrowDown className='text-[#735DFF]' /></p>
                        </button>
                    </div>
                </div>
                <div className='pt-5'>
                    <Image src={assets.career1} alt='' className='w-full object-cover rounded-2xl' />
                </div>
            </div>
        </section>
    )
}

export default GreatTeams