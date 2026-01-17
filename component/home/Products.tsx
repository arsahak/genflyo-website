import { productsData } from '@/assets/assets'
import { ArrowUpRight, Package2 } from 'lucide-react'
import Image from 'next/image'

const Products = () => {
    return (
        <div className='px-[4%]'>
            <div className='flex items-center gap-3 border border-[#13161F] rounded-xl w-fit
            font-bold text-[#13161f] py-1 px-4'>
                <Package2 />
                <p className='text-[#4D5056]'>
                    Products & Tools —
                </p>
            </div>
            <div>
                <h2 className='text-[#232939] text-3xl leading-12 my-8 font-semibold'>
                    Build high-impact web solutions and great <br /> experiences with ready-to-use tools
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    productsData.map((item) => (
                        <div key={item.id} className='border border-gray-300 rounded-2xl p-8'>
                            <div className='flex items-center gap-5'>
                                <Image src={item.image} alt={item.title} height={50} width={50} className='rounded-2xl' />
                                <h2 className='my-4 text-[#232939] font-semibold text-2xl'>{item.title}</h2>
                            </div>
                            <p className='text-[#232939] leading-8 text-2xl my-5'>{item.description}</p>
                            <button className='px-6 py-3 border-2 border-gray-200 rounded-4xl font-bold 
                            text-[#232939] tracking-widest flex items-center justify-center gap-2 cursor-pointer'>
                                VIEW PRODUCTS<ArrowUpRight className='text-[#735DFF]'/>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products