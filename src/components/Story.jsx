import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const Story = () => {
  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>

        <div className="relative size-full">
        <AnimatedTitle
        title="the st<b>o</b>ry of <br/> a hidden real<b>m</b>"
        />
         <div className="story-img-container">
          <div className="story-img-mask">
            <div className="story-img-content">
              <img src="/img/entrance.webp"
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