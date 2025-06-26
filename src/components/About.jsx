import { useGSAP } from "@gsap/react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useRef } from "react";

const About = () => {
  const containerRef = useRef();
  
  useGSAP(() => {
    // Responsive initial sizing
    const isMobile = window.innerWidth < 768;
    const initialWidth = isMobile ? "60vw" : "35vw";
    const initialHeight = isMobile ? "50vh" : "80vh";
    
    gsap.set(".tilt-img", {
      rotateY: 30,
      transformPerspective: 1000,
      height: initialHeight,
      width: initialWidth,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });
    
    tl.to(".tilt-img", {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      xPercent: isMobile ? -50 : -35,
      width: "105vw",
      height: "100vh",
      ease: "power2.inOut",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#textsub",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      }
    });
    
    tl2.to("#textsub", {
      opacity: 0,
      y: isMobile ? -50 : -100,
    });
  }, { scope: containerRef });

  return (
    <div id="about" className="min-h-screen w-screen" ref={containerRef}>
      <div className="relative flex flex-col mt-20 md:mt-32 mb-8 justify-center items-center text-center px-4">
        <h2 className="uppercase font-general mb-4 md:mb-8 text-sm md:text-[20px]">
          Welcome to zentry
        </h2>
        
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's<br/> l<b>a</b>rgest shared adventure"
          containerClass="mt-3 md:mt-5 mb-3 md:mb-5 !text-black text-center"
        />

        <div id="textsub" className="about-subtext text-gray-500 text-sm md:text-base max-w-md md:max-w-2xl mx-auto">
          <p>The Game of Games Begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      <div id="clip" className="h-dvh w-full">
        <div className="tilt-img about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute border-2 border-black left-0 top-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;