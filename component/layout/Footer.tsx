import { Facebook, Heart, Linkedin, X } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return <div className="px-[8%]">
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 mb-10">
      <div className="lg:col-span-3">
        <h2><Link href="#" className="text-3xl font-bold">PIMJO</Link></h2>
        <p className="text-[#657694] leading-6 my-8">
          We Build Tools for Those Creating the Future of the Web - providing the right tools to craft awesome
          web solutions with confidence and clarity.
        </p>
        <div className="flex justify-center items-center gap-8 border-2 border-[#444379] py-3 px-6 
          rounded-full bg-[#232939] text-white w-fit">
          <Link href=""><X /></Link>
          <Link href=""><Linkedin /></Link>
          <Link href=""><Facebook /></Link>
        </div>
      </div>
      <div>
        <h2 className="text-[#7b90b5] font-semibold mb-12">Links</h2>
        <ul className="flex flex-col gap-10 text-[#232939] font-semibold">
          <Link href="" >Products</Link>
          <Link href="" >Blogs</Link>
          <Link href="" >Careers</Link>
        </ul>
      </div>
      <div className="mt-18">
        <ul className="flex flex-col gap-10 text-[#232939] font-semibold">
          <Link href="" >About us</Link>
          <Link href="" >Contact us</Link>
          <Link href="" >Privary policy</Link>
        </ul>
      </div>
      <div className="col-span-2">
        <h2 className="text-[#7b90b5] font-semibold mb-12">We Are Here</h2>
        <h3 className="text-[#232939] font-semibold">Bangladesh</h3>
        <p className="mt-5 text-[#657694] leading-6">Level 2, House 03, Road 05, Baridhara J Block, Dhaka 1212</p>
        <p className="mt-9">+8801764801826</p>
      </div>
      <div className="col-span-2">
        <h2 className="text-[#232939] font-semibold mt-18">United States</h2>
        <p className="mt-5 text-[#657694] leading-6">Pimjo LLC - 30 N Gould St Ste R Sheridan, WY 82801</p>
        <p className="mt-8">+16283998030</p>
      </div>
    </div>


    <div className="text-center md:flex justify-between my-20">
      <div>
        <p className="text-[#657694] tracking-widest my-5 md:my-0">© 2026 Pimjo - All Rights Reserved.</p>
      </div>
      <div>
        <p className="text-[#657694] tracking-widest flex gap-2 font-bold justify-center">Handcrafted with <Heart className="text-[#725CFF]"/> By Pimjo</p>
      </div>
    </div>
  </div>
};

export default Footer;
