import { useEffect, useRef, useState } from "react";
import "../App.css";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasclicked, setHasclicked] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [loadedvid, setLoadedvid] = useState(0);
  const totalVideos = 3;
  const nextvideoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  const upcommingVidIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVideoPlayer = () => {
    setHasclicked(true);
    setCurrentIndex(upcommingVidIndex);
  };

  const handelloadedvideo = () => {
    setLoadedvid((prev) => prev + 1);
  };

  useEffect(() => {
    if(loadedvid === totalVideos){
      setIsLoading(false);
    }
  },[loadedvid]);

  useGSAP(() => {
   if(hasclicked){
    gsap.set("#next-video",{visibility:"visible"});
    gsap.to("#next-video", {
      transformOrigin: "center",
      scale: 1,
      width:'100%',
      height: "100%",
      duration: 1,
      ease: "power1.inOut",
      onStart: () => {
       nextvideoRef.current.play()
      },
    })
      gsap.from("#current-video", {
        transformOrigin: "center",
        scale: 0,
        duration: 1,
        ease: "power1.inOut",
      
      });
   }
  },{dependencies:[currentIndex],revertOnUpdate: true});

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath:'polygon(14% 0%, 70% 0%, 90% 90%, 0% 100%)',
      borderRadius:'0 0 40% 10%',
    })

    gsap.from("#video-frame", {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
      
    })
     
  })
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      {isloading &&(
      <div className="flex-center overflow-hidden absolute z-500 w-screen h-dvh flex-center bd-violet-50">
        <div className="three-body ">
          <div className="three-body__dot"/>
          <div className="three-body__dot"/>
          <div className="three-body__dot"/>
        </div>
      </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-full w-full overflow-hidden"
      >
        <div>
          {/* Hoverable Mini Video Frame */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            
              <div
                onClick={handleMiniVideoPlayer}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextvideoRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handelloadedvideo}
                />
              </div>
           
          </div>

          {/* Hidden Preloaded Video */}
          <video
            ref={nextvideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handelloadedvideo}
          />

          {/* Background Video */}
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            loop
            autoPlay
            muted
            id="bg-video"
            className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0"
          />
        </div>

        {/* Top-most Gaming Text */}
          <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
            G<b>A</b>MING
          </h1>

          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-20 px-4 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100">
                redefi<b>n</b>e
              </h1>

              <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                Enter the Metagame Layer <br /> Unleash the Play Economy
              </p>

              <Button
                id="watch-trailer"
                title="Watch trailer"
                leftIcon={<TiLocationArrow />}
                containerClass="!bg-yellow-300 flex-center gap-1"
              />
            </div>
          </div>
        </div>
          <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
            G<b>A</b>MING
          </h1>
      </div>
  );
};
export default Hero;
