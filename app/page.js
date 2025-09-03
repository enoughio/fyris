import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="w-full h-full overflow-x-hidden">  
    <Navbar /> 
    <Hero />
    <WhatWeDo />
    </main>
  );
}
