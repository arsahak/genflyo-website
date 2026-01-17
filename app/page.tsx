import Achivment from "@/component/home/Achivment";
import Blog from "@/component/home/Blog";
import Gallary from "@/component/home/Gallary";
import Hero from "@/component/home/Hero";
import Products from "@/component/home/Products";
import ShineLine from "@/component/home/ShineLine";
import Subscriptions from "@/component/home/Subscriptions";
import Testimonial from "@/component/home/Testimonial";
import WhatUs from "@/component/home/WhatUs";

export default function Home() {
  return <div className="">
    <Hero />
    <WhatUs />
    <ShineLine />
    <Products />
    <Achivment />
    <Testimonial />
    <Gallary />
    <Blog />
    <Subscriptions />
  </div>;
}
