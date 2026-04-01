import { assets } from '@/assets/assets'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
    return (
        <section id='testimonial' className='container mx-auto px-4 py-15'>
            <div className='flex justify-between items-end mb-5'>
                <div className=''>
                    <div className='flex items-center gap-3 border border-[#13161F] rounded-xl w-fit
                        font-bold text-[#13161f] py-1 px-4'>
                        <Quote />
                        <p className='text-[#4D5056]'>
                           Testimonials —
                        </p>
                    </div>
                    <h2 className='text-primary text-3xl leading-12 mt-4 font-semibold w-[80%]'>
                        Voices of Confidence, From Our Users to You!
                    </h2>
                </div>
                <div className='hidden md:flex gap-5'>
                    <p className='bg-primary py-3 px-5 rounded-full text-white cursor-pointer'><ArrowLeft /></p>
                    <p className='bg-primary py-3 px-5 rounded-full text-white cursor-pointer'><ArrowRight /></p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='border border-gray-300 rounded-2xl p-8'>
                    <p><Quote className='mb-10'/></p>
                    <p className='mb-20 text-xl text-primary'>
                        This is an outstanding resource that significantly minimizes the time required to initiate and build SaaS projects. Bob WIlsey
                        Bob WIlsey
                        Founder at Retexts
                       
                    </p>
                    <div className='flex gap-5 items-center'>
                        <Image src={assets.profile_icon} alt='' width={60} height={60} />
                        <div>
                            <h2 className='font-semibold text-xl'>Ryzal Yusoff</h2>
                            <p className='text-secondary'>Ryzal Yusoff
                                Founder, Reader Mode</p>
                        </div>
                    </div>
                </div>

                 <div className='border border-gray-300 rounded-2xl p-8'>
                    <p><Quote className='mb-10'/></p>
                    <p className='mb-20 text-xl text-primary'>
                        This is an outstanding resource that significantly minimizes the time required to initiate and build SaaS projects. Bob WIlsey
                        Bob WIlsey
                        Founder at Retexts
                       
                    </p>
                    <div className='flex gap-5 items-center'>
                        <Image src={assets.profile_icon} alt='' width={60} height={60} />
                        <div>
                            <h2 className='font-semibold text-xl'>Ryzal Yusoff</h2>
                            <p className='text-secondary'>Ryzal Yusoff
                                Founder, Reader Mode</p>
                        </div>
                    </div>
                </div>

                 <div className='border border-gray-300 rounded-2xl p-8'>
                    <p><Quote className='mb-10'/></p>
                    <p className='mb-20 text-xl text-primary'>
                        This is an outstanding resource that significantly minimizes the time required to initiate and build SaaS projects. Bob WIlsey
                        Bob WIlsey
                        Founder at Retexts
                       
                    </p>
                    <div className='flex gap-5 items-center'>
                        <Image src={assets.profile_icon} alt='' width={60} height={60} />
                        <div>
                            <h2 className='font-semibold text-xl'>Ryzal Yusoff</h2>
                            <p className='text-secondary'>Ryzal Yusoff
                                Founder, Reader Mode</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Testimonial