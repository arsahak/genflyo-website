import { assets, productsData } from '@/assets/assets'
import { Trophy } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Achivment = () => {
    return (
        <div className='py-25 px-[4%] bg-[#F5F6FA]'>
            <div className='flex items-center gap-3 border border-[#13161F] rounded-xl w-fit
            font-bold text-[#4D5056] py-1 px-4 mb-5'>
                <Trophy />
                <p>
                    Achievements —
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-6 rounded-2xl">
                <div className="bg-white rounded-2xl p-6">
                    <p className='hidden lg:block bg-[#F5F6FA] text-[#414E65] font-semibold w-fit px-3 rounded-md border border-gray-200'>Open-Source</p>
                    <div className='flex flex-col-reverse lg:block'>
                        <h2 className='text-2xl leading-8 text-[#334059] my-5'>Proudly maintaining 20+ open-source projects.</h2>
                        <Image src={assets.achiv_image1} alt='' />
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-6 ">
                    <p className='hidden lg:block bg-[#F5F6FA] text-[#414E65] font-semibold w-fit px-3 rounded-md border border-gray-200'>Industry Leader</p>
                    <div className='flex flex-col-reverse lg:block'>
                        <h2 className='text-2xl leading-8 text-[#334059] my-5'>Industry leader building creative frontend tools.</h2>
                        <Image src={assets.acihv_image2} alt='' />
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-6 lg:row-span-2 relative">
                    <p className='hidden lg:block bg-[#F5F6FA] text-[#414E65] font-semibold w-fit px-3 rounded-md border border-gray-200'>Crafting a Better Web</p>
                    <div className='flex flex-col-reverse lg:block'>
                        <h2 className='text-2xl leading-8 text-[#334059] m-5 lg:w-[70%]'>14+ Products and dev tools launched (and counting!)</h2>
                        <div className='grid grid-cols-3 gap-5 bg-[#E9E7FF] px-5 py-8 rounded-b-2xl'>
                            {
                                productsData.slice(0, 12).map((item) => (
                                    <div key={item.id} className='bg-white p-2 rounded-2xl '>
                                        <Image src={item.image} alt='' height={80} width={80}
                                            className='rounded-2xl' />
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <h2 className='hidden lg:block bg-linear-to-r from-[#402DFF] to-[#7E74FF] w-fit px-12 py-6
                        font-bold text-white text-3xl rounded-2xl absolute bottom-15 right-10 cursor-pointer'>14+ Live Product</h2>
                </div>
                <div className='bg-white rounded-2xl lg:p-3 lg:col-span-2'>
                    <div className="rounded-2xl p-6  flex flex-col-reverse lg:flex-row lg:items-end gap-5 lg:bg-linear-to-b from-[#3e32be] to-[#7575ad]">
                        <div>
                            <p className='hidden lg:block text-[#334059] font-semibold bg-white px-4 py-1 rounded-2xl w-fit'>From 2015</p>
                            <h2 className='text-[#334059] text-2xl lg:text-3xl lg:leading-12 lg:text-white lg:w-[60%] mt-3'>10 years of experience building dev tools and products.</h2>
                        </div>
                        <div>
                            <Image src={assets.achivBgImage} alt='' className='bg-[#E9E8FF] lg:bg-none rounded-t-2xl' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Achivment