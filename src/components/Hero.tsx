
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const Hero: React.FC = () => {
  return <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-16 gap-8">
      <div className="max-w-2xl backdrop-blur-sm bg-white/40 dark:bg-black/40 p-8 rounded-lg border border-black dark:border-white">
        <p className="font-mono text-black dark:text-white mb-5 animate-fade-in opacity-0 text-base">Hi, my name is</p>
        <h1 style={{
        animationDelay: '100ms'
      }} className="text-4xl lg:text-7xl mb-4 animate-fade-in opacity-0 font-bold text-black dark:text-white mx-0 md:text-5xl">Rohan Shankar Kusalkar.</h1>
        <h2 style={{
        animationDelay: '200ms'
      }} className="text-3xl lg:text-6xl mb-6 animate-fade-in opacity-0 font-bold text-black dark:text-white md:text-xl">I build things from scratch to web!</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl text-lg mb-12 animate-fade-in opacity-0" style={{
        animationDelay: '300ms'
      }}>
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="animate-fade-in opacity-0" style={{
        animationDelay: '400ms'
      }}>
          <Button asChild className="bg-transparent hover:bg-black/10 dark:hover:bg-white/10 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black py-4 px-7 text-base transition-colors">
            <a href="#projects">Check out my work!</a>
          </Button>
        </div>
      </div>
      <div className="md:w-1/3 animate-fade-in opacity-0" style={{
      animationDelay: '500ms'
    }}>
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-black dark:bg-white opacity-30 blur-sm"></div>
          <Avatar className="w-72 h-72 mx-auto">
            <AvatarImage src="/lovable-uploads/a0cd5572-61aa-4261-a065-8a5ae61652fb.png" alt="Rohan Shankar Kusalkar" className="object-cover" />
            <AvatarFallback className="text-4xl">RSK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>;
};
export default Hero;
