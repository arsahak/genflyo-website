import { assets } from '@/assets/assets'
import { Mail, MapPin, Phone, Pin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Location = () => {
    return (
        <section id=''>
            <div className='py-10 bg-[#F5F6FA]'>
                <div className='container mx-auto px-4'>
                    <div>
                        <p className='flex items-center gap-2 text-primary font-semibold text-lg border border-black px-5 w-fit rounded-2xl mb-10'><Pin />We Are Here -</p>
                    </div>
                    <div className='flex items-stretch gap-5'>

                        <div className='p-2 bg-white rounded-2xl'>
                            <Image src={assets.location1} alt='' className='w-full h-50 object-cover rounded-t-2xl' />
                            <div className='px-4'>
                                <h2 className='text-primary text-2xl font-semibold flex items-center gap-3 py-4'><MapPin />Pimjo HQ - Bangladesh</h2>
                                <p className='text-secondary leading-8 text-xl'>Level 2, House 03, Road 05,<br></br> Baridhara J Block, Dhaka 1212</p>
                            </div>
                        </div>
                        <div className='p-2 bg-white rounded-2xl flex-1'>
                            <Image src={assets.location2} alt='' className='w-full h-50 object-cover rounded-t-2xl' />
                            <div className='px-4'>
                                <h2 className='text-primary text-2xl font-semibold flex items-center gap-3 py-4'><MapPin />Pimjo HQ - Bangladesh</h2>
                                <p className='text-secondary leading-8 text-xl'>Level 2, House 03, Road 05,<br></br> Baridhara J Block, Dhaka 1212</p>
                            </div>
                        </div>
                        <div className='p-5 bg-white rounded-2xl flex-1'>
                            <p className='pb-40'>Contacts</p>
                            <div className=''>
                                <h2 className='text-[#475B82] text-2xl font-semibold flex items-center gap-3 py-5'><Mail />hello@pimjo.com</h2>
                                <p className='text-[#475B82] text-2xl font-semibold flex items-center gap-3 pb-5'><Phone />+880 1456852456</p>
                                <p className='text-[#475B82] text-2xl font-semibold flex items-center gap-3 '><Phone />+16283998030</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location