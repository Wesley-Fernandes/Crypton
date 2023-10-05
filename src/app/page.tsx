import Navbar from "@/components/Navbar";
import Events from "@/screens/Events";

import React from "react";
import HomeContainer from "@/components/Home/Home.container";
import HomeLeft from "@/components/Home/Home.left";
import HomeRight from "@/components/Home/Home.right";
import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function Page() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <HomeContainer>
        <HomeLeft />
        <HomeRight/>
      </HomeContainer>
      <footer className="bg-[#162446] min-w-full h-[132px] flex items-center justify-center max-[1280px]:w-screen max-[1280px]:hidden">
        <img src="/homepage/List.png" alt="Lista" />
      </footer>
      <About/>
      <Features/>
      <Services/>
      <Footer/>
    </div>
  );
}
