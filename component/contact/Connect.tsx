import { ArrowRight, BriefcaseBusiness, Handshake, MessageCircle, ShoppingBag } from 'lucide-react'
import React from 'react'

const Connect = () => {
    return (
        <section id=''>
            <div className="text-white bg-linear-to-b from-black via-[#1a0b3d] to-white">
                <div className='container mx-auto px-4 py-25'>
                    <h2 className='text-white text-5xl'>Let`s Connect</h2>
                    <p className='w-[80%] text-xl leading-8 my-8'>Connect with Pimjo for partnership opportunities, career opportunities, brand resources, and product support. Discover cross-promotion options, join our purpose-driven team, access official logos, or seek technical help through our contact form.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className='bg-white px-4 rounded-2xl'>
                            <span className='text-primary'><Handshake className='my-5' size={40} /></span>
                            <h2 className='text-primary text-lg mb-2 font-semibold'>Partnership Opportunities</h2>
                            <p className='text-primary leading-6 mb-5'>Boost visibility and traffic through cross-promotion and link placement. Let`s grow together</p>
                            <button className='flex items-center justify-center gap-4 py-2 px-8 border 
                                border-gray-200 rounded-full text-primary font-semibold text-lg'>SELECT PRODUCT
                                    <ArrowRight className='text-[#735DFF] tracking-widest' /></button>
                        </div>
                        <div className='bg-white px-4 rounded-2xl'>
                            <span className='text-primary'><BriefcaseBusiness className='my-5' size={40} /></span>
                            <h2 className='text-primary text-lg mb-2 font-semibold'>Join Our Team</h2>
                            <p className='text-secondary leading-6 mb-5'>Join a purpose-driven team building impactful products—creatives, developers, & strategists welcome.</p>
                            <button className='flex items-center justify-center gap-4 py-2 px-8 border 
                                border-gray-200 rounded-full text-primary font-semibold text-lg'>SEE OPENINGS
                                    <ArrowRight className='text-[#735DFF] tracking-widest' /></button>
                        </div>
                        <div className='bg-white px-4 rounded-2xl'>
                            <span className='text-primary'><MessageCircle className='my-5' size={40} /></span>
                            <h2 className='text-primary text-lg mb-2 font-semibold'>Brand Assets</h2>
                            <p className='text-secondary leading-6 mb-5'>Download our official logos, icons, & brand guidelines to ensure consistent and accurate representation.</p>
                            <button className='flex items-center justify-center gap-4 py-2 px-8 border 
                                border-gray-200 rounded-full text-primary font-semibold text-lg'>BRAND ASSETS
                                    <ArrowRight className='text-[#735DFF] tracking-widest' /></button>
                        </div>
                        <div className='bg-white px-4 rounded-2xl'>
                            <span className='text-primary'><ShoppingBag className='my-5' size={40} /></span>
                            <h2 className='text-primary text-lg mb-2 font-semibold'>Need Help with a Product?</h2>
                            <p className='text-secondary leading-6 mb-5'>For technical support or partnership inquiries, reach out via the specific brand&apos;s contact form.</p>
                            <button className='flex items-center justify-center gap-4 py-2 px-8 border 
                                border-gray-200 rounded-full text-primary font-semibold text-lg'>ALL PRODUCTS
                                    <ArrowRight className='text-[#735DFF] tracking-widest' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Connect