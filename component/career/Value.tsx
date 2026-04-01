import { ValueData } from '@/assets/assets'
import { Pyramid } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Value = () => {
    return (
        <section className='bg-gray-100 py-15'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div>
                        <span className='flex items-center gap-2 w-fit text-[#13161f]
                    font-semibold border border-black rounded-xl px-5 py-1 tracking-widest mb-8'><Pyramid />Values -</span>
                        <h2 className='text-primary text-3xl'>Our Guiding Principles for Growth and Impact</h2>
                    </div>
                    {
                        ValueData.map((data) => (
                            <div key={data.id} className='bg-white p-8 rounded-2xl'>
                                <Image src={data.image} alt='' />
                                <h2 className='text-primary font-medium text-2xl py-5'>{data.title}</h2>
                                <p className='text-secondary'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Value