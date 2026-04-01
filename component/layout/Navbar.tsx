"use client"
import { productsData } from "@/assets/assets";
import { ArrowUpRight, ChevronDown, Facebook, Linkedin, MenuIcon, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return <section id="navbar" className="bg-[#2D1F99] text-white">
    <div className="flex justify-between items-center py-6 container mx-auto px-4">
      <div>
        <Link href="#" className="text-3xl">PIMJO</Link>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-10">
        <Link href={"/"} className="py-2 hover:text-blue-700 duration-200 font-bold">Home</Link>
        <Link href="#" className="flex py-2 relative group font-bold justify-center items-center gap-1 cursor-default hover:text-blue-700 duration-200">Products <ChevronDown />
          {/* submenu */}
          <div className="hidden absolute top-10 group-hover:block bg-white p-10 rounded-2xl w-325">
            <div className='grid grid-cols-3'>
              {
                productsData.slice(0, 5).map((item) => (
                  <div key={item.id} className='border border-gray-300 rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-5'>
                        <Image src={item.image} alt={item.title} height={50} width={50} className='rounded-2xl' />
                        <h2 className='my-2 text-primary font-semibold text-2xl'>{item.title}</h2>
                      </div>
                      <div className='font-extrabold py-1 px-4 border border-gray-200 rounded-full'>
                        <ArrowUpRight className='text-[#735DFF]' />
                      </div>

                    </div>
                    <p className='text-primary leading-8 text-2xl my-3'>{item.description}</p>
                  </div>

                ))
              }
            </div>
          </div>
        </Link>
        <Link href="#" className="flex py-2 relative group font-bold justify-center items-center gap-1 cursor-default hover:text-blue-700 duration-200">About <ChevronDown />
          {/* submenu */}
          <ul className="hidden group-hover:flex flex-col gap-1 absolute top-10 bg-white text-primary rounded-2xl w-60">
            <li className="hover:bg-[#F5F6FA] rounded-full"><Link href={'/about'} className="font-semibold block px-4 py-2">About pimjo</Link></li>
            <li className="hover:bg-[#F5F6FA] rounded-full"><Link href={'/career'} className="font-semibold block px-4 py-2">Careers</Link></li>
            <li className="hover:bg-[#F5F6FA] rounded-full"><Link href="#" className="font-semibold block px-4 py-2">About</Link></li>
            <li className="hover:bg-[#F5F6FA] rounded-full"><Link href="#" className="font-semibold block px-4 py-2">Contact</Link></li>
          </ul>
        </Link>
        <Link href={"/contact"} className="py-2 hover:text-blue-700 font-bold duration-200">Contact</Link>

      </div>


      <div className="hidden sm:flex justify-center items-center gap-5 border-2 border-[#5C51BE] py-2 px-5 
          rounded-full bg-primary text-white">
        <Link href="" className="hover:text-blue-700 duration-200"><Twitter className="" /></Link>
        <Link href="" className="hover:text-blue-700 duration-200"><X /></Link>
        <Link href="" className="hover:text-blue-700 duration-200"><Linkedin /></Link>
        <Link href="" className="hover:text-blue-700 duration-200"><Facebook /></Link>
      </div>
      <button onClick={() => setMenuOpen(!menuOpen)} className="block bg-black border-2 border-blue-700 rounded-full text-white py-2 px-5 lg:hidden">{menuOpen ? <X /> : <MenuIcon />}</button>
      {/* mobile menu */}
      <ul className={`flex md:hidden flex-col gap-8 p-6  fixed right-5 h-fit top-20
                        bottom-0 w-64 z-50 bg-white text-primary rounded-2xl transition-transform duration-500
                        ${menuOpen ? 'block' : 'hidden'}`}>
        <li><Link onClick={() => setMenuOpen(false)} href={"/"} className="text-[#9382FF] font-semibold">Home</Link></li>
        <li><Link onClick={() => setMenuOpen(false)} href="#" className="font-semibold">Products</Link></li>
        <li><Link onClick={() => setMenuOpen(false)} href="#" className="font-semibold">About</Link></li>
        <li><Link onClick={() => setMenuOpen(false)} href={"/contact"} className="font-semibold">Contact</Link></li>
        <div className="flex justify-center items-center gap-8 border-2 border-[#5C51BE] py-3 px-6 
          rounded-full bg-primary text-white w-fit">
          <Link href=""><Twitter /></Link>
          <Link href=""><X /></Link>
          <Link href=""><Linkedin /></Link>
          <Link href=""><Facebook /></Link>
        </div>
      </ul>

    </div>
  </section>
};

export default Navbar;
