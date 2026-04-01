import { BenefitData } from '@/assets/assets'
import { HandHeart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Benefit = () => {
    return (
        <section className=''>
            <div>
                <div className='container mx-auto px-4 py-15'>
                    <span className='flex items-center gap-2 w-fit text-[#13161f]
                    font-semibold border border-black rounded-xl px-5 py-1 tracking-widest mb-8'><HandHeart />Benefits -</span>
                    <h2 className='text-primary text-3xl'>Enjoy Great Benefits</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                        {
                            BenefitData.map((data) => (
                                <div key={data.id} className='flex items-center gap-5 border border-gray-200 p-8 rounded-2xl'>
                                    <Image src={data.image} alt='' />
                                    <h2 className='text-primary font-medium text-2xl'>{data.title}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefit