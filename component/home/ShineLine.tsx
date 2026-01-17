import Image from 'next/image'
import React from 'react'
import { assets } from '../../assets/assets'

const ShineLine = () => {
    return (
        <div className='px-5 lg:px-[10%] my-20 lg:flex items-end gap-20'>
            <div className='bg-white rounded-2xl relative hidden lg:block'>
                <Image className='rounded-2xl' src={assets.shine_like} alt='' height={500} width={300} />
                <h2 className='absolute bg-white top-20 -left-15 p-10 rounded-2xl'>Logo</h2>
                <p className='absolute bg-white px-10 py-3 rounded-4xl bottom-20 -right-13
                    text-4xl font-bold text-[#232939]'>STATS</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-15'>
                <div>
                    <h2 className='text-[#232939] text-7xl leading-18 lg:text-8xl lg:leading-24'>10+</h2>
                    <p className='text-[#657694] font-semibold leading-6'>Business Years</p>
                </div>
                <div>
                    <h2 className='text-[#232939] text-7xl leading-18 lg:text-8xl lg:leading-24'>12+</h2>
                    <p className='text-[#657694] font-semibold leading-6'>Team Members</p>
                </div>
                <div>
                    <h2 className='text-[#232939] text-7xl leading-18 lg:text-8xl lg:leading-24'>05+</h2>
                    <p className='text-[#657694] font-semibold leading-6'>Million Users Reached</p>
                </div>
                <div>
                    <h2 className='text-[#232939] text-7xl leading-18 lg:text-8xl lg:leading-24'>20+</h2>
                    <p className='text-[#657694] font-semibold leading-6'>Open-source Projects</p>
                </div>
                <div>
                    <h2 className='text-[#232939] text-7xl leading-18 lg:text-8xl lg:leading-24'>14+</h2>
                    <p className='text-[#657694] font-semibold leading-6'>Products Launched</p>
                </div>
                <div>
                    <h2 className='text-[#232939] text-7xl leading-18 lg:text-8xl lg:leading-24'>08+</h2>
                    <p className='text-[#657694] font-semibold leading-6'>Top Launch on Product Hunt</p>
                </div>
            </div>
        </div>
    )
}

export default ShineLine