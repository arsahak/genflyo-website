import { assets, productsData } from '@/assets/assets'
import { Trophy } from 'lucide-react'
import Image from 'next/image'

const Achivment = () => {
    return (
        <section id='achivment' className='bg-[#F5F6FA] py-15'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center gap-3 border border-[#13161F] rounded-xl w-fit
                font-bold text-[#4D5056] py-1 px-4 mb-5'>
                    <Trophy />
                    <p>
                        Achievements —
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
                    <div className="bg-white rounded-2xl">
                        <div className='px-6 pt-6'>
                            <p className='hidden md:block bg-[#F5F6FA] text-[#414E65] font-semibold w-fit px-3 rounded-md border border-gray-200'>Open-Source</p>
                        </div>
                        <div className='lg:block p-2 flex flex-col-reverse lg:flex-row'>
                            <h2 className='text-2xl leading-10 px-4 pb-6 text-[#334059]'>Proudly maintaining 20+ open-source projects.</h2>
                            <Image src={assets.achiv_image1} alt='' className='w-full py-4 lg:py-0' />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl ">
                        <div className='px-6 pt-6'>
                            <p className='hidden md:block bg-[#F5F6FA] text-[#414E65] font-semibold w-fit px-3 rounded-md border border-gray-200'>Industry Leader</p>
                        </div>
                        <div className='lg:block p-2 flex flex-col-reverse lg:flex-row'>
                            <h2 className='text-2xl px-4 pb-6 leading-10 text-[#334059]'>Industry leader building creative frontend tools.</h2>
                            <Image src={assets.acihv_image2} alt='' className='w-full py-4 lg:py-0' />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl lg:row-span-2 relative">
                        <div className='px-6 pt-6'>
                            <p className='hidden md:block bg-[#F5F6FA] text-[#414E65] font-semibold w-fit px-3 rounded-md border border-gray-200'>Crafting a Better Web</p>

                        </div>
                        <div className='p-2 flex flex-col-reverse lg:flex-col py-4 lg:py-0'>
                            <h2 className='text-2xl px-4 py-4 leading-10 text-[#334059]'>14+ Products and dev tools launched (and counting!)</h2>
                            <div className='grid grid-cols-3 gap-8 bg-[#E9E7FF] p-8 rounded-b-2xl'>
                                {
                                    productsData.slice(0, 12).map((item) => (
                                        <div key={item.id} className='bg-white p-2 flex items-center justify-center 2xl:p-2 rounded-2xl '>
                                            <Image src={item.image} alt='' height={80} width={80}
                                                className='rounded-2xl' />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <h2 className='hidden lg:block bg-linear-to-r from-[#402DFF] to-[#7E74FF] w-fit lg:px-12 2xl:px-24 lg:py-6 2xl:py-8
                        font-bold text-white text-3xl rounded-2xl absolute lg:bottom-9 lg:right-8 cursor-pointer
                        2xl:bottom-7 2xl:right-7'>14+ Live Product</h2>
                    </div>

                    <div className='hidden lg:block bg-white rounded-2xl lg:col-span-2 p-2'>
                        <div className="rounded-2xl w-full px-6 flex flex-col-reverse lg:flex-row lg:items-end lg:gap-5 lg:bg-linear-to-b from-[#3e32be] to-[#7575ad]">
                            <div className='py-8 w-full lg:w-1/2'>
                                <p className='hidden lg:block text-[#334059] font-semibold bg-white px-4 py-1 rounded-2xl w-fit'>From 2015</p>
                                <h2 className='text-[#334059] text-2xl lg:text-4xl lg:leading-12 lg:text-white lg:my-5'>10 years of experience building dev tools and products.</h2>
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <Image src={assets.achivBgImage} alt='' className='rounded-t-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default Achivment