import BottomCta from "@/components/BottomCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeProjects from "@/components/HomeProjects";
import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="w-full h-full overflow-x-hidden">  
    <Navbar /> 
    <Hero />
    <WhatWeDo />
    <HomeProjects />
    <WhyChooseUs />
    <BottomCta />
    <Footer />
    </main>
  );
}

