import React from 'react'
import "../App.css"

const Hero = () => {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[#DFDFF2]"  // Using the color directly since bg-blue-75 isn't defined
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg bg-white p-4">
            <div className="font-general text-black text-center">
                MiniVideoPlayer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;