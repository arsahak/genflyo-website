import React from 'react'

const Hero = () => {
    return (
        <div className='pt-15 bg-[#000000] text-white'>
            <div className='text-center px-5 lg:px-[12%]'>
                <h2 className='text-3xl leading-9 md:text-5xl md:leading-14 lg:text-6xl lg:leading-17'>We Build Tools to CreateWhat’s Next on the Web
                </h2>
                <p className='leading-6 md:text-[18px] md:leading-7 lg:text-xl lg:leading-8 my-5'>Pimjo empowers developers, designers, startups, and businesses with intuitive tools and
                    impactful products that streamline workflows, speed up design and development, and guide
                    every step from concept to launch — helping you build web projects and solutions with clarity,
                    confidence, and the right resources.
                </p>
                <div className='flex justify-center items-center gap-5'>
                    <button className='font-bold tracking-widest text-[#232939] cursor-pointer
                        bg-white px-8 py-4 rounded-full'>
                        PRODUCTS
                    </button>
                    <button className='font-bold tracking-widest text-white cursor-pointer
                        border-2 border-[#7568D7] px-8 py-4 rounded-full bg-[#6C5CD8]'>
                        ABOUT
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Hero