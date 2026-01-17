import { assets } from '@/assets/assets'
import { Images } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Gallary = () => {
    return (
        <div className='px-[4%] my-20'>
            <div className='flex items-center gap-3 border border-[#13161F] rounded-xl w-fit
            font-bold text-[#13161f] py-1 px-6'>
                <Images />
                <p className='text-[#4D5056]'>
                    Gallery —
                </p>
            </div>
            <h2 className='text-[#232939] text-3xl leading-12 mt-4 font-semibold'>
                Snapshots, Moments and Memories
            </h2>
            
            <div className='my-15'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mb-5'>
                    <Image src={assets.GallaryImg1} alt='' className='lg:col-span-2 object-cover w-full h-full' />
                    <div className='flex flex-col gap-5'>
                        <Image src={assets.gallaryImg2} alt='' className='w-full h-full object-cover' />
                        <Image src={assets.gallaryImg3} alt='' className='object-cover w-full h-full' />
                    </div>
                    <Image src={assets.gallaryImg4} alt='' className='object-cover w-full h-full' />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-5">
                    <Image src={assets.gallaryImg5} alt='' className='object-cover w-full h-full' />
                    <Image src={assets.gallaryImg6} alt='' className='object-cover w-full h-full' />
                    <Image src={assets.gallaryImg7} alt='' className='lg:col-span-2 object-cover w-full h-full' />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                    <Image src={assets.gallaryImg8} alt='' className='lg:col-span-2 lg:row-span-2 object-cover w-full h-full' />
                    <Image src={assets.gallaryImg9} alt='' className='lg:col-span-2 object-cover w-full h-full' />
                    <Image src={assets.gallaryImg10} alt='' className='object-cover w-full h-full' />
                    <Image src={assets.gallaryImg11} alt='' className='object-cover w-full h-full' />
                </div>
            </div>
            <div className=''>
                <p className='bg-[#232939] px-10 font-semibold tracking-widest py-5 rounded-full
                 text-white cursor-pointer w-fit'>VIEW ALL PHOTOS</p>
            </div>
        </div>
    )
}

export default Gallary