import { Facebook, Heart, Linkedin, MapPin, Phone, Twitter, X } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return <section id="footer" className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="">
        <h2><Link href="#" className="text-4xl font-bold">PIMJO</Link></h2>
        <p className="text-secondary leading-6 my-8">
          We Build Tools for Those Creating the Future of the Web - providing the right tools to craft awesome
          web solutions with confidence and clarity.
        </p>
        <div className="flex justify-center items-center gap-8 border-2 border-[#444379] py-3 px-6 
          rounded-full bg-primary text-white w-fit">
            <Link href=""><Twitter /></Link>
          <Link href=""><X /></Link>
          <Link href=""><Linkedin /></Link>
          <Link href=""><Facebook /></Link>
        </div>
      </div>
      <div className="flex lg:justify-center gap-40 lg:gap-30">
        <div className="">
          <h2 className="text-[#7b90b5] font-semibold mb-12">Links</h2>
          <ul className="flex flex-col gap-10 text-primary font-semibold">
            <Link href="" className="hover:text-blue-700 duration-200">Products</Link>
            <Link href="" className="hover:text-blue-700 duration-200">Blogs</Link>
            <Link href="" className="hover:text-blue-700 duration-200">Careers</Link>
          </ul>
        </div>
        <div className="mt-18">
          <ul className="flex flex-col gap-10 text-primary font-semibold">
            <Link href="" className="hover:text-blue-700 duration-200">About us</Link>
            <Link href="" className="hover:text-blue-700 duration-200">Contact us</Link>
            <Link href="" className="hover:text-blue-700 duration-200">Privary policy</Link>
          </ul>
        </div>
      </div>
      <div className="lg:flex gap-10">
        <div className="">
          <h2 className="text-[#7b90b5] font-semibold mb-12">We Are Here</h2>
          <h3 className="text-primary font-semibold flex items-center gap-1"><span><MapPin width={20} /></span>Bangladesh</h3>
          <p className="my-5 text-primary leading-6">Level 2, House 03, Road 05, Baridhara J Block, Dhaka 1212</p>
          <p className="flex items-center gap-1"><span><Phone width={20}/></span>+8801764801826</p>
        </div>
        <div className="">
          <h2 className="text-primary font-semibold mt-18 flex items-center gap-1"><span><MapPin width={20} /></span>United States</h2>
          <p className="my-5 text-secondary leading-6">Pimjo LLC - 30 N Gould St Ste R Sheridan, WY 82801</p>
          <p className="flex items-center gap-1"><span><Phone width={20} /></span>+16283998030</p>
        </div>
      </div>
    </div>

    <div className="text-center md:flex justify-between my-20">
      <div>
        <p className="text-secondary tracking-widest my-5 md:my-0">© 2026 Pimjo - All Rights Reserved.</p>
      </div>
      <div>
        <p className="text-secondary tracking-widest flex gap-2 font-bold justify-center">Handcrafted with <Heart className="text-[#725CFF]" /> By Pimjo</p>
      </div>
    </div>
  </section>
};

export default Footer;
