
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 bg-white/80 dark:bg-black/90 backdrop-blur-sm z-0"></div>
      <Navigation />
      <SocialSidebar />
      
      <main className="max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
