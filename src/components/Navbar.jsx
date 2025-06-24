import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import Button from "./Button";
import gsap from "gsap";
const navItems = ["Nexus", "Vault", "Prologue", "About", "contact"];

const Navbar = () => {
  const { y: CurrentY } = useWindowScroll(); 
  const [LastY, setLastY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  useEffect(() => {
    if (CurrentY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav")
      navContainerRef.current.classList.add("fixed")
    }
    else if (CurrentY>LastY) {
        setIsNavVisible(false);
        navContainerRef.current.classList.add("floating-nav")
    }  
     else if (CurrentY<LastY) {
        setIsNavVisible(true);
        navContainerRef.current.classList.add("floating-nav")
    }  
    setLastY(CurrentY);
   
  }, [CurrentY]); 

  useEffect(()=>{
    gsap.to(navContainerRef.current,{
      y:isNavVisible?0:-100,
      opacity:isNavVisible?1:0,
      duration:0.2,
    })
  },[isNavVisible])

  const toggleAudioIndicator = () => {
    setIsAudioPlaying(prev => !prev);
    setIsIndicatorActive(prev => !prev);
  };

  useEffect(() => {
    if (audioElementRef.current) {
      if (isIndicatorActive) {
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [isIndicatorActive]);

  return (
    <div
      ref={navContainerRef}
      className="inset-x-0 h-16 floating-nav transition-all duration-700 top-4 z-50 sm:inset-x-6"
    >
      <header className="absolute w-full top-1/2 -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex  gap-7">
            <img src="/img/logo.png" alt="logo" className="h-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="hidden md:flex ml-auto">
            <div className="flex gap-5 items-center">
              {navItems.map((item, index) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="uppercase nav-hover-btn">
                  {item}
                </a>
              ))}
              
                <button className="ml-10 flex item-center space-x-0.5" onClick={toggleAudioIndicator}>
                  <audio ref={audioElementRef} src="/audio/loop.mp3" className="hidden" loop/>
                  {[1,2,3,4].map((bar)=>(
                    <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : '' }` } style={{animationDelay: `${bar*0.1}s`}}></div>
                  ))}
                </button>
             
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
