import { Cat, Mail } from 'lucide-react'
import React from 'react'

const Subscriptions = () => {
    return (
        <div className='px-[4%] lg:flex mb-20'>
            <div className='bg-[#232939] py-10 pl-10 pr-20 rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none flex-1'>
                <p className='text-[#d2d9e5] font-semibold'>Pimjo Community</p>
                <h2 className='text-[#b5b1ff] text-3xl leading-10 my-3'>Connect with Builders and Pimjo Users on Discord!</h2>
                <button className='bg-[#725CFF] cursor-pointer flex items-center gap-3 px-8 py-3 text-white text mt-5 rounded-full font-semibold tracking-widest'>
                    <Cat className='text-white' />JOIN NOW</button>
            </div>
            <div className='bg-[#13161F] py-10 px-5 lg:px-20 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none flex-1'>
                <p className='text-[#d2d9e5] font-semibold'>Pimjo Newsletter</p>
                <h2 className='text-[#F9FAFA] text-2xl leading-8 my-5 lg:my-3'>Stay in the loop with fresh updates, exclusive offers, and the latest product news—delivered right to your inbox!</h2>
                <div className='lg:relative'>
                    <div className='bg-[#334059] mb-3 lg:mb-0 flex py-4 pl-8 pr-2 items-center rounded-full focus-within:border border-gray-200'>
                        <Mail className='text-white mr-3' />
                        <input type="email" className='text-[#7B90B5] text-xl outline-none' value="" placeholder='Enter your email' />
                    </div>
                    <button type='submit' className='text-white bg-[#475B82] lg:py-3 lg:px-7 py-4 rounded-full 
                    tracking-widest font-bold cursor-pointer w-full lg:w-fit lg:absolute lg:right-2 lg:top-1.5'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Subscriptions