import { Goal } from 'lucide-react'
import React from 'react'

const Ourvision = () => {
    return (
        <section className='container mx-auto px-4 py-15'>
            <div className=''>
                <span className='flex items-center gap-2 w-fit mx-auto text-[#13161f]
                 font-semibold border border-black rounded-xl px-5 py-1 tracking-widest mb-8'><Goal />Our Vision -</span>
                <p className='text-center text-primary text-3xl max-w-2/3 mx-auto leading-12 pb-20'>Enabling creators to ship smarter and build with impact — combining design, engineering, and intuition to make building web solution feel effortless.</p>
                <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div className='space-y-1'>
                        <h2 className='text-primary text-7xl leading-18 lg:text-8xl lg:leading-24'>2015</h2>
                        <p className='text-secondary font-semibold leading-6'>Year Founded</p>
                    </div>
                    <div className='text-center space-y-1'>
                        <h2 className='text-primary text-7xl leading-18 lg:text-8xl lg:leading-24'>14+</h2>
                        <p className='text-secondary font-semibold leading-6'>No. of Products</p>
                    </div>
                    <div className='text-center space-y-1'>
                        <h2 className='text-primary text-7xl leading-18 lg:text-8xl lg:leading-24'>5M</h2>
                        <p className='text-secondary font-semibold leading-6'>Users Reached World-wide</p>
                    </div>
                    <div className='text-right space-y-1'>
                        <h2 className='text-primary text-7xl leading-18 lg:text-8xl lg:leading-24'>14</h2>
                        <p className='text-secondary font-semibold leading-6'>Team Members</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourvision