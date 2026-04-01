import { aboutUserData } from '@/assets/assets'
import { UserRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const OurTeam = () => {
    return (
        <section className='bg-gray-100 py-15'>
            <div className='container mx-auto px-4'>
                <span className='flex items-center gap-2 w-fit text-[#13161f]
                 font-semibold border border-black rounded-xl px-5 py-1 tracking-widest mb-8'><UserRound />Our Team -</span>
                 <h2 className='text-primary text-3xl'>Driven by Passion, Powered by People.</h2>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        aboutUserData.map((user) => (
                            <div key={user.id} className='bg-white p-2 rounded-lg'>
                                <Image src={user.image} alt='' className='w-full object-cover rounded-lg' />
                                <h2 className='text-primary font-semibold text-xl px-5 py-4'>{user.name}</h2>
                                <p className='text-secondary font-semibold px-5'>{user.title}</p>
                            </div>
                        ))
                    }
                 </div>
            </div>
        </section>
    )
}

export default OurTeam