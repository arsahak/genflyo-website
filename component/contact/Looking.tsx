import { Facebook, Linkedin, Play, Twitter, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Looking = () => {
    return (
        <section id=''>
            <div className='container mx-auto px-4 pb-15'>
                <div className='px-5 py-10 border border-[#D2D9E5] rounded-3xl'>
                    <h2 className='text-4xl text-primary font-semibold'>Still Looking for Answers?</h2>
                    <p className='text-secondary leading-6 py-5'>For detailed answers and in-depth guidance, please Connect with us on Discord or <br></br> open a support ticket for personalized assistance.</p>

                    <div className='flex justify-between items-center'>
                        <div className="hidden sm:flex justify-center items-center gap-5 border-2 border-[#5C51BE] py-2 px-5 
          rounded-full bg-primary text-white">
                            <Link href="" className="hover:text-blue-700 duration-200"><Twitter className="" /></Link>
                            <Link href="" className="hover:text-blue-700 duration-200"><X /></Link>
                            <Link href="" className="hover:text-blue-700 duration-200"><Linkedin /></Link>
                            <Link href="" className="hover:text-blue-700 duration-200"><Facebook /></Link>
                        </div>
                        <button className='flex items-center gap-2 font-bold text-primary tracking-widest text-xl
                        border border-[#D2D9E5] py-5 px-10 rounded-3xl'>OPEN SUPPORT TICKET <Play className='text-blue-700' /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Looking