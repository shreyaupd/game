import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import { useState } from "react";


const Story = () => {
  const imgref = useRef();
const handleMouseMove = (e) => {
    console.log(e);
    const { clientX, clientY } = e;
    const element= imgref.current;
    if(!element)
      return;
    const rect =  element.getBoundingClientRect()
    const xpos =clientX-rect.left;
    const ypos =clientY-rect.top;
    const centerX=rect.width/2;
    const centerY=rect.height/2;
    const rotateX=((ypos-centerY)/centerY)*-10
    const rotateY=((xpos-centerX)/centerX)*10

     gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = imgref.current;
    if(element){
      gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
    }
  }
  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>

        <div className="relative size-full">
        <AnimatedTitle
        title="the st<b>o</b>ry of <br/> a hidden real<b>m</b>"
        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />
         <div className="story-img-container">
          <div className="story-img-mask">
            <div className="story-img-content">
              <img src="/img/entrance.webp"
              ref={imgref}
              onMouseMove={handleMouseMove}
               onMouseEnter={handleMouseLeave}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseLeave}
              className="rounded-2xl"
              alt="entrance.webp" />
            </div>

            
          </div>
         </div>
          
        </div>
      </div>
    </div>
  );
};

export default Story;

// The rect object contains these critical properties (all in pixels):

// Property	Description
// x / left	Distance from left edge of viewport to element's left edge.
// y / top	Distance from top edge of viewport to element's top edge.
// width	Element’s width (including padding, not margin).
// height	Element’s height (including padding, not margin).
// right	Distance from viewport left to element's right edge.
// bottom	Distance from viewport top to element's bottom edge.