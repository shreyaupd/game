import React, { useRef, useState, useEffect } from 'react';

const BentoCards = ({ src, title, description, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const vidref = useRef();

  useEffect(() => {
    if (id === "#last" && vidref.current) {
      vidref.current.play();
      setIsHovered(true);
    }
  }, [id]);

  const handleMouseEnter = () => {
    if (vidref.current && id !== "#last") {
      vidref.current.play();
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (vidref.current && id !== "#last") {
      vidref.current.pause();
      setIsHovered(false);
    }
  };

  return (
    <div 
      className={`relative flex justify-center items-center w-full h-full ${isHovered ? 'scale-[97%]' : 'scale-100'} transition-all duration-700 ease-in-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={vidref} 
        src={src}
        loop
        muted
        className='absolute left-0 top-0 w-full h-full object-cover'
      />
      
      <div className='absolute left-10 top-10 z-10 flex flex-col items-start'>
        <h1 className="text-white text-2xl special-font md:text-4xl font-bold uppercase">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-white text-sm md:text-base max-w-md uppercase">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section className='bg-black pb-52'>
      <div className='flex flex-col pt-24 px-6 md:pl-20 max-w-7xl mx-auto'>
        <p className='text-white font-circular-web text-xl md:text-2xl'>
          Into The Metagame Layer
        </p>
        <p className='max-w-96 font-circular-web text-lg text-blue-50 opacity-50 mt-2'>
          Immerse yourself in an IP-rich product universe where players, agentic AI and blockchain lead the new economic paradigm.
        </p>
      </div>

      {/* BLOCK 1: Full-width single card */}
      <div className="mt-24 w-full max-w-7xl mx-auto px-6">
        <div className='border border-gray-800 h-96 w-full overflow-hidden rounded-lg'>
          <BentoCards
            src={'videos/feature-1.mp4'}
            title={<>radia<b>n</b>t</>}
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>
      </div>

      {/* BLOCK 2: Flex container */}
      <div className="mt-6 flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-6">
        {/* Left tall card */}
        <div className="flex-1 border border-gray-800 h-[600px] overflow-hidden rounded-lg">
          <BentoCards
            src="videos/feature-2.mp4"
            title={<>zig<b>m</b>a</>}
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
          />
        </div>
        
        {/* Right stacked cards */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="border border-gray-800 h-[288px] overflow-hidden rounded-lg">
            <BentoCards
              src="videos/feature-3.mp4"
              title={<>xe<b>n</b>on</>}
              description="Competitive esports platform with blockchain-powered tournaments."
            />
          </div>
          
          <div className="border border-gray-800 h-[288px] overflow-hidden rounded-lg">
            <BentoCards
              src="videos/feature-4.mp4"
              title={<>or<b>a</b>cle</>}
              description="AI-powered game mastering tools for next-gen RPG experiences."
            />
          </div>
        </div>
      </div>

      {/* BLOCK 3: Bottom row */}
      <div className="mt-6 flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-6">
        <div className="flex-1 border border-gray-800 h-96 overflow-hidden rounded-lg bg-blue-800">
          <BentoCards
            src="videos/feature-6.mp4"
            title={<> M<b>o</b>re<br/> co<b>m</b>ing<br/>  s<b>o</b><b>o</b>n.</>}
          />
        </div>
        <div className="flex-1 border border-gray-800 h-96 overflow-hidden rounded-lg">
          <BentoCards 
            id="#last"
            src="videos/feature-5.mp4"
            title={<>chro<b>n</b>os</>}
            description="Time-based gameplay mechanics and persistence across all platforms."
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;