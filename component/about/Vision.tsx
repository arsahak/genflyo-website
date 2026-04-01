import { assets } from '@/assets/assets'
import { ChessQueen, Facebook, Linkedin, Twitter, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Vision = () => {
    return (
        <section className='py-15'>
            <div className='container mx-auto px-4'>
                <div className='flex gap-20 border-3 p-8 rounded-4xl border-gray-200'>
                    <div>
                        <Image src={assets.about4} alt='' className='aspect-square rounded-2xl' />
                    </div>
                    <div>
                        <span className='flex items-center gap-2 w-fit text-[#13161f]
                    font-semibold border border-black rounded-xl px-5 py-1 tracking-widest mb-8'><ChessQueen />Owners Vision -</span>
                        <h2 className='text-[#13161f] text-3xl'>We push boundaries, collaborate with enthusiasm & creativity.</h2>
                        <p className='text-secondary leading-7 py-5'>At Pimjo, our vision is to empower creators and teams to turn ambitious ideas into real-world impact. We believe great products are born where design, engineering, and purpose meet. That’s why we’re obsessed with crafting tools that are intuitive, scalable, and built to last.
                        </p>
                        <div className="flex items-center gap-5 text-white w-fit pt-2">
                            <Link href="" className='bg-primary p-3 rounded-full'><X /></Link>
                            <Link href="" className='bg-primary p-3 rounded-full'><Linkedin /></Link>
                            <Link href="" className='bg-primary p-3 rounded-full'><Facebook /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision