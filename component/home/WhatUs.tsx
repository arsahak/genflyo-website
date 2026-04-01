import { Coffee, Lightbulb, MonitorCheck, RefreshCcw, Rocket, UserPen } from 'lucide-react'
import React from 'react'

const WhatUs = () => {
    return (
        <section id='whatus' className='container mx-auto px-4 py-15'>
            <p className='font-medium text-[#13161f] py-1 px-3 border border-[#13161f] w-fit rounded-xl'>What Defines Us —</p>
            <h2 className='text-3xl leading-12 text-primary my-5 font-semibold'>Innovation at our core, we build tools for <br /> the web to keep you ahead.</h2>
            <div className='md:flex mt-10'>

                <div className='flex-1'>
                    <div className='border border-gray-300 rounded-2xl p-8'>
                        <UserPen className='text-primary' />
                        <h2 className='my-4 text-primary font-semibold text-2xl'>Crafted in-house, end to end.</h2>
                        <p className='text-secondary leading-6'>At Pimjo, we build only our own products—giving us complete control to craft
                            with precision & quality.</p>
                    </div>

                </div>

                <div className='flex-1'>
                    <div className='border border-gray-300 rounded-2xl p-8'>
                        <Lightbulb className='text-primary' />
                        <h2 className='my-4 text-primary font-semibold text-2xl'>Digital innovation at heart.</h2>
                        <p className='text-secondary leading-6'>Our expert team builds innovative, high-quality products and tools that drive growth & keep you ahead.</p>
                    </div>

                </div>

                <div className='flex-1'>
                    <div className='border border-gray-300 rounded-2xl p-8'>
                        <Rocket className='text-primary' />
                        <h2 className='my-3 text-primary font-semibold text-2xl'>Startup spirit, enterprise execution.</h2>
                        <p className='text-secondary leading-6'>We build tools that streamline development, eliminate friction & hit your goals quickly.</p>
                    </div>

                </div>

            </div>
            <div className='md:flex items-center h-full'>
                <div className='flex-1 border border-gray-300 rounded-2xl p-8 flex items-center gap-5'>
                    <MonitorCheck className='text-primary' />
                    <h2 className='text-primary font-semibold text-2xl'>Developer-focused</h2>
                </div>
                <div className='flex-1 border border-gray-300 rounded-2xl p-8 flex items-center gap-5'>
                    <RefreshCcw className='text-primary' />
                    <h2 className='text-primary font-semibold text-2xl'>Evolve always</h2>
                </div>
                <div className='flex-1 border border-gray-300 rounded-2xl p-8 flex items-center gap-5'>
                    <Coffee className='text-primary' />
                    <h2 className='text-primary font-semibold text-2xl'>Results over hype</h2>
                </div>
            </div>
        </section>
    )
}

export default WhatUs